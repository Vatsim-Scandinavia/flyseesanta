import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaExternalLinkAlt, FaMapMarkedAlt } from "react-icons/fa";

type RoutesData = {
  [country: string]: {
    [airport: string]: {
      [destination: string]: string;
    };
  };
};

type MandatoryRoute = {
  description: string;
  route: string;
};

const mandatoryRoutes: Record<string, MandatoryRoute[]> = {
  ENTC: [
    { description: "From Rovaniemi (EFRO)", route: "IBSAN DCT AMULU DCT GAPRO DCT KIIKA" },
    { description: "From Kiruna (ESNQ)", route: "RIXEM DCT MANKI" },
    { description: "From Gardermoen (ENGM)", route: "RIBBE Z125 SOMUB Z103 BNN DCT BDO Z200 BARVI" },
    { description: "From the South", route: "... DCT BNN DCT BDO Z200 BARVI" },
    { description: "From Sweden", route: "... DCT RIXEM DCT MANKI" },
  ],
  ESNQ: [
    { description: "From Rovaniemi (EFRO)", route: "IBSAN DCT NEBET DCT TERPA" },
    { description: "From Tromsø (ENTC)", route: "MOKAX DCT POBEL DCT LAPLA" },
    { description: "From Arlanda (ESSA)", route: "RESNA T317 VAGAS" }
  ],
};

export default function Routes() {
  const [routesData, setRoutesData] = useState<RoutesData>({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [suggestedRoute, setSuggestedRoute] = useState("");

  useEffect(() => {
    fetch("/routes.json")
      .then((res) => res.json())
      .then((data) => setRoutesData(data));
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedAirport) {
      const route =
        routesData[selectedCountry]?.[selectedAirport]?.["Rovaniemi"] || "";
      setSuggestedRoute(route);
    } else {
      setSuggestedRoute("");
    }
  }, [selectedCountry, selectedAirport, routesData]);

  const copyToClipboard = (route: string) => {
    navigator.clipboard.writeText(route);
    alert("Route copied to clipboard!");
  };

  const openSkyVector = (route: string) => {
    const url = `https://skyvector.com/?chart=301&fpl=${encodeURIComponent(
      route
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="routes"
      className="py-20 bg-gradient-to-br from-sky-950 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-12 text-center">
          R o u t e s
        </h2>

        <p className="text-lg text-gray-300 mb-10">
          To help us better facilitate traffic flow, please plan your flight via the Mandatory Routes.
        </p>

        {/* EFRO Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Arriving in EFRO
          </h3>

          <div className="p-6 bg-white/5 border border-white/10 shadow-lg">
            ⚠️ The route planner will be published in November
          </div>



          <p className="text-lg text-gray-300 mt-6 mb-6">If your departure airport or country is not listed, don't worry!</p>

          <div>
            <a href="https://fss-map.lusep.fi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition">
              <FaMapMarkedAlt />Show Mandatory Routes on Map
            </a>
          </div>

        </motion.div>

        {/* ENTC Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Arriving in ENTC
          </h3>
          <div className="space-y-4">
            {mandatoryRoutes.ENTC.map((r, idx) => (
              <div key={idx} className="p-4 bg-white/5 border border-white/10 flex flex-col gap-2">
                <span className="text-sm font-semibold text-blue-400">
                  {r.description}
                </span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <span className="text-sm text-gray-200">{r.route}</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard(r.route)}
                      className="px-3 py-1 rounded bg-blue-700 hover:bg-blue-800 text-sm flex items-center gap-2"
                    >
                      <FaCopy /> Copy
                    </button>
                    <button
                      onClick={() => openSkyVector(r.route)}
                      className="px-3 py-1 rounded bg-green-700 hover:bg-green-800 text-sm flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> SkyVector
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ESNQ Section (same structure) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Arriving in ESNQ
          </h3>
          <div className="space-y-4">
            {mandatoryRoutes.ESNQ.map((r, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 border border-white/10 flex flex-col gap-2"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {r.description}
                </span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <span className="text-sm text-gray-200">{r.route}</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard(r.route)}
                      className="px-3 py-1 rounded bg-blue-700 hover:bg-blue-800 text-sm flex items-center gap-2"
                    >
                      <FaCopy /> Copy
                    </button>
                    <button
                      onClick={() => openSkyVector(r.route)}
                      className="px-3 py-1 rounded bg-green-700 hover:bg-green-800 text-sm flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> SkyVector
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Map Service Link */}
        <div className="mt-16 text-center">
          <a href="https://fss-map.lusep.fi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition">
            <FaMapMarkedAlt /> Open Event Map
          </a>
        </div>
      </div>
    </section>
  );
}


/*

          <div className="p-6 bg-white/5 border border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedAirport("");
                }}
                className="flex-1 p-2 rounded bg-black/40 border border-white/20"
              >
                <option value="">Select Departure Country</option>
                {Object.keys(routesData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <select
                value={selectedAirport}
                onChange={(e) => setSelectedAirport(e.target.value)}
                disabled={!selectedCountry}
                className="flex-1 p-2 rounded bg-black/40 border border-white/20"
              >
                <option value="">Select Airport</option>
                {selectedCountry &&
                  Object.keys(routesData[selectedCountry] || {}).map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
              </select>
            </div>

            {suggestedRoute && (
              <div className="p-4 rounded bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <span className="text-sm text-gray-200">{suggestedRoute}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(suggestedRoute)}
                    className="px-3 py-1 rounded bg-blue-700 hover:bg-blue-800 text-sm flex items-center gap-2"
                  >
                    <FaCopy /> Copy
                  </button>
                  <button
                    onClick={() => openSkyVector(suggestedRoute)}
                    className="px-3 py-1 rounded bg-green-700 hover:bg-green-800 text-sm flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> SkyVector
                  </button>
                </div>
              </div>
            )}
          </div>

*/