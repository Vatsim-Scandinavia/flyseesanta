import { FaCheckCircle, FaSave } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

interface Request {
  id: number;
  callsign: string;
  adep: string;
  ades: string;
  requested_by: string;
  requested_at: string;
  released: 'Pending' | 'Yes' | 'No Release';
  acknowledged_by_fmp: boolean;
  acknowledged_by_user: boolean;
  autorelease?: boolean;
  comments?: string;
}

interface RequestsTableProps {
  requests: Request[];
  role: string;
  token: string;
  setRequests: React.Dispatch<React.SetStateAction<Request[]>>;
}

export default function RequestsTable({
  requests,
  role,
  token,
  setRequests,
}: RequestsTableProps) {
  const isFmp = role.toLowerCase() === 'secretsanta';

  const [localComments, setLocalComments] = useState<{ [key: number]: string }>(
    {},
  );

  const handleFmpAck = async (r: Request) => {
    const res = await axios.post(
      `http://localhost:3001/api/slots/release/${r.id}`,
      { acknowledgedByFmp: true }, // backend expects camelCase input, snake_case output
      { headers: { Authorization: `Bearer ${token}` } },
    );

    setRequests((prev) =>
      prev.map((req) => (req.id === r.id ? res.data : req)),
    );
  };

  const handleReleaseChange = async (
    r: Request,
    newReleased: 'Pending' | 'Yes' | 'No Release',
  ) => {
    if (!r.acknowledged_by_fmp) return;

    const res = await axios.post(
      `http://localhost:3001/api/slots/release/${r.id}`,
      { released: newReleased },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    setRequests((prev) =>
      prev.map((req) => (req.id === r.id ? res.data : req)),
    );
  };

  const handleUserAck = async (r: Request) => {
    const res = await axios.post(
      `http://localhost:3001/api/slots/acknowledge/${r.id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );

    setRequests((prev) =>
      prev.map((req) => (req.id === r.id ? res.data : req)),
    );
  };

  const releaseColor = (released: 'Pending' | 'Yes' | 'No Release') => {
    switch (released) {
      case 'Pending':
        return 'text-yellow-400';
      case 'Yes':
        return 'text-green-400';
      case 'No Release':
        return 'text-red-400';
      default:
        return '';
    }
  };

  const sortedRequests = [...requests].sort((a, b) => {
    if (!a.requested_at) return 1;
    if (!b.requested_at) return -1;
    // convert to Date objects for accurate comparison
    const timeA = new Date(`1970-01-01T${a.requested_at}Z`).getTime();
    const timeB = new Date(`1970-01-01T${b.requested_at}Z`).getTime();
    return timeB - timeA;
  });

  const handleCommentSave = async (r: Request) => {
    const commentToSave = localComments[r.id] ?? r.comments ?? '';
    try {
      const res = await axios.post(
        `http://localhost:3001/api/slots/comment/${r.id}`,
        { comment: commentToSave },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      // Update requests with saved comment
      setRequests((prev) =>
        prev.map((req) => (req.id === r.id ? res.data : req)),
      );
    } catch (err) {
      console.error('Failed to save comment', err);
    }
  };

  return (
    <div className="overflow-x-auto bg-white/5 border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-black/40">
          <tr>
            {[
              'Callsign',
              'ADEP',
              'ADES',
              'Req by',
              'Req at',
              'FMP Ack',
              'Released',
              'Ack',
              'Comments',
            ].map((h) => (
              <th key={h} className="p-2 py-3 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedRequests.map((r) => {
            const canUserAck =
              r.released !== 'Pending' &&
              r.requested_by === role &&
              !r.acknowledged_by_user;

            return (
              <tr
                key={r.id}
                className={`border-t border-white/10 ${
                  r.released !== 'Pending' && r.acknowledged_by_user
                    ? ''
                    : r.released === 'Yes' && !r.acknowledged_by_user
                      ? 'bg-green-600/50'
                      : r.released === 'Pending'
                        ? 'bg-orange-500/60'
                        : 'bg-red-500/60'
                }`}
              >
                <td className="p-2 py-3 font-semibold font-mono">
                  {r.callsign}
                </td>
                <td className="p-2 py-3">{r.adep}</td>
                <td className="p-2 py-3">{r.ades}</td>
                <td className="p-2 py-3">
                  {r.requested_by.toLowerCase() === 'secretsanta'
                    ? 'FMP'
                    : r.requested_by}
                </td>
                <td className="p-2 py-3">
                  {r.requested_at
                    ? new Date(`1970-01-01T${r.requested_at}Z`)
                        .toISOString()
                        .slice(11, 16)
                    : ''}
                </td>

                {/* FMP ACK */}
                <td className="p-2 py-3">
                  {r.autorelease ? (
                    <span className="text-green-500 font-semibold text-xs">
                      auto release
                    </span>
                  ) : isFmp ? (
                    r.acknowledged_by_fmp ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : (
                      <button
                        onClick={() => handleFmpAck(r)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-xs font-semibold"
                      >
                        ACK
                      </button>
                    )
                  ) : r.acknowledged_by_fmp ? (
                    <FaCheckCircle className="text-green-400" />
                  ) : (
                    ''
                  )}
                </td>

                {/* RELEASED */}
                <td className="p-2 py-3">
                  {isFmp ? (
                    <select
                      value={r.released}
                      disabled={
                        !r.acknowledged_by_fmp || r.acknowledged_by_user
                      }
                      onChange={(e) =>
                        handleReleaseChange(
                          r,
                          e.target.value as 'Pending' | 'Yes' | 'No Release',
                        )
                      }
                      className={`bg-black/40 text-white rounded px-2 py-1 ${
                        !r.acknowledged_by_fmp
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Yes">Yes</option>
                      <option value="No Release">No Release</option>
                    </select>
                  ) : (
                    <span
                      className={`font-semibold ${releaseColor(r.released)}`}
                    >
                      {r.released}
                    </span>
                  )}
                </td>

                {/* USER ACK */}
                <td className="p-2 py-3">
                  {canUserAck ? (
                    <button
                      onClick={() => handleUserAck(r)}
                      className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-xs font-semibold"
                    >
                      Confirm
                    </button>
                  ) : r.acknowledged_by_user ? (
                    <FaCheckCircle className="text-green-400" />
                  ) : (
                    ''
                  )}
                </td>

                <td className="p-2 py-3 text-white/60 flex items-center gap-2">
                  {isFmp ? (
                    <>
                      <input
                        type="text"
                        value={localComments[r.id] ?? r.comments ?? ''}
                        onChange={(e) =>
                          setLocalComments((prev) => ({
                            ...prev,
                            [r.id]: e.target.value,
                          }))
                        }
                        className="bg-black/30 text-white rounded px-2 py-1 w-full text-sm"
                        placeholder=""
                      />
                      <button
                        onClick={() => handleCommentSave(r)}
                        className="text-gray-400 hover:text-white text-base"
                      >
                        <FaSave />
                      </button>
                    </>
                  ) : (
                    <span className="text-xs">{r.comments || ''}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
