import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaExclamationCircle,
  FaYoutube,
  FaArrowsAltH,
  FaPlaneDeparture,
  FaHeadphones,
  FaSyncAlt,
  FaPlaneArrival,
  FaInfoCircle,
  FaExternalLinkAlt,
  FaCalendarCheck,
  FaRoute,
  FaRoad,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import './efro.css';

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371000; // meters
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const stands = {
  stand9: { lat: 66.557833, lon: 25.825097 },
  stand8: { lat: 66.558214, lon: 25.826293 },
  stand7: { lat: 66.558588, lon: 25.827327 },
  stand6: { lat: 66.559002, lon: 25.828373 },
  stand5: { lat: 66.559065, lon: 25.829457 },
  stand4: { lat: 66.559166, lon: 25.830599 },
  stand3: { lat: 66.559261, lon: 25.831686 },
  stand2: { lat: 66.559358, lon: 25.832797 },
  stand1: { lat: 66.559483, lon: 25.833886 },
  stand13: { lat: 66.560481, lon: 25.831904 },
  stand14: { lat: 66.560323, lon: 25.830808 },
  stand15: { lat: 66.560241, lon: 25.829633 },
  stand23: { lat: 66.560875, lon: 25.830559 },
};

const PROXIMITY_RADIUS = 25; // meters

const stats = [
  { year: 2025, departures: 63, arrivals: 192 },
  { year: 2024, departures: 46, arrivals: 175 },
  { year: 2023, departures: 39, arrivals: 178 },
  { year: 2022, departures: 39, arrivals: 172 },
  { year: 2021, departures: 30, arrivals: 155 },
  { year: 2020, departures: 40, arrivals: 181 },
];

