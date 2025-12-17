import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaCheckCircle,
  FaBroadcastTower,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const briefings = [
  {
    airport: 'Rovaniemi',
    link: '/#/briefing/efro',
  },
  {
    airport: 'Tromsø Langnes',
    link: 'https://wiki.vatsim-scandinavia.org/books/norwegian-airports-charts/page/entc-tromso-langnes',
  },
  {
    airport: 'Kiruna',
    link: 'https://wiki.vatsim-scandinavia.org/books/swedish-airports-charts/page/esnq-kiruna',
  },
];

const checklistItems = [
  'Ensure Navigation Data and all flight charts are up-to-date',
  'Verify slot booking and calculate your departure time',
  'Prepare for Speed Control and possible Holding during the flight',
  'Listen on the frequency and comply to ATC instructions',
  'Expedite vacating the runway after landing',
  'Enjoy the event! ❤️',
];

export default function Briefing() {
  const [atisData, setAtisData] = useState({
    EFRO: 'Loading EFRO ATIS...',
    ENTC: 'Loading ENTC ATIS...',
    ESNQ: 'Loading ESNQ ATIS...',
  });

  useEffect(() => {
    const fetchAtisData = async () => {
      try {
        const response = await fetch(
          'https://data.vatsim.net/v3/vatsim-data.json',
        );
        const data = await response.json();

        const efroAtis = data.atis.find((a: any) => a.callsign === 'EFRO_ATIS');
        const esnqAtis = data.atis.find((a: any) => a.callsign === 'ESNQ_ATIS');
        const entcAtis = data.atis.find((a: any) => a.callsign === 'ENTC_ATIS');

        setAtisData({
          EFRO: efroAtis ? efroAtis.text_atis.join(' ') : 'EFRO ATIS NIL',
          ENTC: entcAtis ? entcAtis.text_atis.join(' ') : 'ENTC ATIS NIL',
          ESNQ: esnqAtis ? esnqAtis.text_atis.join(' ') : 'ESNQ ATIS NIL',
        });
      } catch (error) {
        console.error('Error fetching ATIS data:', error);
        setAtisData({
          EFRO: 'EFRO ATIS NIL',
          ENTC: 'ENTC ATIS NIL',
          ESNQ: 'ESNQ ATIS NIL',
        });
      }
    };

    fetchAtisData();
    const intervalId = setInterval(fetchAtisData, 90000); // refresh every 90s
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="briefing"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blue-400">
          B r i e f i n g
        </h2>

        <p className="md:text-lg text-gray-300 mt-10 mb-10 text-center">
          We would greatly appreciate it if you could take a few minutes to read
          our Pilot Briefing.
        </p>

        {/* Pilot Briefing Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {briefings.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-xl hover:scale-105 transition transform"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-6 bg-white/5 border border-white/10 shadow-lg hover:text-yellow-300 transition transform"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-400/20 rounded-full text-yellow-300">
                    <FaFileAlt size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {item.airport}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm text-gray-400 mb-2">
                      <FaExternalLinkAlt /> Open Pilot Briefing
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Checklist */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">Checklist</h3>
        <div className="grid gap-4 max-w-xl mb-16">
          {checklistItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-400 flex-shrink-0" />
              <span className="text-gray-200">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* ATIS Section */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
          Current ATIS
        </h3>
        <div className="grid gap-4">
          {Object.entries(atisData).map(([icao, info], idx) => (
            <motion.div
              key={icao}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 shadow-sm"
            >
              <div className={'flex flex-col justify-center items-center'}>
                <FaBroadcastTower className="text-yellow-300 flex-shrink-0 text-lg" />
                <span className={'text-xs text-yellow-300 font-semibold'}>
                  {icao}
                </span>
              </div>

              <span className="text-gray-300 font-semibold text-sm">
                {info}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
