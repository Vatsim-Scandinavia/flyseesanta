import { motion } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaClock,
  FaFileAlt,
  FaRoute,
  FaGlobeEurope,
  FaTwitch,
} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative p-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white overflow-hidden"
    >
      {/* Background snowflake */}
      <img
        src="images/snowflake.svg"
        alt="Snowflake"
        className="absolute -top-32 -right-40 w-[700px] opacity-[6%] pointer-events-none select-none"
      />

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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Fly and See{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-700">
            Santa
          </span>
        </h1>
        <p className="md:text-lg text-white mb-6 font-semibold flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> 13 December 2025
          </span>
          <span className="flex items-center gap-2">
            <FaClock /> 17 – 23 UTC
          </span>
        </p>
        <p className="md:text-lg text-gray-300 mb-6">
          <a
            href="https://vatsim-scandinavia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold hover:underline underline-offset-4"
          >
            VATSIM Scandinavia
          </a>{' '}
          invites you to take part in a journey to the home of the original
          Santa Claus, just in time for the Christmas holiday.
        </p>
        <p className="md:text-lg text-gray-300 mb-6">
          Fly and See Santa, the largest annual Christmas event in VATSIM skies,
          takes place at three airports in the northernmost reaches of Europe.
          Experience the magic of snow-covered landscapes and icy runways as you
          arrive at Rovaniemi, Tromsø, and Kiruna. Throughout December, the
          airspace buzzes with flights full of passengers eager to visit Santa's
          winter wonderland. We hope you’ll join us for this unforgettable
          event!
        </p>

        {/* Section links */}
        <div className="flex flex-wrap sm:gap-6 gap-3 sm:text-base text-sm">
          <Link
            smooth
            to="#routes"
            className="flex gap-1 items-center text-blue-400 font-medium hover:underline underline-offset-4"
          >
            <FaRoute size={16} />
            Routes
          </Link>
          <Link
            smooth
            to="#briefing"
            className="flex gap-1 items-center text-blue-400 font-medium hover:underline underline-offset-4"
          >
            <FaFileAlt size={16} />
            Briefing
          </Link>
          <Link
            smooth
            to="#sceneries"
            className="flex gap-1 items-center text-blue-400 font-medium hover:underline underline-offset-4"
          >
            <FaGlobeEurope size={16} />
            Sceneries
          </Link>
          <Link
            smooth
            to="#livestream"
            className="flex gap-1 items-center text-blue-400 font-medium hover:underline underline-offset-4"
          >
            <FaTwitch size={16} />
            Livestream
          </Link>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="https://booking.vatsim-scandinavia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            <FaExternalLinkAlt /> Bookings
          </a>
          <a
            href="https://fss-map.lusep.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            <FaExternalLinkAlt /> Event Map
          </a>
        </div>
      </motion.div>
    </section>
  );
}