export default function EFROBriefing() {
  const [occupiedStands, setOccupiedStands] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('...');

  useEffect(() => {
    document.title = 'FSS | EFRO Briefing';

    async function fetchVatsim() {
      try {
        const res = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
        const data = await res.json();

        const newOccupied: string[] = [];

        if (data?.pilots) {
          for (const [standId, standPos] of Object.entries(stands)) {
            const nearAircraft = data.pilots.some((pilot: any) => {
              if (!pilot.latitude || !pilot.longitude) return false;
              const dist = getDistance(
                standPos.lat,
                standPos.lon,
                pilot.latitude,
                pilot.longitude,
              );
              return dist < PROXIMITY_RADIUS;
            });

            if (nearAircraft) newOccupied.push(standId);
          }
        }

        setOccupiedStands(newOccupied);

        const now = new Date();
        const hh = String(now.getUTCHours()).padStart(2, '0');
        const mm = String(now.getUTCMinutes()).padStart(2, '0');
        const ss = String(now.getUTCSeconds()).padStart(2, '0');
        setLastUpdated(`${hh}:${mm}:${ss} UTC`);
      } catch (err) {
        console.error('Error fetching VATSIM data:', err);
      }
    }

    fetchVatsim();
    const interval = setInterval(fetchVatsim, 30000); // update every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto sm:px-6 px-4">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold mb-6">
          Briefing{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-700">
            Rovaniemi
          </span>
        </h1>

        <div className="flex flex-wrap sm:gap-6 gap-4 mb-8 justify-center text-xs sm:text-sm">
          <Link
            smooth
            to="#slots"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Slots
          </Link>
          <Link
            smooth
            to="#rerouting"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Re-routing
          </Link>
          <Link
            smooth
            to="#holding"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Holding
          </Link>
          <Link
            smooth
            to="#landing"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Landing
          </Link>
          <Link
            smooth
            to="#after_landing"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            After Landing
          </Link>
          <Link
            smooth
            to="#departures"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Departures
          </Link>
        </div>

        <motion.img
          src="/images/briefing/efro.svg"
          alt="Rovaniemi Airport"
          className="w-full max-w-[660px] mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.div
          id="general"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaInfoCircle className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">
              General Information
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Rovaniemi (EFRO) is the main hub of the Fly and See Santa event.
            Expect very high traffic levels, sequencing, and possible holdings.
            Follow ATC instructions carefully and prepare for re-routes. Make
            sure your charts and navdata are up-to-date.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://chartfox.org/EFRO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> Charts
            </a>
            <a
              href="https://fss-map.lusep.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> Event Map
            </a>
          </div>

          <div className="mt-8 overflow-x-auto">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Planned ATS Units
            </h3>

            <table className="min-w-full text-left border border-white/10 overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    ATS Unit
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Call Sign
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Full-Staffed Positions */}
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO DEL</td>
                  <td className="px-4 py-3 text-gray-200">
                    Rovaniemi Delivery
                  </td>
                  <td className="px-4 py-3 text-gray-200">118.525</td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO TWR</td>
                  <td className="px-4 py-3 text-gray-200">Rovaniemi Tower</td>
                  <td className="px-4 py-3 text-gray-200">118.700</td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO APP</td>
                  <td className="px-4 py-3 text-gray-200">Rovaniemi Radar</td>
                  <td className="px-4 py-3 text-gray-200">129.900</td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO R APP</td>
                  <td className="px-4 py-3 text-gray-200">Rovaniemi Arrival</td>
                  <td className="px-4 py-3 text-gray-200">118.600</td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFIN Y APP</td>
                  <td className="px-4 py-3 text-gray-200">Helsinki Control</td>
                  <td className="px-4 py-3 text-gray-200">131.600</td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFIN Z APP</td>
                  <td className="px-4 py-3 text-gray-200">Helsinki Control</td>
                  <td className="px-4 py-3 text-gray-200"></td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO TWR SUPER</td>
                  <td className="px-4 py-3 text-gray-200"></td>
                  <td className="px-4 py-3 text-gray-200"></td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFRO APP SUPER</td>
                  <td className="px-4 py-3 text-gray-200"></td>
                  <td className="px-4 py-3 text-gray-200"></td>
                </tr>
                <tr className="bg-white/5 hover:bg-white/10 transition">
                  <td className="px-4 py-3 text-gray-200">EFIN FMP</td>
                  <td className="px-4 py-3 text-gray-200"></td>
                  <td className="px-4 py-3 text-gray-200"></td>
                </tr>
              </tbody>
            </table>

            <p className="text-gray-300 mt-6">
              Helsinki Area Control, together with the neighboring ACCs, will
              provide en-route services throughout the event.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">
            Event Statistics
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-white/10 overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Year
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Dep
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Arr
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Global
                  </th>
                  <th className="px-4 py-3 text-gray-300 font-semibold sm:text-base text-sm">
                    Ops/h
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {stats.map((s) => (
                  <tr
                    key={s.year}
                    className="bg-white/5 hover:bg-white/10 transition"
                  >
                    <td className="px-4 py-3 text-gray-200">{s.year}</td>
                    <td className="px-4 py-3 text-gray-200">{s.departures}</td>
                    <td className="px-4 py-3 text-gray-200">{s.arrivals}</td>
                    <td className="px-4 py-3 text-gray-200">
                      {s.departures + s.arrivals}
                    </td>
                    <td className="px-4 py-3 text-gray-200">
                      {Math.round((s.departures + s.arrivals) / 8)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 mt-2 text-sm">
            Statistics start from one hour before the event and end one hour
            past the event (16-00z).
          </p>
        </motion.div>

        <motion.div
          id="slots"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarCheck className="text-green-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Arrival Slots</h3>
          </div>
          <ul className="grid gap-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              All arrivals are required to have a valid{' '}
              <strong className="text-blue-400">Slot</strong> or have received a{' '}
              <strong className="text-blue-400">Non-event Release</strong> by
              ATC
            </li>
            <li>There will be around 10 non-event releases every hour</li>
            <li>
              Pilots with no valid slot or non-event release are diverted to
              another airport
            </li>
            <li>
              Please plan the departure time in order to arrive during your
              booked slot time
            </li>
            <li>We recommend to pump some extra fuel onboard</li>
          </ul>

          <p className="mt-6 mb-2 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 sm:text-sm text-xs font-medium">
              <FaExclamationCircle className="h-4 w-4 flex-shrink-0" />
              Pilots are requested to refrain from flying Code F aircraft
              (Airbus 380) to Rovaniemi during the event
            </span>
          </p>

          <a
            href="https://booking.vatsim-scandinavia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            <FaExternalLinkAlt /> Bookings
          </a>
        </motion.div>

        {/* Re-routing */}
        <motion.div
          id="rerouting"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaRoute className="text-yellow-500 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Re-routing</h3>
          </div>

          <p className="text-gray-300">
            Pilots are requested to use the{' '}
            <strong className="text-blue-400">Route Planner</strong> at
            fss.vatsim-scandinavia.org
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              If you don't find a route for your departure airport or if your
              route is invalid, be prepared for a re-route by ATC
            </span>
          </p>

          <ul className="grid gap-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              If unsure of a given re-route, please ask the ATC for the complete
              route by text
            </li>
            <li>
              Mandatory routes to Rovaniemi are shown on the{' '}
              <strong className="text-blue-400">Event Map</strong>
            </li>
            <li>ATC may give tactical re-routes for sequencing</li>
          </ul>
        </motion.div>

        <motion.div
          id="holding"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaSyncAlt className="text-purple-500 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">
              Holding Procedures
            </h3>
          </div>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Pilots shall be prepared for non-standard holding procedures
            </li>
            <li>
              ATC will give the inbound heading, turn direction, and inbound
              time
            </li>
            <li>We try our best to minimize holding during the event</li>
          </ul>

          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://youtu.be/DmJqOvnTwYc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1 rounded bg-red-800 hover:bg-red-900 transition shadow-lg"
                >
                  <FaYoutube className="text-xl" />
                  <div>
                    <p className="font-medium text-sm">
                      Airbus 320 Holding Tutorial
                    </p>
                    <p className="text-xs text-gray-300">
                      by Airbus Cockpit Coach
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=PcISzjXSu2s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1 rounded bg-red-800 hover:bg-red-900 transition shadow-lg"
                >
                  <FaYoutube className="text-xl" />
                  <div>
                    <p className="font-medium text-sm">
                      Boeing 737 Holding Tutorial
                    </p>
                    <p className="text-xs text-gray-300">by British Avgeek</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-6 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 sm:text-sm text-xs font-medium">
              <FaHeadphones className="h-4 w-4 flex-shrink-0" />
              SANTA 1, DESCEND AND MAINTAIN FLIGHT LEVEL 160, HOLD AT SUVIB
              INBOUND TRACK 350 DEGREES, RIGHT HAND PATTERN, OUTBOUND TIME ONE
              AND A HALF MINUTE, EXPECT FURTHER CLEARANCE AT 16
            </span>
          </p>
          <a
            href="https://fss-map.lusep.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            <FaExternalLinkAlt /> Planned Holding Locations
          </a>
        </motion.div>

        <motion.div
          id="landing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaPlaneArrival className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Landing</h3>
          </div>

          <p className="text-gray-300">
            Arrivals are vectored to the{' '}
            <strong className="text-blue-400">ILS-Z Runway 21</strong> or the{' '}
            <strong className="text-blue-400">RNP Runway 03</strong>, depending
            on the runway in use.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              State ONLY your Call Sign on initial contact with Rovaniemi
              Arrival (EFRO_R_APP)
            </span>
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Arrivals are transferred to Rovaniemi Tower 4 - 10 NM from the
              threshold
            </li>
            <li>
              Pilots are kindly requested not to initiate a go-around unless
              really necessary
            </li>
          </ul>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Tower may give the Landing Clearance at latest when passing the
              runway threshold (50 FT)
            </span>
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              In case of a go-around, fly straight ahead and climb to 2500 FT
              unless otherwise instructed by ATC
            </span>
          </p>
        </motion.div>

        {/* After Landing */}
        <motion.div
          id="after_landing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaRoad className="text-red-500 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">After Landing</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-2">
            {/* Image */}
            <div className="flex-1 p-1 bg-white/5 border border-white/10 shadow-lg">
              <motion.img
                src="/images/briefing/efro_exits.png"
                alt="Ground Chart"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>

            {/* Text */}
            <div className="flex-1 p-1 ">
              <ul className="text-gray-300 space-y-3 list-disc list-outside pl-4">
                <li>
                  <strong className="text-yellow-400">Expedite vacating</strong>{' '}
                  the runway and taxi across the holding point line{' '}
                  <i className="text-gray-500">(green area on the map)</i>
                </li>
                <li>Plan to vacate via the following taxiways:</li>
              </ul>
              <div className="w-full flex justify-between gap-2 mt-4">
                <motion.div className="flex-1 p-1 bg-white/5 border border-white/10 shadow-lg text-sm">
                  <p className="text-sxs text-gray-400">Runway 21</p>
                  <h3 className="text-xl font-semibold">H or B</h3>
                </motion.div>
                <motion.div className="flex-1 p-1 bg-white/5 border border-white/10 shadow-lg text-sm">
                  <p className="text-sxs text-gray-400">Runway 03</p>
                  <h3 className="text-xl font-semibold">H, C or D</h3>
                </motion.div>
              </div>
              <ul className="text-gray-300 space-y-3 mt-4 list-disc list-outside pl-4">
                <li>Remain on Tower frequency for taxi instructions</li>
                <li>Expect taxi via T or S to the assigned stand</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 sm:text-sm text-xs font-medium">
              <FaExclamationCircle className="h-4 w-4 flex-shrink-0" />
              DO NOT vacate to the north-west side of the runway (military
              apron)
            </span>
          </p>
          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Pilots are kindly requested NOT to spend excess time at the stand
              after arrival, to ensure availability for subsequent arrivals
            </span>
          </p>
        </motion.div>

        <motion.div
          id="departures"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaPlaneDeparture className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Departures</h3>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Departures are NOT required to have a Slot unless flying to ESNQ
              (Kiruna) or ENTC (Tromsø Langnes)
            </span>
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Departures to ESNQ or ENTC without a Slot may get a non-event
              release by ATC
            </li>
            <li>There will be around 10 non-event releases per hour</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Stand Availability
          </h3>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 423.4692 281.7465"
            className="w-full max-w-[540px] mb-2 p-1 bg-white/5 border border-white/10 shadow-lg"
          >
            <g id="Layer_1" data-name="Layer 1">
              <g>
                <line
                  className="cls-3"
                  x1="118.8657"
                  y1="23.1441"
                  x2="118.8647"
                  y2="23.1451"
                />
                <line
                  className="cls-3"
                  x1="76.7969"
                  y1="77.8855"
                  x2="76.7899"
                  y2="77.8956"
                />
                <line
                  className="cls-3"
                  x1="74.7881"
                  y1="71.5734"
                  x2="74.7891"
                  y2="71.5724"
                />
                <path className="cls-1" d="M60.1737,235.4465v.4l-.1-.2.1-.2" />
                <path
                  className="cls-6"
                  d="M372.1737-135.7535l2.1652-2.781,12.8348-16.8189-28.4.1L-54.2263,385.5466l18.1,13.8,192.8296-252.9599c3.1753-4.1654,9.1097-5.0031,13.3139-1.8793l30.0095,22.2976c5.0058,3.9712,5.8337,11.2533,1.8471,16.2469l-75.6001,94.6947-88.8,116.9-.8,18,50-65c1.24-.73,2.69-1.14,4.17-1.19.55-.02,1.09.01,1.63.09,2,.3,3.9,1.2,5.3,2.7,1.5,1.4,2.4,3.3,2.7,5.3.2,2-.2,4.1-1.2,5.9l-.6,1.4-2.4,3.1.8.63,7.74,6.07.26.2.5.4,17.2-22-12.2-9.9c-1.02.08-2.04.03-3.11-.18-.08-.02-.16-.04-.24-.06-.21-.04-.43-.1-.65-.16-.16-.06-.32-.13-.4901-.2-.02-.0099-.03-.0099-.05-.02-.63-.27-1.25-.6-1.85-1-.15-.1-.3-.21-.45-.33-.15-.11-.3-.23-.44-.36-.15-.12-.28-.25-.42-.39-.34-.34-.66-.71-.94-1.1-.1-.13-.19-.26-.27-.39-.1-.13-.18-.27-.26-.41-.15-.25-.29-.52-.41-.79-.08-.16-.15-.33-.22-.49-.0699-.16-.13-.33-.19-.5v-.01c-.05-.13-.09-.25-.1299-.38-.26-.77-.38-1.57-.4-2.32-.01-.4-.01-.8.02-1.21l22.9-30.1,3-.8,3,.4,1.4,1.1,3.5,19.1,6.6-2.2,26.16-5.32,2.34-.48-2.14-10-1.42-6.61-.34-1.59-2.45.47-3.25.63-14,2.3-3.5-.1-4.3-2.8-4.1-4.2-.5-2.8,21.9-28.6,19.051-24.1999c1.7404-2.2108,4.9418-2.5959,7.1569-.8609l27.149,21.2653c.7529.5897,1.6264,1.0065,2.5584,1.2207h0c1.214.279,2.488-.0459,3.4201-.8724l51.2226-45.4195c1.2159-1.0782,2.2053-2.3873,2.9106-3.8514l3.5795-7.4301c1.2273-2.5476,3.5932-4.3597,6.3726-4.8808l71.9134-13.4837c1.324-.2482,2.6925.0337,3.8105.7852l4.3555,2.9274.9,4,8.4-1.5-.6-3.1,6.4-1-1-8.2-4.8-3.8-1.3-1-.8-.4-.9-.2.2-5.1.7-9-5.6-4.1-1.4261-8.1c9.3095-16.6092,6.3808-30.6283-10.4739-41.7l-35.8-23.7-2.694-1.8929c-4.8278-3.3922-5.8302-10.1361-2.1976-14.7858l11.8917-15.2213,131.2-172.1-.4-17-35.4,46.3-2.5,1.4-4.1,1.3-5.5-.5-17.21-12.84-7.99-5.96-3.4-4.1-1.4-4.3-1-5.4.59-7.33M350.4737-107.2535l2,.7,4.5-1.4,3.7-.4h3.3l6.4,2.4,8.25,6.22,13.25,9.98,3.6,3.4,1.4,3.2.6,4.6-.5,2.4-1.5,3.3-93.8,122.9-3.0917,4.0056c-3.9397,5.1042-11.1562,6.2919-16.5239,2.7195l-15.7544-10.4851-15.0404-10.7813c-3.3064-2.3701-4.0037-7.0023-1.5415-10.2407l100.7519-132.518ZM176.864,134.9939c-3.8567-2.9767-4.5884-8.508-1.6381-12.385l58.1079-76.3624h0c3.2287-4.2731,9.2502-5.2447,13.6591-2.2041l2.1809,1.5041h.1l12.17,8.13,15.2785,10.4119c4.984,3.3965,6.1209,10.2676,2.4966,15.0884l-57.5738,76.3942c-3.4982,4.6417-10.0093,5.75-14.8462,2.5269l-29.9349-23.1041ZM340.2737,111.4465c-.7,1-1.7,1.7-2.9,2-1.2.2-2.4,0-3.4-.7l-3.98-2.63-3.98-2.62-3.92-2.59-4.02-2.66-3.9901-2.62-3.68-2.43-5.83-3.85c-.52-.35-1.09-.6-1.69-.74-.79-.21-1.61-.23-2.41-.06-1.4.2-2.7,1-3.6,2.1l-.13.17-2.69,3.52-2.73,3.57-2.6801,3.52-2.68,3.5099-2.73,3.58-2.68,3.51-2.74,3.58-5.44,7.14-8.1,10.6c-1.1,1.5-2.7,2.5-4.5,2.8l-7.9245,1.5849c-.9904.1981-2.0511.0605-2.8775-.5202-1.7802-1.251-2.2411-3.7186-.8979-5.4647l17.33-22.68,2.9-3.8,2.91-3.79,8.66-11.33,2.9-3.8,2.9-3.8c.74-.9301,1.67-1.6801,2.71-2.1801,1.08-.54,2.27-.8199,3.49-.8199l3.3.03,3.3.04,3.4.03c1.45,0,2.89.22,4.29.65,1.4.42,2.76,1.05,4.01,1.85l8.2,5.41,4.09,2.7,4.1,2.7,8.31,5.49,4.1,2.7c1,.7,1.7,1.7,2,2.9.2,1.2,0,2.4-.7,3.4Z"
                />
                <polygon
                  className="cls-5"
                  points="268.7737 218.9465 253.2737 232.9465 222.0738 260.3465 213.5738 250.6465 212.8737 251.2465 209.9737 247.9465 206.2737 245.4465 206.7737 244.8465 210.4737 247.2465 212.9737 250.0466 227.2837 237.3065 222.6437 232.1766 217.0437 237.1766 217.3437 237.4765 216.8437 237.9765 216.0437 236.8765 216.4438 236.5765 216.5437 236.6766 222.1437 231.5765 222.0437 231.4765 223.6437 229.9765 225.7437 232.2765 224.8437 233.0765 228.0237 236.6465 240.5138 225.5365 233.9037 218.0765 233.8037 218.0765 233.7038 218.6766 233.3037 218.9765 232.3037 217.7765 232.8037 217.3765 235.0038 215.3765 235.6037 216.0765 234.3037 217.3765 241.0937 225.0165 255.5837 212.1265 253.4737 209.6965 250.6737 203.6965 250.4737 204.1965 249.9737 204.3965 249.3737 202.9965 252.5738 201.4965 252.9737 202.2966 251.2737 203.1965 254.0738 209.2966 256.1537 211.6165 262.9737 205.5466 263.5738 206.2465 260.1237 209.3065 268.7737 218.9465"
                />
                <g>
                  <line
                    className="cls-2"
                    x1="204.6737"
                    y1="185.8465"
                    x2="204.6737"
                    y2="185.7465"
                  />
                  <line
                    className="cls-2"
                    x1="179.164"
                    y1="144.6958"
                    x2="207.4737"
                    y2="165.9465"
                  />
                  <polyline
                    className="cls-2"
                    points="69.2443 361.3904 204.6737 185.8465 210.6737 177.8465 299.6737 61.6465 411.4066 -85.1762"
                  />
                  <polyline
                    className="cls-2"
                    points="341.9737 142.1465 331.8737 144.1465 276.3737 155.1565 254.7737 159.4465 219.3837 166.4665 216.4737 167.0465"
                  />
                  <path
                    className="cls-2"
                    d="M283.6737,63.3465c2.6,1.7,5.8,2.4,8.9,1.9,3.2-.6,6-2.2,7.9-4.8"
                  />
                  <path
                    className="cls-2"
                    d="M286.4737,78.7465c1.8-2.3,2.5-5.3,2-8.2-.4-2.9-2.1-5.4-4.6-7.1"
                  />
                  <path
                    className="cls-2"
                    d="M300.2737,60.7465c-1.8,2.3-2.5,5.3-2,8.2.5,2.9,2.1,5.4,4.6,7"
                  />
                  <path
                    className="cls-2"
                    d="M254.7737,159.4465c-5.8069,1.1532-10.7143-.6868-14.011-4.9725s-4.2771-10.3278-.8242-14.8353"
                  />
                  <path
                    className="cls-2"
                    d="M285.8737,79.5466c2-2.3,4.7-3.9,7.6-4.6,2.9-.7,6-.5,8.8.6"
                  />
                  <path
                    className="cls-2"
                    d="M209.3737,179.5465c1.2-2.2,1.6-4.7,1.2-7.1-.3-2.5-1.4-4.7-3.1-6.5"
                  />
                  <path
                    className="cls-2"
                    d="M341.9737,142.1465c3.5-1.8,6.6-4.5,8.7-7.8,2.2-3.4,3.4-7.2,3.6-11.2.2-4-.6-7.9-2.5-11.5-1.8-3.5-4.6-6.5-7.9-8.6"
                  />
                  <path
                    className="cls-2"
                    d="M207.2737,165.8465c2.8,1.5,6.1,2,9.2,1.2"
                  />
                  <line
                    className="cls-2"
                    x1="251.9418"
                    y1="42.2675"
                    x2="283.6737"
                    y2="63.3465"
                  />
                  <line
                    className="cls-2"
                    x1="343.8737"
                    y1="103.0466"
                    x2="302.2737"
                    y2="75.5466"
                  />
                </g>
              </g>
              <text
                className="cls-7"
                transform="translate(144.2234 150.6949) rotate(-52.5665)"
              >
                <tspan x="0" y="0">
                  RWY 03/21
                </tspan>
              </text>
            </g>
            <g id="stands">
              <path
                className={`${occupiedStands.includes('stand9') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M203.1465,235.6023l-12.0319-13.5587c-.3703-.4172-.2724-1.1087.2186-1.5444l7.0198-6.2293c.491-.4357,1.1892-.4507,1.5595-.0335l12.0319,13.5587c.1426.1606.2211.3706.2243.5993l.1007,7.1834c.0102.727-.7134,1.3691-1.4341,1.2726l-7.1205-.954c-.2267-.0304-.4258-.1334-.5684-.294Z"
              />
              <text
                className={`${occupiedStands.includes('stand9') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(196.9369 225.6997) rotate(48.4143)"
              >
                <tspan x="0" y="0">
                  9
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand8') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M219.7302,221.3708l-12.0319-13.5587c-.3703-.4172-.2724-1.1087.2186-1.5444l7.0198-6.2293c.491-.4357,1.1892-.4507,1.5595-.0335l12.0319,13.5587c.1426.1606.2211.3706.2243.5993l.1007,7.1834c.0102.727-.7134,1.3691-1.4341,1.2726l-7.1205-.954c-.2267-.0304-.4258-.1334-.5684-.294Z"
              />
              <text
                className={`${occupiedStands.includes('stand8') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(213.5209 211.4682) rotate(48.4143)"
              >
                <tspan x="0" y="0">
                  8
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand7') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M235.3844,205.567l-7.8316-16.3484c-.241-.5031.0436-1.1409.6356-1.4245l8.4642-4.0547c.592-.2836,1.2674-.1057,1.5084.3974l7.8316,16.3484c.0928.1937.1105.4171.0506.6379l-1.882,6.9332c-.1905.7017-1.063,1.1197-1.7291.8283l-6.5822-2.8785c-.2096-.0917-.3726-.2455-.4654-.4392Z"
              />
              <text
                className={`${occupiedStands.includes('stand7') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(232.142 194.3365) rotate(64.4035)"
              >
                <tspan x="0" y="0">
                  7
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand6') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M256.2079,185.9488l-5.4927-17.2753c-.169-.5316.2011-1.1238.8267-1.3227l8.944-2.8438c.6256-.1989,1.2698.0708,1.4388.6024l5.4927,17.2753c.0651.2047.0517.4284-.0382.6388l-2.8238,6.6059c-.2858.6686-1.2078.9617-1.8272.581l-6.1203-3.7621c-.1949-.1198-.335-.2947-.4001-.4994Z"
              />
              <text
                className={`${occupiedStands.includes('stand6') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(254.553 174.3774) rotate(72.3619)"
              >
                <tspan x="0" y="0">
                  6
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand5') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M275.6169,180.9302l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand5') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(275.2037 169.2485) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  5
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand4') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M294.3594,176.9714l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand4') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(293.9459 165.2896) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  4
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand3') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M313.1019,173.5131l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand3') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(312.6891 161.8312) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  3
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand2') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M331.7746,169.7427l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand2') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(331.3629 158.0607) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand1') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M348.2188,166.0975l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand1') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(347.8063 154.4156) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  1
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand13') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M320.2321,133.6065l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand13') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(319.1891 118.833) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  13
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand14') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M301.3564,137.8179l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand14') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(300.3131 123.0444) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  14
                </tspan>
              </text>
              <path
                className={`${occupiedStands.includes('stand15') ? 'stand-bg-red' : 'stand-bg-green'}`}
                d="M282.1007,142.018l-3.6188-17.7626c-.1114-.5466.3198-1.096.9631-1.227l9.1963-1.8736c.6433-.1311,1.255.2058,1.3664.7524l3.6188,17.7626c.0429.2104.0057.4315-.1061.6311l-3.5122,6.267c-.3555.6343-1.3035.8274-1.8787.3828l-5.6841-4.3934c-.181-.1399-.3017-.3288-.3446-.5392Z"
              />
              <text
                className={`${occupiedStands.includes('stand15') ? 'stand-text-red' : 'stand-text-green'}`}
                transform="translate(281.0582 127.2445) rotate(78.4847)"
              >
                <tspan x="0" y="0">
                  15
                </tspan>
              </text>
            </g>
          </motion.svg>

          <div className="w-full max-w-[540px] flex justify-between gap-2 mb-2">
            <motion.div className="flex-1 p-1 bg-green-600/20 border border-green-600/20 shadow-lg text-green-400 text-sm">
              Stand available
            </motion.div>
            <motion.div className="flex-1 p-1 bg-red-500/10 border border-red-500/20 shadow-lg text-red-400 text-sm">
              Stand occupied
            </motion.div>
          </div>

          <p className="text-gray-500 mb-6 text-sm">Updated at {lastUpdated}</p>

          <p className="text-gray-300">
            Push back is required from stands 1 – 9 during the event
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Stands 7 and 8 may be used for Code E aircraft such as A359, B77W
              and B789
            </span>
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 sm:text-sm text-xs font-medium">
              <FaExclamationCircle className="h-4 w-4 flex-shrink-0" />
              Pilots are requested to refrain from flying Code F aircraft
              (Airbus 380) from Rovaniemi during the event
            </span>
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Re-routing
          </h3>

          <p className="text-gray-300 mb-6">
            Rovaniemi Delivery may assign a modified flight plan route with the
            en-route clearance. Please be prepared to reprogram your route if
            necessary. There are mandatory routes to ESNQ, ENTC and flights
            towards Sweden which you can view in our route planner. Flights
            southbound may also be re-routed to avoid arriving traffic.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Target Start-up Approval Time (TSAT)
          </h3>

          <p className="text-gray-300 mb-6">
            Pilots may be assigned a TSAT after the en-route clearance. The
            given TSAT is calculated based on the amount of departures and
            arrivals to Rovaniemi. The goal of using TSAT is to avoid spending
            unessessary time at the holiding point when the engines are turned
            on.
          </p>
          <p className="text-gray-300 mb-6">
            Rovaniemi Delivery will transfer departures to Tower when the TSAT
            time is reached. If the stands are getting too crowded, departing
            aircraft may need to absorb some time on the taxiway instead.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Take-off
          </h3>

          <p className="text-gray-300 mb-6">
            Departures will be assigned a departure gap by our Flow Managers.
            Therefore pilots are requested to be ready for departure when
            reaching the runway holding point in order not to miss the
            coordinated gap.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Departures are assigned a heading and altitude by Rovaniemi
              Delivery to be followed after departure
            </span>
          </p>

          <p className="text-gray-300">
            Pilots shall initiate the turn towards the assigned heading when
            above the Minimum Turning Altitude:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white/5 border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-400/20 rounded-full text-yellow-300">
                  <FaArrowsAltH size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Runway 21 Minimum Turning Altitude
                  </p>
                  <h3 className="text-xl font-semibold">1030 FT</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white/5 border border-white/10 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-400/20 rounded-full text-yellow-300">
                  <FaArrowsAltH size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Runway 03 Minimum Turning Altitude
                  </p>
                  <h3 className="text-xl font-semibold">1010 FT</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Maintain TWR frequency until 2000 FT, then contact Rovaniemi Radar
              frequency 129.900
            </span>
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 sm:text-sm text-xs font-medium">
              <FaExclamationCircle className="h-4 w-4 flex-shrink-0" />
              Do not climb above 4000 FT unless cleared by ATC
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
