import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPlaneArrival,
  FaInfoCircle,
  FaIdBadge,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import axios from 'axios';
import RequestsTable from './RequestsTable';
import FmpSettings from './FmpSettings';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function SlotManager() {
  const [utcTime, setUtcTime] = useState('');
  const [activeTab, setActiveTab] = useState('my');
  const [role, setRole] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [token, setToken] = useState('');
  const [requests, setRequests] = useState([]);
  const [globalNote, setGlobalNote] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [vatcanCode, setVatcanCode] = useState('');

  const [newRequest, setNewRequest] = useState({
    callsign: '',
    adep: '',
    ades: 'EFRO',
  });

  /* Auto-login on mount if callsign exists in localStorage */
  useEffect(() => {
    const savedCallsign = localStorage.getItem('atc_callsign');
    if (savedCallsign) {
      setRoleInput(savedCallsign);
      login(savedCallsign).then((loginData) => {
        if (loginData?.token) {
          setRole(savedCallsign.toUpperCase());
        }
      });
    }
  }, []);

  useEffect(() => {
    if (warnings.length === 0) return;

    const timer = setTimeout(() => {
      setWarnings([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, [warnings]);

  useEffect(() => {
    const fetchVatcanCode = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/fmp/code`);
        setVatcanCode(res.data.code);
      } catch (err) {
        console.error('Failed to fetch VATCAN code', err);
      }
    };

    fetchVatcanCode();
  }, []);

  useEffect(() => {
    if (!token) return; // everyone must be logged in

    const fetchGlobalNote = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/json/fmp/note`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setGlobalNote(res.data.note);
      } catch (err) {
        console.error('Failed to fetch global note', err);
      }
    };

    fetchGlobalNote();
  }, [token]);

  const isAdepValid =
    newRequest.adep === 'AIRBORNE' ||
    (newRequest.adep.length === 4 && /^[A-Z]{4}$/.test(newRequest.adep));
  const isCallsignValid =
    newRequest.callsign.length > 0 && newRequest.callsign.length <= 8;
  const isAdesValid = Boolean(newRequest.ades);
  const canSubmit = isCallsignValid && isAdepValid && isAdesValid;

  /* UTC clock */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 22)); // HH:MM
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* Fetch requests for this user */
  useEffect(() => {
    if (!role || !token) return;

    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/slots`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch immediately on load
    fetchRequests();

    // Poll every 5 seconds so all 100 users stay in sync
    const interval = setInterval(fetchRequests, 5000);
    return () => clearInterval(interval);
  }, [role, token]);

  const login = async (callsign: string) => {
    try {
      clearWarnings();
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        callsign: callsign.toUpperCase(),
      });
      const { token: jwtToken, role: userRole } = res.data;
      setToken(jwtToken);
      return { token: jwtToken, role: userRole };
    } catch (err: any) {
      addWarning(err.response?.data?.error || 'Login failed');
      localStorage.removeItem('atc_callsign');
    }
  };

  /* Confirm role */
  const confirmRole = async () => {
    if (!roleInput.trim()) return;

    const cleanCallsign = roleInput.trim().toUpperCase();
    const loginData = await login(cleanCallsign);
    if (loginData?.token) {
      localStorage.setItem('atc_callsign', cleanCallsign);
      setRole(cleanCallsign);
    }
  };

  /* Logout */
  const logout = () => {
    localStorage.removeItem('atc_callsign');
    setRole('');
    setRoleInput('');
    setToken('');
    setRequests([]);
    setActiveTab('my');
  };

  /* Submit new request */
  const submitRequest = async () => {
    if (!canSubmit || !token) return;

    try {
      clearWarnings();
      const res = await axios.post(
        `${API_URL}/api/slots`,
        {
          callsign: newRequest.callsign,
          adep: newRequest.adep || 'AIRBORNE',
          ades: newRequest.ades,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setRequests([res.data, ...requests]);
      setNewRequest({ callsign: '', adep: '', ades: 'EFRO' });
    } catch (err: any) {
      const error = err.response?.data?.error;
      if (Array.isArray(error)) {
        error.forEach(addWarning);
      } else {
        addWarning(error || 'Error submitting request');
      }
    }
  };

  const addWarning = (message: string) => {
    setWarnings((prev) => (prev.includes(message) ? prev : [message, ...prev]));
  };

  const clearWarnings = () => setWarnings([]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white">
      {/* TOP MENU */}
      <header className="sticky top-0 z-20 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-2xl font-extrabold">
            <FaPlaneArrival className="text-red-500" />
            <span>
              Slot{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600">
                Manager
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70 font-mono">{utcTime}</span>
            <div className="px-3 py-2 text-sm text-center font-semibold rounded text-gray-300 bg-white/5">
              VATCAN <span className="text-yellow-400">{vatcanCode || ''}</span>
            </div>
            {role && (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded bg-red-600/20 text-red-300 hover:bg-red-600/30 border border-red-500/30 transition"
                title="Logout"
              >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['my', 'all'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-semibold rounded transition ${
                activeTab === tab
                  ? 'bg-fuchsia-700'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {tab === 'my' ? 'My Requests' : 'All Requests'}
            </button>
          ))}
          {role.toLowerCase() === 'secretsanta' && (
            <button
              onClick={() => setActiveTab('fmp')}
              className={`px-3 py-2 text-sm font-semibold rounded transition ${
                activeTab === 'fmp'
                  ? 'bg-fuchsia-700'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              FMP Settings
            </button>
          )}
        </div>

        {/* MY REQUESTS */}
        {activeTab === 'my' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Role selection */}
            {!role && (
              <div className="bg-white/5 border border-white/10 p-6 max-w-md">
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-1.5">
                  <FaIdBadge /> ATC Call Sign
                </h2>
                {warnings.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {warnings.map((warning, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-orange-500/10 border-l-4 border-orange-400 text-orange-200 text-sm p-3 rounded"
                      >
                        <FaExclamationTriangle className="mt-0.5 text-orange-400 shrink-0" />
                        <span>{warning}</span>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                  placeholder="EFHK_E_TWR"
                  className="w-full p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
                />
                <button
                  onClick={confirmRole}
                  disabled={!roleInput.trim()}
                  className={`mt-4 px-4 py-2 rounded text-sm font-semibold transition
                    ${
                    roleInput.trim()
                      ? 'bg-fuchsia-700 hover:bg-fuchsia-800'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }
                  `}
                >
                  Confirm
                </button>
              </div>
            )}

            {/* Requests + Form */}
            {role && (
              <>
                {/* New request */}
                <div className="bg-white/5 border border-white/10 p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    New non-event request
                  </h2>

                  <div className="grid md:grid-cols-5 gap-4">
                    {/* Call sign */}
                    <div>
                      <label className="block text-sm text-white/70 mb-1">
                        Call sign
                      </label>
                      <input
                        maxLength={8}
                        placeholder="SAS123"
                        value={newRequest.callsign}
                        onChange={(e) =>
                          setNewRequest({
                            ...newRequest,
                            callsign: e.target.value.toUpperCase(),
                          })
                        }
                        className="w-full p-2 h-10 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
                      />
                    </div>

                    {/* ADEP */}
                    <div>
                      <label className="block text-sm text-white/70 mb-1">
                        Origin
                      </label>

                      <input
                        maxLength={4}
                        placeholder="EFXX"
                        value={newRequest.adep}
                        onChange={(e) =>
                          setNewRequest({
                            ...newRequest,
                            adep: e.target.value.toUpperCase(),
                          })
                        }
                        className="w-full p-2 h-10 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setNewRequest({ ...newRequest, adep: 'AIRBORNE' })
                        }
                        className="px-2 py-1 mt-1 font-semibold rounded text-xs text-gray-300 bg-white/10 hover:bg-white/20 border-white/10 border"
                      >
                        Airborne
                      </button>
                    </div>

                    {/* ADES */}
                    <div>
                      <label className="block text-sm text-white/70 mb-1">
                        Destination
                      </label>
                      <select
                        value={newRequest.ades}
                        onChange={(e) =>
                          setNewRequest({
                            ...newRequest,
                            ades: e.target.value,
                          })
                        }
                        className="w-full p-2 h-10 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
                      >
                        <option value="EFRO">EFRO</option>
                        <option value="ESNQ">ESNQ</option>
                        <option value="ENTC">ENTC</option>
                      </select>
                    </div>

                    {/* Requested by */}
                    <div>
                      <label className="block text-sm text-white/70 mb-1">
                        Requested by
                      </label>
                      <input
                        value={
                          role.toLowerCase() === 'secretsanta' ? 'FMP' : role
                        }
                        readOnly
                        className="w-full p-2 h-10 rounded bg-black/20 border border-white/10 text-white/70"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/70 mb-1">
                        Send request
                      </label>
                      <button
                        onClick={submitRequest}
                        disabled={!canSubmit}
                        className={`w-full p-2 h-10 rounded font-semibold text-sm transition border border-white/5
                        ${
                          canSubmit
                            ? 'bg-fuchsia-700 hover:bg-fuchsia-800'
                            : 'bg-white/10 text-white/40 cursor-not-allowed'
                        }
                      `}
                      >
                        Send request
                      </button>
                    </div>
                  </div>

                  {warnings.length > 0 && (
                    <div className="mt-4">
                      {warnings.map((warning, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-orange-500/10 border-l-4 border-orange-400 text-orange-200 text-sm p-3 rounded"
                        >
                          <FaExclamationTriangle className="text-orange-400 shrink-0" />
                          <span>{warning}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {globalNote && (
                    <div className="flex items-center gap-2 bg-sky-400/10 border-l-4 border-sky-400 text-sky-200 text-sm p-3 rounded mt-4">
                      <FaInfoCircle className="text-sky-300 shrink-0 text-base" />
                      <span>{globalNote}</span>
                    </div>
                  )}

                  <div className="mt-4">
                    <div className="flex items-center gap-2 bg-pink-400/10 border-l-4 border-pink-400 text-pink-200 text-sm p-3 rounded">
                      <FaQuestionCircle className="text-pink-300 shrink-0 text-base" />
                      <span>
                        The release request should be made earliest after the en-route clearance has been requested.
                        Release is required when a Ground Stop has been issued via ECFMP.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Requests table */}
                <RequestsTable
                  requests={requests.filter((r) => r.requested_by === role)}
                  role={role}
                  token={token}
                  setRequests={setRequests}
                />
              </>
            )}
          </motion.div>
        )}

        {/* ALL REQUESTS */}
        {activeTab === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <RequestsTable
              requests={requests}
              role={role}
              token={token}
              setRequests={setRequests}
            />
          </motion.div>
        )}

        {activeTab === 'fmp' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <FmpSettings
              role={role}
              token={token}
              setGlobalNote={(note) => setGlobalNote(note)}
            />
          </motion.div>
        )}
      </main>
    </section>
  );
}