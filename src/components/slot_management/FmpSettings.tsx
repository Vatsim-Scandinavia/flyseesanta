import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFileDownload } from 'react-icons/fa';

interface FmpSettingsProps {
  role: string;
  token: string;
  setGlobalNote: (note: string | null) => void;
}

export default function FmpSettings({
  role,
  token,
  setGlobalNote,
}: FmpSettingsProps) {
  const [jsonFile, setJsonFile] = useState<File | null>(null);
  const [vatcanCode, setVatcanCode] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const [ukIre, setUkIre] = useState(0);
  const [ec, setEc] = useState(0);
  const [scandi, setScandi] = useState(0);

  const isFmp = role.toLowerCase() === 'secretsanta';
  if (!isFmp) return null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noteRes, settingsRes, codeRes] = await Promise.all([
          axios.get('http://localhost:3001/api/fmp/note', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:3001/api/fmp/settings', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:3001/api/fmp/code'),
        ]);

        if (noteRes.data.note) setNote(noteRes.data.note);
        setVatcanCode(codeRes.data.code ?? '');
        setUkIre(settingsRes.data.uk_ire ?? 0);
        setEc(settingsRes.data.ec ?? 0);
        setScandi(settingsRes.data.scandi ?? 0);
      } catch (err) {
        console.error('Failed to load FMP settings', err);
      }
    };

    fetchData();
  }, [token]);

  const handleUploadJson = async () => {
    if (!jsonFile) return alert('Select a JSON file first');
    setLoading(true);
    try {
      const data = await jsonFile.text();
      await axios.post(
        'http://localhost:3001/api/json/fmp/upload',
        { slotsJson: JSON.parse(data) },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert('Slots uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to upload slots');
    }
    setLoading(false);
  };

  const handleReset = async () => {
    if (!confirm('This will remove all non-event releases. Proceed?')) return;
    setLoading(true);
    try {
      await axios.post(
        'http://localhost:3001/api/json/fmp/reset',
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert('Non-event releases removed');
    } catch (err) {
      console.error(err);
      alert('Failed to reset slots');
    }
    setLoading(false);
  };

  const handleSaveNote = async () => {
    try {
      await axios.post(
        'http://localhost:3001/api/fmp/note',
        { note },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setGlobalNote(note);
      alert('Note saved');
    } catch (err) {
      console.error(err);
      alert('Failed to save note');
    }
  };

  const handleSaveCode = async () => {
    try {
      await axios.post(
        'http://localhost:3001/api/fmp/code',
        { code: vatcanCode }, // ✅ CORRECT
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert('VATCAN Code saved');
    } catch (err) {
      console.error(err);
      alert('Failed to save VATCAN Code');
    }
  };

  const handleSaveAutoRelease = async () => {
    try {
      await axios.post(
        'http://localhost:3001/api/fmp/settings',
        { uk_ire: ukIre, ec, scandi },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert('Auto-release settings saved');
    } catch (err) {
      console.error(err);
      alert('Failed to save auto-release settings');
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 space-y-6 max-w-2xl">
      {/* JSON Download */}
      <button
        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold rounded bg-blue-600 hover:bg-blue-500 transition"
        onClick={async () => {
          if (!token) return alert('Login first');
          try {
            const res = await axios.get('http://localhost:3001/api/json/json', {
              headers: { Authorization: `Bearer ${token}` },
            });
            const blob = new Blob([JSON.stringify(res.data, null, 2)], {
              type: 'application/json',
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'slots.json';
            link.click();
            URL.revokeObjectURL(url);
          } catch (err) {
            alert(err.response?.data?.error || 'Error downloading JSON');
          }
        }}
      >
        <FaFileDownload /> Download JSON
      </button>

      {/* Auto Release */}
      <div className="bg-sky-400/10 p-4 rounded space-y-4">
        <h3 className="font-semibold text-lg">Auto-Release Settings</h3>
        <p className="text-sm text-white/70">
          Amount of releases every 30 minutes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            ['UK / Ireland', ukIre, setUkIre],
            ['Central Europe / Baltic', ec, setEc],
            ['Scandinavia', scandi, setScandi],
          ].map(([label, value, setter]) => (
            <div key={label as string} className="flex flex-col">
              <label className="text-sm mb-1">{label}</label>
              <input
                type="number"
                min={0}
                value={value as number}
                onChange={(e) => (setter as any)(Number(e.target.value))}
                className="w-full p-2 rounded bg-black/30 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSaveAutoRelease}
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-sm font-semibold mt-2"
        >
          Save Auto-Release Settings
        </button>
      </div>

      {/* JSON Upload */}
      <div className="bg-sky-400/10 p-4 rounded space-y-4">
        <label className="font-semibold text-lg">
          Upload Initial Bookings JSON
        </label>
        <input
          type="file"
          accept=".json"
          onChange={(e) => setJsonFile(e.target.files?.[0] ?? null)}
          className="w-full text-sm text-white/70"
        />
        <p className="text-sm text-yellow-400">
          ⚠ Uploading will overwrite all existing slots!
        </p>
        <button
          onClick={handleUploadJson}
          disabled={loading || !jsonFile}
          className="px-4 py-2 rounded bg-fuchsia-700 hover:bg-fuchsia-800 text-sm font-semibold disabled:opacity-50"
        >
          Upload JSON
        </button>
      </div>

      {/* Event Code */}
      <div className="bg-sky-400/10 p-4 rounded flex justify-between items-center">
        <input
          maxLength={8}
          placeholder="VATCAN Event Code"
          value={vatcanCode}
          onChange={(e) => setVatcanCode(e.target.value)}
          className="p-2 rounded bg-black/30 text-white text-sm border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
        />
        <button
          onClick={handleSaveCode}
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-sm font-semibold"
        >
          Save VATCAN Code
        </button>
      </div>

      {/* Reset */}
      <div className="bg-sky-400/10 p-4 rounded flex justify-between items-center">
        <span className="text-sm text-white/70">Reset all Slots and RENE</span>
        <button
          onClick={handleReset}
          disabled={loading}
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-sm font-semibold disabled:opacity-50"
        >
          Reset Event Data
        </button>
      </div>

      {/* Note */}
      <div className="bg-sky-400/10 p-4 rounded space-y-2">
        <label className="block text-sm font-semibold">Note to Users</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note visible to all users"
          className="w-full p-2 rounded bg-black/30 text-white text-sm border border-white/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-700"
          rows={3}
        />
        <button
          onClick={handleSaveNote}
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-sm font-semibold"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
