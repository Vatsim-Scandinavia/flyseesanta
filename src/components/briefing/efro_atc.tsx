import { motion } from 'framer-motion';
import {
  FaLocationArrow,
  FaClock,
  FaArrowsAltH,
  FaHeadset,
  FaSyncAlt,
  FaFileDownload,
  FaInfoCircle,
  FaExternalLinkAlt,
  FaCalendarCheck,
  FaRoute,
  FaExclamationTriangle,
  FaDrawPolygon,
  FaKey,
  FaPhoneAlt,
  FaHeadphones,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import './efro.css';

const atsUnits = [
  { unit: 'EFRO DEL', callSign: 'Rovaniemi Delivery', frequency: '118.525' },
  { unit: 'EFRO TWR', callSign: 'Rovaniemi Tower', frequency: '118.700' },
  { unit: 'EFRO APP', callSign: 'Rovaniemi Radar', frequency: '129.900' },
  { unit: 'EFRO R APP', callSign: 'Rovaniemi Arrival', frequency: '118.600' },
  { unit: 'EFRO TWR Shift Supervisor', callSign: '', frequency: '' },
  { unit: 'EFRO APP Shift Supervisor', callSign: '', frequency: '' },
  {
    unit: 'EFIN Y APP (NEMGU)',
    callSign: 'Helsinki Control',
    frequency: '131.600',
  },
  {
    unit: 'EFIN Z APP (NEPIX)',
    callSign: 'Helsinki Control',
    frequency: '131.650',
  },
  { unit: 'EFIN D', callSign: 'Helsinki Control', frequency: '121.300' },
  { unit: 'EFIN A*', callSign: 'Helsinki Control', frequency: '127.425' },
  { unit: 'EFIN J', callSign: 'Helsinki Control', frequency: '126.100' },
  { unit: 'EFIN V', callSign: 'Helsinki Control', frequency: '126.300' },
  { unit: 'OU/KT/KS TWR', callSign: '', frequency: '' },
  { unit: 'EFIN FMP', callSign: '', frequency: '135.525 (SECT N)' },
];

const vectors = [
  { exitPoint: 'ARFUT', rwy03: 'H070', rwy21: 'H160' },
  { exitPoint: 'IBSAN', rwy03: 'H350', rwy21: 'H250' },
  { exitPoint: 'MARXO', rwy03: 'H070', rwy21: 'H160' },
  { exitPoint: 'OLNOP', rwy03: 'H350', rwy21: 'H210' },
  { exitPoint: 'RENVI', rwy03: 'H070', rwy21: 'H160' },
  { exitPoint: 'ROTKO', rwy03: 'H020', rwy21: 'H250' },
];

const holds = [
  { id: 'NEMGU', inbound: 54, turns: 'Left', legs: '1.5-minute' },
  { id: 'NEPIX', inbound: 6, turns: 'Right', legs: '2-minute' },
  { id: 'OSLIT', inbound: 164, turns: 'Right', legs: '2-minute' },

  { id: 'TEVRU', inbound: 360, turns: 'Left', legs: '1.5-minute' },
  { id: 'DIVEG', inbound: 20, turns: 'Right', legs: '1.5-minute' },
  { id: 'OTVEG', inbound: 10, turns: 'Right', legs: '1.5-minute' },
  { id: 'OTLUD', inbound: 350, turns: 'Right', legs: '1.5-minute' },
  { id: 'SUVIB', inbound: 350, turns: 'Right', legs: '1.5-minute' },
  { id: 'GODOB', inbound: 15, turns: 'Right', legs: '1.5-minute' },
];

export default function EFROBriefing() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto sm:px-6 px-4">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold mb-6">
          Briefing{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-700">
            Finland
          </span>
        </h1>

        <div className="flex flex-wrap sm:gap-6 gap-4 mb-8 justify-center text-xs sm:text-sm">
          <Link
            smooth
            to="#TWR"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            RO-TWR
          </Link>
          <Link
            smooth
            to="#APP"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            RO-APP
          </Link>
          <Link
            smooth
            to="#ARR"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            RO-ARR
          </Link>
          <Link
            smooth
            to="#EFIN"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            EFIN
          </Link>
          <Link
            smooth
            to="#feeders"
            className="text-blue-400 font-medium hover:underline underline-offset-4"
          >
            Feeders
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

          <div className="mt-6 flex gap-4">
            <a
              href="/#/staffing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-fuchsia-800 font-semibold shadow-lg hover:bg-fuchsia-900 transition"
            >
              <FaExternalLinkAlt /> ATC Staffing
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
                {atsUnits.map((ats, index) => (
                  <tr
                    key={index}
                    className="bg-white/5 hover:bg-white/10 transition"
                  >
                    <td className="px-4 py-3 text-gray-200">{ats.unit}</td>
                    <td className="px-4 py-3 text-gray-200">{ats.callSign}</td>
                    <td className="px-4 py-3 text-gray-200">{ats.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Please read carefully the position-specific-procedures on this
              page for your assigned positions!
            </span>
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
            <FaFileDownload className="text-purple-500 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">
              TopSky Sectorfile
            </h3>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              All controllers should download the sectorfile from the Forum
              page. The sectorfile will be published a couple days before the
              event.
            </span>
          </p>

          <a
            href="https://forum.vatsim-scandinavia.org/t/finland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-2 px-4 py-2 mb-4 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            <FaExternalLinkAlt /> TopSky Sectorfile
          </a>

          <p className="text-gray-300 mb-3">The sectorfile contains:</p>

          <ul className="grid gap-3 text-gray-300 list-disc list-outside pl-6">
            <li>Event Mandatory Routes</li>
            <li>Feeder Sectors</li>
            <li>Feeder Temporary Release Lines</li>
            <li>EFRO Departure vectoring sector</li>
            <li>XFL and PEL agreements</li>
            <li>Other system changes</li>
          </ul>
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
              another airport (recommended EFOU or EFHK)
            </li>
          </ul>

          <div className="flex items-center gap-3 mb-4 mt-8">
            <FaFileDownload className="text-purple-500 text-xl" />
            <h3 className="text-xl font-semibold text-purple-500">
              VATCAN Slot Plugin
            </h3>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              <span>
                Download the VATCAN Slot Plugin for EuroScope, available{' '}
                <a
                  className="underline"
                  href="https://github.com/VATSIMCanada/Slots-Plugin/releases/tag/1.10"
                >
                  HERE
                </a>
              </span>
            </span>
          </p>

          <p className="text-gray-300 mb-2">
            Scroll down and download the{' '}
            <strong className="text-blue-400">VATCANBookings.dll</strong> file.
            Place it in your EuroScope plugins folder and load the Plugin in
            EuroScope OTHER SET → Plugins Menu. Allow "draw on EuroScope"
          </p>

          <div className="flex-1 p-1 bg-white/5 border border-white/10 shadow-lg">
            <motion.img
              src="/images/briefing/slot_plugin.png"
              alt="VATCAN Slot Plugin"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 p-4 bg-white/5 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-400/20 rounded-full text-yellow-300">
                <FaKey size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  VATCAN Plugin Event Code
                </p>
                <h3 className="text-xl font-semibold">8b4d4</h3>
              </div>
            </div>
          </motion.div>

          <p className="text-gray-300 mt-4">
            Copy the Event Code to the slot plugin 'Enter Code' field in
            EuroScope. Now you can see if an aircraft has a valid slot or not.
          </p>

          <p className="text-gray-300 mt-4">
            All ATC in Finland:{' '}
            <strong className="text-yellow-500">Verify the EVENT Tag!</strong>
          </p>

          <ul className="grid gap-3 text-gray-300 list-disc list-outside pl-6 mt-4">
            <li>
              <strong className="text-yellow-500">EVT</strong> Pilot has a valid
              slot to EFRO, ENTC or ESNQ
            </li>
            <li>
              <strong className="text-yellow-500">RENE</strong> Pilot does not
              have a slot but has been approved to EFRO, ENTC or ESNQ
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Non-Event Release (RENE)
          </h3>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              If you encounter someone flying to EFRO, ENTC or ESNQ without a
              Slot, coordinate with EFIN FMP to check if the aircraft may be
              released or needs to be diverted to another aerodrome. This also
              applies to flights from EFHK and regional aerodromes.
            </span>
          </p>

          <p className="text-gray-300">
            To maintain traffic flow, there will be coordination for non-event
            releases, mainly between ACC supervisors and flow controllers. If a
            possible gap in arrivals is noted, an aircraft with no slot may be
            approved by EFIN FMP.
          </p>
        </motion.div>

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
            <h3 className="text-2xl font-semibold text-white">
              Mandatory Routes
            </h3>
          </div>

          <p className="text-gray-300">
            Pilots should plan their flight according to the Mandatory Routes.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              If you encounter someone flying on a wrong route, give a re-route
              if necessary. This may consist of vectoring followed by DCT to
              join the sequence.
            </span>
          </p>

          <p className="text-gray-300">
            The Mandatory Routes can be viewed in the Event Map or directly on
            the TopSky Radar.
          </p>
          <p className="text-gray-300 mt-4">
            The routes of all departures from EFRO shall be checked, especially
            important when flying towards Sweden.
          </p>
        </motion.div>

        <motion.div
          id="coordination"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-pink-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Coordination</h3>
          </div>

          <p className="text-gray-300">
            All coordination is to be performed with TopSky SYSCO, verbally
            face-to-face (or online, if one or more parties is not available at
            the meet-up) or by using text.
          </p>

          <p className="text-gray-300 mt-4 mb-4">
            For direct tactical controller-to-controller coordination, the
            following methods of coordination will be preferred in order:
          </p>

          <div className="p-2 pb-4 mb-4 bg-white/5 border border-white/10 shadow-lg">
            <p className="text-blue-400 font-bold mb-2">SYSCO via TopSky</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                SYSCO must always be preferred to keep verbal coordination to a
                minimum due to the busy nature of the event
              </li>
              <li>
                Suitable especially for routine re-routings and tactical
                requests
              </li>
              <li>
                If SYSCO response is not received on the first try, the request
                must be re-sent once before reverting to voice or text
                coordination.
              </li>
            </ul>
          </div>
          <div className="p-2 pb-4 mb-4 bg-white/5 border border-white/10 shadow-lg">
            <p className="text-blue-400 font-bold mb-2">
              Voice Coordination via SUPER positions
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Since controllers will be busy interacting with their frequency,
                shift supervisors (controllers on break) are able to handle and
                relay most verbal coordination.
              </li>
              <li>
                EFIN SUPER is responsible for coordination with ATS-units
                outside of Finnish airspace, and shall be contacted first for
                international matters and slot requests. EFIN SUPER will be
                found on VATSIM Scandinavia discord server.
              </li>
            </ul>
          </div>

          <div className="p-2 pb-4 mb-4 bg-white/5 border border-white/10 shadow-lg">
            <p className="text-blue-400 font-bold mb-2">
              Voice coordination between operative positions
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Each group will have their own text channel for coordination,
                with each controller will have their own voice channel
              </li>
              <li>For quick routine and tactical level coordination</li>
              <li>Perform coordination according to the standard procedure</li>
            </ul>
          </div>

          <p className="mt-6 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Operative coordination channels shall be used for no other purpose
              than coordination.
            </span>
          </p>

          <p className="mt-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              All controllers shall monitor their respective coordination
              channel whenever they are not on another channel for coordination
              with another position.
            </span>
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://wiki.vatsim-scandinavia.org/books/lop-amY/page/system-coordination"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> System Coordination
            </a>
            <a
              href="https://wiki.vatsim-scandinavia.org/books/qrh/page/atc-coordination-standards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> ATC Coordination Standards
            </a>
          </div>
        </motion.div>

        <motion.div
          id="TWR"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaHeadset className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">
              EFRO TWR & CLD
            </h3>
          </div>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-4">
            Departures
          </h3>

          <div className="relative border-l border-blue-700 pl-6 ml-2 space-y-8">
            <div className="relative">
              <div className="absolute -left-[32.3px] w-4 h-4 bg-blue-700 rounded-full"></div>
              <p className="block text-white font-bold mb-2">Verify Slot</p>
              <p className="text-gray-300 text-sm">
                Flights to <strong className="text-blue-400">ENTC</strong> and{' '}
                <strong className="text-blue-400">ESNQ</strong> shall have a
                Slot. If not, contact EFIN FMP for possible RENE.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                All departures to non-event airports are “free flow”.
                Restrictions only from EFRO TWR or APP (departure gap
                coordination). No departure slot from FMP (flow management) is
                necessary.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[32.3px] w-4 h-4 bg-blue-700 rounded-full"></div>
              <p className="block text-white font-bold mb-2">Validate Route</p>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-blue-400">To ENTC:</strong> IBSAN DCT
                AMULU DCT GAPRO DCT KIIKA
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-blue-400">To ESNQ:</strong> IBSAN DCT
                NEBET DCT TERPA
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-blue-400">Towards Sweden:</strong> OLNOP
                DCT XONTU DCT KETEL ...
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-blue-400">Route Restrictions:</strong>
              </p>
              <ul className="grid gap-1 text-sm text-gray-300 list-disc list-outside pl-6">
                <li>
                  Departures via IBSAN shall not exit Helsinki FIR south of
                  point PERKE
                </li>
                <li>
                  Departures via OLNOP shall not re-enter Helsinki FIR before
                  EFIN Sector G
                </li>
                <li>
                  Southbound departures shall not turn south-westbound before
                  passing abeam waypoint ELSOV
                </li>
              </ul>
              <p className="text-gray-300 text-sm mt-4">
                If unsure, confirm the route with EFIN FMP
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[32.3px] top-1 w-4 h-4 bg-blue-700 rounded-full"></div>
              <p className="block text-white font-bold mb-2">
                Push Back & Taxi
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Departures are transferred to Tower when ready for Push Back.
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Coordinate Departure Gap with APP SUPER before reaching the
                holding point and give possible time estimate for the pilot.
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Aim for around 1-3 departures on the taxiway at any given time.
                This allows to fill possible gaps between arrivals.
              </p>
              <p className="text-gray-300 text-sm mb-4">
                If you have multiple departures, TSAT can be assigned to space
                them out evenly.
              </p>

              <p className="text-gray-300 text-sm">
                <strong className="text-blue-400">Calculate TSAT</strong> based
                on number of departures. Add around 4-5 minutes per departure
                (if the holding point is crowded). This means that if there are
                4 departures in queue, the fifth in queue will get TSAT +16
                minutes. Traffic with slots may be prioritized slightly.
              </p>
            </div>

            <div className="relative" id="ahdg">
              <div className="absolute -left-[32.3px] top-1 w-4 h-4 bg-blue-700 rounded-full"></div>
              <p className="block text-white font-bold mb-2">Take-off</p>
              <p className="text-gray-300 text-sm mb-2">
                Pilots are expected to be ready for take-off when reaching the
                holding point. In tight gaps, it's a good idea to confirm if the
                pilot is ready for an immediate take-off. e.g. to avoid ice
                shedding engine runups on the runway.
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Departures shall be assigned a Vector Departure with the
                en-route clearance.
              </p>

              <table className="min-w-full text-left border border-white/10 overflow-hidden">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-2 py-2 text-gray-300 font-semibold text-sm">
                      TMA Exit Point
                    </th>
                    <th className="px-2 py-2 text-gray-300 font-semibold text-sm">
                      RWY 21
                    </th>
                    <th className="px-2 py-2 text-gray-300 font-semibold text-sm">
                      RWY 03
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {vectors.map((data, index) => (
                    <tr
                      key={index}
                      className="bg-white/5 hover:bg-white/10 transition"
                    >
                      <td className="px-2 py-2 text-gray-200">
                        {data.exitPoint}
                      </td>
                      <td className="px-2 py-2 text-gray-200">{data.rwy21}</td>
                      <td className="px-2 py-2 text-gray-200">{data.rwy03}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-4 mb-4 flex flex-col">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
                  <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
                  <span>
                    Initial Climb <strong>4000 FT</strong> unless otherwise
                    coordinated.
                  </span>
                </span>
              </p>
              <p className="text-gray-300 text-sm mt-4">
                CLD shall verify and update the Radar Label with the correct
                departure heading and altitude.
              </p>
              <p className="mt-6 flex flex-col">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 sm:text-sm text-xs font-medium">
                  <FaHeadphones className="h-4 w-4 flex-shrink-0" />
                  FINNAIR 9XG, CLEARED TO HELSINKI, RUNWAY 21, AFTER DEPARTURE
                  FLY HEADING 140, CLIMB TO 4000 FEET, VECTORING TO RENVI,
                  SQUAWK 6501
                </span>
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Arrivals
          </h3>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Arrivals are transferred to Rovaniemi Tower 4 - 10 NM from the
              threshold
            </li>
            <li>
              TWR will assume the aircraft and{' '}
              <strong className="text-blue-400">
                advise if late landing clearance is expected
              </strong>
            </li>
            <li>
              Tower may give the Landing Clearance at latest when passing the
              runway threshold (50 FT)
            </li>
            <li>
              Tower plays a crucial role in expediting arrivals and avoiding
              unnecessary go-arounds
            </li>
          </ul>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              TWR will give the landing clearance when the runway is free OR
              when there is reasonable assurance that the runway will be free
              before the arrival crosses the runway threshold.
            </span>
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              TWR may give landing clearance if the preceding aircraft is about
              to vacate the runway
            </li>
            <li>
              TWR shall give a Go-Around if the runway is not free by the time
              the aircraft crosses the runway threshold
            </li>
          </ul>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              If the separation on final is tight, TWR shall advise the arriving
              aircraft to expedite vacating the runway to prevent go-arounds.
              This can also be done before landing (e.g. ...after landing
              expedite vacating).
            </span>
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Arrivals are considered to have a higher priority on the taxiways
              in order to keep runway exits clear
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Go-arounds
          </h3>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              Advise APP SUPER immeadetely when you or the pilot initiates a
              go-around
            </li>
            <li>
              Advise the pilot to maintain runway heading and climb to 4000 FT
            </li>
            <li>Select MISSED APP from TopSky Radar Label</li>
            <li>
              Transfer the aircraft to EFRO APP after passing the end of the
              runway
            </li>
          </ul>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              We do everything to avoid go-arounds since it can be quite a
              process to coordinate a new gap in the sequence. TWR has a huge
              role in expediting arrivals by proactive controlling. Some pilots
              may perform a go-around on 1 mile final if they have not received
              a landing clearance, so please advise the pilot when a late
              landing clearance is expected.
            </span>
          </p>
        </motion.div>

        <motion.div
          id="APP"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaHeadset className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">EFRO APP</h3>
          </div>

          <p className="text-gray-300 mb-2">
            The TMA is controlled by EFRO APP (Rovaniemi Radar) and EFRO ARR
            (Rovaniemi Arrival). There is always one ATCO on break who also
            works as the APP Shift Supervisor and helps with any coordination
            needs.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-4">
            Arrivals
          </h3>

          <p className="text-gray-300 mb-2">
            Main task of APP is feeding arrivals to ARR with sufficient spacing,
            enabling ARR to turn aircraft onto the localizer in accordance with
            the target final separation.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Arrivals shall be separated from departures and cleared to 5000 FT
              before transfer to Rovaniemi Arrival.
            </span>
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Rovaniemi Arrival should not be required to give delay vectors or
              to change the arrival sequence after the aircraft is transferred
              from Radar to Arrival. Arriving traffic shall be sufficiently
              sequenced in the correct order before transferring to Arrival.
            </span>
          </p>

          <p className="text-gray-300 mb-2">
            Aircraft on adjacent downwinds shall also be taken into
            consideration when sequencing. The aiming point is always the
            Initial Approach fix (2 NM from FAF). Whenever the final extends
            further away from the IAF, APP shall take action and delay the
            following aircraft before transfer to ARR.
          </p>
          <p className="text-gray-300 mb-2">
            APP or APP Shift Supervisor shall coordinate with EFIN FMP if the
            TMA gets too crowded. This way we can slow inbound aircraft for a
            while to ease the load.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Arrivals shall be clear of the Departure Sector before transfer to
              Arrival. The departure sector for runway 21 or 03 can be activated
              from the TopSky maps menu.
            </span>
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-4">
            Holdings
          </h3>

          <p className="text-gray-300 mb-2">
            Arrivals are vectored to downwind from the TMA entry points. In case
            of holding, EFIN ACC or Feeder will give the following heading when
            leaving the hold:
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
                  <p className="text-sm text-gray-400 mb-1">AHDG from NEPIX</p>
                  <h3 className="text-xl font-semibold">H030 230 kt</h3>
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
                  <p className="text-sm text-gray-400 mb-1">AHDG from NEMGU</p>
                  <h3 className="text-xl font-semibold">H040 230 kt</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              If holdings are established, the target rate (e.g. 10 NM) shall be
              agreed together with EFIN FMP and APP controllers. EFIN ACC or the
              FEEDER Sectors are responsible for managing the holding patterns.
              The arriving aircraft will be transferred to Rovaniemi Radar when
              leaving the holding.
            </span>
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              The use of holding patterns will be avoided as far as practicable
              while maintaining maximum runway capacity. Controllers and EFIN
              FMP will primarily use other means of delay (slots, ECFMP, speed
              control, vectoring en-route etc.).
            </li>
            <li>
              Arrivals via OSLIT will be cleared to hold by EFIN J/H (if
              necessary) and then transferred to EFRO APP for sequencing into
              the NEMGU flow.
            </li>
            <li>
              EFRO APP shall cancel the hold at OSLIT (this is not done by Area
              Control due difficulties to determine the arrival sequence)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Go-arounds
          </h3>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              TWR will alert APP or APP Shift Supervisor when a go-around occurs
            </li>
            <li>
              TWR verifies aircraft is maintaining heading and transfers the
              go-around to APP for further instructions.
            </li>
            <li>
              APP Shift Supervisor will determine whether it is necessary to
              coordinate a go-around gap or if the go-around can be sequenced
              into the flow without an additional gap. Go-arounds shall be
              prioritized and the downwind vector shall be given expeditiously.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Departures
          </h3>

          <p className="text-gray-300 mb-4">
            Departures are assigned a pre-agreed HDG and initial climb of 4000
            FT without prior coordination{' '}
            <Link
              smooth
              to="#ahdg"
              className="text-blue-400 font-medium hover:underline underline-offset-4"
            >
              (check table)
            </Link>
            .
          </p>

          <p className="text-gray-300 mb-4">
            TWR will request a departure gap from APP Shift Supervisor who will
            initiate the coordination. There are two ways to apply a gap for
            departing traffic:
          </p>

          <ol className="space-y-3 text-gray-300 list-decimal list-outside pl-6">
            <li>
              APP and ARR restrict speed or delay the base leg of the arrival to
              create a departure gap if the traffic situation allows, or;
            </li>
            <li>
              Feeder or EFIN creates spacing by leaving an aircraft to the hold
              for one extra circuit as necessary, followed by a standard
              transfer to APP
            </li>
          </ol>

          <p className="text-gray-300 mb-4 mt-4">
            TWR shall be advised when the departure gap is expected, and
            whenever there are changes to a coordinated departure gap. Normally
            the expected UTC time and/or the callsign of the arrival is
            sufficient.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Departures are cleared to FL 90, direct TMA exit point if possible
              and transferred to the appropriate ACC sector. If DCT is not
              possible due arriving traffic, a heading may be proposed to Area
              Control with TopSky TIP (Tactical Instructions Proposal).
            </span>
          </p>

          <p className="text-gray-300">
            The goal is to get the departing aircraft above arrivals before
            leaving the TMA.
          </p>
        </motion.div>

        <motion.div
          id="ARR"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaHeadset className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">EFRO ARR</h3>
          </div>

          <p className="text-gray-300 mb-4">
            The main task for Rovaniemi Arrival is vectoring arrivals for
            approach.
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-outside pl-6">
            <li>
              ARR is responsible for the final sequencing of both downwind legs
              and combining the flow together
            </li>
            <li>
              APP will vector arrivals onto the downwind leg and clear to 5000
              FT before transferring to ARR
            </li>
          </ul>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              The exact target final separation may be agreed together with APP
              and TWR controllers, being 3-5 NM depending on factors such as
              runway conditions and weather.
            </span>
          </p>

          <p className="text-gray-300 mb-4">
            ARR is responsible for monitoring the aircraft until touchdown.
            Should the separation of two aircraft on final reduce to less than
            2.5 NM, TWR shall be ordered to maintain visual separation of the
            aircraft concerned or to instruct the trailing aircraft to go
            around, maintaining separation to the leading aircraft in case it
            also performs a go-around.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Do not transfer to TWR if it is evident that an aircraft needs to
              perform a go around. Instead, issue the go-around or cancel the
              approach clearance. The aircraft may then be vectored for a new
              approach or transferred to APP on runway heading for resequencing.
            </span>
          </p>

          <p className="text-gray-300">
            Whenever an approach is cancelled and the aircraft overflies the
            runway, TWR should be advised to prevent departures from causing a
            loss of separation. The aircraft on RWY HDG shall be instructed to
            climb to not more than 4000 FT and transferred to APP.
          </p>
        </motion.div>

        <motion.div
          id="EFIN"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaDrawPolygon className="text-red-500 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">Area Control</h3>
          </div>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Sectorisation
          </h3>

          <p className="text-gray-300 mb-4">
            At a minimum, at least 3 EFIN positions and the NEPIX Feeder must be
            staffed during the event. Optimally, 4 EFIN positions and both NEPIX
            and NEMGU Feeders are opened.
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
                  <FaDrawPolygon size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Optimal Sectorisation
                  </p>
                  <h3 className="text-xl font-semibold">
                    D, A, J, V, NEPIX, NEMGU
                  </h3>
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
                  <FaDrawPolygon size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Minimal Sectorisation
                  </p>
                  <h3 className="text-xl font-semibold">D, J, V, NEPIX</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-gray-300 mt-4">
            If there are not enough C1 controllers available, the Minimal
            Sectorisation plan applies. In that case, EFIN D assumes the duties
            of EFIN A, and EFIN V may need to handle arrivals via NEMGU. Those
            arrivals, however, should already be well-sequenced by Sweden
            Control.
          </p>

          <p className="text-gray-300 mt-4">
            The Planned Optimal Sectorisation is also shown on the Event Map.
          </p>

          <div className="mt-4 mb-6 flex gap-4">
            <a
              href="https://fss-map.lusep.fi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> Event Map
            </a>
            <a
              href="https://sectors.lusep.fi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> EFIN Sectorisation Map
            </a>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              <span>
                Please verify that all arrivals to EFRO, ENTC or ESNQ has the{' '}
                <strong className="text-yellow-500">EVT</strong> or{' '}
                <strong className="text-yellow-500">RENE</strong> marking in the
                label. If not, contact EFIN FMP for more details.
              </span>
            </span>
          </p>

          <p className="text-gray-300">
            EFIN FMP will coordinate with each EFIN position to make sure smooth
            operations. EFIN FMP may request to establish En-route holds, change
            the target separation for each flow or other restrictions if deemed
            necessary.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            Transfer of Control
          </h3>

          <p className="text-gray-300 mb-4">
            The target separation may vary, but the absolute minimum separation
            between successive aircraft during transfer is 10 NM constant or
            increasing. Specific target values may be coordinated during the
            event if/when necessary.
          </p>

          <p className="text-gray-300">
            Traffic via NEMGU shall be transferred from EFIN V to Feeder no
            later than 50 NM from NEPIX. Traffic is considered descending to FL
            180. Traffic is fully released at transfer of communication. The
            transfer Arc and temporary XFL/PEL agreement is included in the
            TopSky sectorfile.
          </p>

          <div className="flex items-center gap-3 mb-4 mt-8">
            <FaSyncAlt className="text-purple-500 text-xl" />
            <h3 className="text-xl font-semibold text-purple-500">
              Holding Procedures
            </h3>
          </div>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              EFIN ACC Positions and Feeders handle all holdings including
              holdings at the TMA Entry points. Please, do NOT initiate holding
              without prior coordination with EFIN FMP. All holding areas are
              also shown on the Event Map.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {holds.map((hold) => (
              <div
                key={hold.id}
                className="bg-purple-600/10 border border-purple-400/30 text-purple-300 px-4 py-3 
                                flex-1 basis-full sm:basis-[calc(33.333%-1rem)] 
                                shadow-md hover:shadow-lg transition-shadow flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <FaSyncAlt className="text-purple-300" />
                  <span className="font-semibold text-purple-300">
                    {hold.id}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <FaLocationArrow />
                  <span>Inbound {String(hold.inbound).padStart(3, '0')}°</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  {hold.turns === 'Left' ? (
                    <FaArrowLeft className="text-purple-400" />
                  ) : (
                    <FaArrowRight className="text-purple-400" />
                  )}
                  <span>{hold.turns} turns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <FaClock />
                  <span>{hold.legs} legs</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mt-4 mb-4">
            When cleared to leave NEPIX or NEMGU holding, EFIN or Feeder shall
            use the headings below and transfer to EFRO APP as soon as the
            aircraft has established on the given heading. Arrivals via OSLIT
            are transferred to EFRO APP when joining the hold.
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
                  <p className="text-sm text-gray-400 mb-1">AHDG from NEPIX</p>
                  <h3 className="text-xl font-semibold">H030 230 kt</h3>
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
                  <p className="text-sm text-gray-400 mb-1">AHDG from NEMGU</p>
                  <h3 className="text-xl font-semibold">H040 230 kt</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://wiki.vatsim-scandinavia.org/books/lop-amY/page/holding-procedures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> TopSky Holding
            </a>
            <a
              href="https://wiki.vatsim-scandinavia.org/books/sop/page/holding-clearances"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
            >
              <FaExternalLinkAlt /> Holding Clearances
            </a>
          </div>
        </motion.div>

        <motion.div
          id="feeders"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-white/5 border border-white/10 shadow-lg mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaHeadset className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-white">
              Feeder Sectors
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            When holdings are established, the main tasks of FEEDER sectors are
            to clear the aircraft for holdings, separate and manage the hold and
            feed the aircraft to the TMA with 10 to 20 NM separation, unless
            otherwise agreed with APP Shift Supervisor and EFIN FMP.
          </p>

          <p className="text-gray-300 mb-4">
            FEEDER sectors shall utilise the TopSky holding list and vertical
            visualization of the hold to help separate the holding aircraft. It
            is also recommended to take advantage of an alias file to ease
            writing the clearance for text pilots.
          </p>

          <p className="text-gray-300">
            The goal is that feeding to TMA is never closed during the event. If
            this occurs, it is vital to cooperate with APP Shift Supervisor and
            Radar to make sure feeding is continued as soon as possible after
            the closure to minimize the impact on runway operations rate and
            minimize the snowball effect further along the controlling chain.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            NEMGU Feeder
          </h3>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Traffic will be transferred from ESOS-K no later than 35 NM from
              MISMO. Traffic is considered descending to FL 210. Traffic is
              released for descent and change of speed at transfer of
              communication.
            </span>
          </p>

          <p className="text-gray-300 mb-4">
            NEMGU FEEDER shall transfer arrivals to Rovaniemi Radar before
            passing the airspace boundary. Traffic shall be sequenced before
            transfer of communications.
          </p>

          <p className="text-gray-300 mb-4">
            Holding over NEMGU will be established if required. EFIN FMP will
            coordinate with all parties concerned before initiation. The goal is
            to minimize holds as far as practicable. If holds are established,
            EFIN FMP will do their best to minimize holding over the TMA entry
            fixes by regulating traffic earlier.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Aircraft shall be instructed to fly H040 and maintain IAS 230 KTS
              when leaving the hold.
            </span>
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4 mt-8">
            NEPIX Feeder
          </h3>

          <p className="text-gray-300 mb-4">
            NEPIX FEEDER is planned to be open during the entire event.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
              <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
              Traffic will be transferred from EFIN V no later than 50 NM from
              NEPIX. Traffic is considered descending to FL 180. Traffic is
              fully released at transfer of communication.
            </span>
          </p>

          <p className="text-gray-300 mb-4">
            NEPIX FEEDER shall transfer arrivals to Rovaniemi Radar before
            passing the airspace boundary. Traffic shall be sequenced before
            transfer of communications.
          </p>

          <p className="text-gray-300 mb-4">
            Holding over NEPIX will be established if required. EFIN FMP will
            coordinate with all parties concerned before initiation. The goal is
            to minimize holds as far as practicable. If holds are established,
            EFIN FMP will do their best to minimize holding over the TMA entry
            fixes by regulating traffic earlier.
          </p>

          <p className="mt-4 mb-4 flex flex-col">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 sm:text-sm text-xs font-medium">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              Aircraft shall be instructed to fly H030 and maintain IAS 230 KTS
              when leaving the hold.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
