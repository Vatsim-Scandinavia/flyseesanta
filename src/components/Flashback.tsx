import { motion } from 'framer-motion';
import { FaPlaneArrival } from 'react-icons/fa';

const stats = [
  { year: 2025, efro: 192, entc: 110, esnq: 41 },
  { year: 2024, efro: 175, entc: 99, esnq: 41 },
  { year: 2023, efro: 178, entc: 105, esnq: 49 },
  { year: 2022, efro: 173, entc: 69, esnq: 32 },
  { year: 2021, efro: 155, entc: 84, esnq: 43 },
  { year: 2020, efro: 181, entc: 100, esnq: 44 },
];

export default function Flashback() {
  return (
    <section
      id="about"
      className="relative p-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white overflow-hidden"
    >
      {/* Santa image on the left */}
      <motion.img
        src="images/santa2.svg"
        alt="Santa Claus"
        className="w-80 md:w-80 drop-shadow-2xl z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Fly and See{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-700">
            Santa
          </span>
        </h1>
        <p className="md:text-lg text-gray-300 mb-6">
          <a
            href="https://vatsim-scandinavia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold hover:underline underline-offset-4"
          >
            VATSIM Scandinavia
          </a>{' '}
          sends a big thank you to all pilots and controllers for making the Fly
          and See Santa 2025 event unforgettable! We’ll be back in December
          2026.
        </p>
        <p className="text-white mb-4 font-semibold flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPlaneArrival /> Arrival Statistics
          </span>
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-white/10 overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2.5 text-gray-300 font-semibold text-sm">
                  Year
                </th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold text-sm">
                  EFRO
                </th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold text-sm">
                  ENTC
                </th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold text-sm">
                  ESNQ
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {(() => {
                // Calculate max values for each category
                const maxEfro = Math.max(...stats.map((s) => s.efro));
                const maxEntc = Math.max(...stats.map((s) => s.entc));
                const maxEsnq = Math.max(...stats.map((s) => s.esnq));

                return stats.map((s) => (
                  <tr
                    key={s.year}
                    className="bg-white/5 hover:bg-white/10 transition"
                  >
                    <td className="px-4 py-2.5 text-gray-200">{s.year}</td>
                    <td
                      className={`px-4 py-2.5 ${
                        s.efro === maxEfro
                          ? 'text-green-500 font-semibold'
                          : 'text-gray-200'
                      }`}
                    >
                      {s.efro}
                    </td>
                    <td
                      className={`px-4 py-2.5 ${
                        s.entc === maxEntc
                          ? 'text-green-500 font-semibold'
                          : 'text-gray-200'
                      }`}
                    >
                      {s.entc}
                    </td>
                    <td
                      className={`px-4 py-2.5 ${
                        s.esnq === maxEsnq
                          ? 'text-green-500 font-semibold'
                          : 'text-gray-200'
                      }`}
                    >
                      {s.esnq}
                    </td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
