import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const rovaniemi = [
  {
    title: "Rovaniemi",
    image: "images/scenery/efro1.png",
    description: "Freeware Scenery by Tatu",
    simulators: ["MSFS 2020", "MSFS 2024"],
    site: "https://flightsim.to/file/20910/efro-rovaniemi-finland",
  },
  {
    title: "Rovaniemi",
    image: "images/scenery/efro2.png",
    description: "Payware Scenery by MK-Studios",
    simulators: ["MSFS 2020"],
    site: "https://orbxdirect.com/product/mkstudios-efro-msfs",
  },
  {
    title: "Rovaniemi",
    image: "images/scenery/efro4.png",
    description: "Payware Scenery by MK-Studios",
    simulators: ["Prepar3D v4+"],
    site: "https://orbxdirect.com/product/mkstudios-efro",
  },
  {
    title: "Rovaniemi",
    image: "images/scenery/efro5.png",
    description: "Payware Scenery by FLY X Simulations",
    simulators: ["X-Plane 11"],
    site: "https://store.x-plane.org/EFRO--Rovaniemi-Rebooted-_p_1097.html",
  }

];

const tromso = [
  {
    title: "Tromsø",
    image: "images/scenery/entc2.png",
    description: "Freeware Scenery by artogsta",
    simulators: ["MSFS 2020", "MSFS 2024"],
    site: "https://flightsim.to/file/62060/entc-troms-airport-langnes",
  },
  {
    title: "Tromsø",
    image: "images/scenery/entc1.jpg",
    description: "Payware Scenery by MM Simulations",
    simulators: ["MSFS 2020", "MSFS 2024"],
    site: "https://orbxdirect.com/product/mmsimulations-entc-msfs",
  },
  {
    title: "Tromsø",
    image: "images/scenery/entc3.jpg",
    description: "Payware Scenery by Aerosoft",
    simulators: ["Prepar3D v4+", "FSX"],
    site: "https://www.aerosoft.com/en/shop/flight/p3d-fsx/flight-simulator-x/sceneries/fsx-europe/1084/tromsoe-x",
  },
  {
    title: "Tromsø",
    image: "images/scenery/entc4.jpeg",
    description: "Freeware Scenery by Airports of Norway",
    simulators: ["Prepar3D v4"],
    site: "https://www.flightsimnorway.com/addons/default.php?funct=dl&pack=aon",
  },
  {
    title: "Tromsø",
    image: "images/scenery/entc5.jpg",
    description: "Payware Scenery by Aerosoft",
    simulators: ["X-Plane 11", "X-Plane 12"],
    site: "https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/sceneries/xp-europe/2475/tromsoe-xp",
  },
  {
    title: "Tromsø",
    image: "images/scenery/entc6.jpg",
    description: "Freeware Scenery by tdg",
    simulators: ["X-Plane 11"],
    site: "https://forums.x-plane.org/files/file/53438-entc-tromso-airport-norway-xp11/",
  },
];

const kiruna = [
  {
    title: "Kiruna",
    image: "images/scenery/esnq0.jpg",
    description: "Payware Scenery by Orbx",
    simulators: ["MSFS 2020", "MSFS 2024"],
    site: "https://orbxdirect.com/product/orbx-scandinavian-airports-msfs",
  },
  {
    title: "Kiruna",
    image: "images/scenery/esnq1.jpg",
    description: "Payware Scenery by Orbx",
    simulators: ["Prepar3D", "FSX"],
    site: "https://orbxdirect.com/product/esnq",
  },
  {
    title: "Kiruna",
    image: "images/scenery/esnq2.png",
    description: "Freeware Scenery by Jodrim",
    simulators: ["X-Plane 11"],
    site: "https://forums.x-plane.org/files/file/43733-esnq-kiruna-airport/",
  },
];

export default function Sceneries() {
  return (
    <section
      id="sceneries"
      className="py-20 bg-gradient-to-br from-teal-950 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blue-400">
          S c e n e r i e s
        </h2>

        {/* EFRO */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
          EFRO – Rovaniemi
        </h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {rovaniemi.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.simulators.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded text-xs font-medium bg-white/5 border border-white/20 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition">
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ENTC */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
          ENTC – Tromsø
        </h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {tromso.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.simulators.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded text-xs font-medium bg-white/5 border border-white/20 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition">
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ESNQ */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
          ESNQ – Kiruna
        </h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {kiruna.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.simulators.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded text-xs font-medium bg-white/5 border border-white/20 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition">
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
