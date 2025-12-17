import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

// Function to convert mps to knots
const convertMpsToKnots = (mps: number) => (mps * 1.94384).toFixed(0) + ' kts';

// Fetch weather data
const fetchWeather = async ({
  fmisid,
  place,
}: {
  fmisid?: number;
  place?: string;
}) => {
  let url = '';

  if (fmisid) {
    url = `https://opendata.fmi.fi/timeseries?fmisid=${fmisid}&param=smartsymbol,temperature,winddirection,WindSpeedMS&lang=en`;
  } else if (place) {
    url = `https://opendata.fmi.fi/timeseries?place=${place}&param=smartsymbol,temperature,winddirection,WindSpeedMS&lang=en`;
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    const lines = data.trim().split('\n');
    const values = lines[0].trim().split(/\s+/).map(Number);

    return {
      symbol: values[0], // Weather symbol
      temperature: values[1], // Temperature °C
      windDirection: values[2], // Wind direction
      windSpeed: convertMpsToKnots(values[3]), // Wind speed converted to knots
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const projects = [
  {
    title: 'Rovaniemi',
    image: 'images/efro-title.jpg',
    credit: 'Alexander - stock.adobe.com',
    description:
      'Welcome to the official airport of Santa Claus! Experience the magic of flying into the heart of the Arctic Circle, where holiday spirit and snowy landscapes await. Land at Rovaniemi and bring your Christmas flight sim adventure to life!',
    details: ['EFRO', 'RVN', 'Finland'],
    charts: 'https://chartfox.org/EFRO',
    weatherKey: 'rovaniemi',
  },
  {
    title: 'Tromsø Langnes',
    image: 'images/entc-title.jpg',
    credit: 'johnkruger1 - stock.adobe.com',
    description:
      'Touch down in Tromsø, the gateway to the Arctic! Nestled among dramatic fjords and mountains, this airport delivers stunning views and the chance to catch the aurora borealis as you fly in. The ultimate winter flying challenge!',
    details: ['ENTC', 'TOS', 'Norway'],
    charts: 'https://chartfox.org/ENTC',
    weatherKey: 'tromso',
  },
  {
    title: 'Kiruna',
    image: 'images/esnq-title.jpg',
    credit: 'Henk Vrieselaar - stock.adobe.com',
    description:
      'As Sweden’s northernmost airport, Kiruna offers a gateway to the vast wilderness and the stunning Icehotel. Fly above the scenic snow-covered mountains and explore the adventure capital of Swedish Lapland, where reindeer and nature are right at your feet!',
    details: ['ESNQ', 'KRN', 'Sweden'],
    charts: 'https://chartfox.org/ESNQ',
    weatherKey: 'kiruna',
  },
];

export default function Airports() {
  const [weather, setWeather] = useState<any>({
    rovaniemi: null,
    tromso: null,
    kiruna: null,
  });
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const bookingOpens = new Date(Date.UTC(2025, 10, 21, 12, 0, 0));

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = bookingOpens.getTime() - now;

      if (diff <= 0) {
        setTimeLeft(null); // Expired → show button
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchAllWeather = async () => {
      const rovaniemi = await fetchWeather({ fmisid: 137190 });
      const tromso = await fetchWeather({ place: 'Tromsø' });
      const kiruna = await fetchWeather({ place: 'Kiruna' });
      setWeather({ rovaniemi, tromso, kiruna });
    };

    fetchAllWeather();
    const intervalId = setInterval(fetchAllWeather, 600000);
    return () => clearInterval(intervalId);
  }, []);

  const renderWeather = (w: any) =>
    w ? (
      <div className="flex items-center gap-3 text-sm text-gray-300 mt-2">
        <img
          src={`/images/fmi/${w.symbol}.svg`}
          alt="Weather"
          className="h-6 w-6"
        />
        <span>{w.temperature} °C</span>
        <div className="flex items-center gap-1">
          <img
            src="/images/fmi/arrow.svg"
            alt="Wind"
            className="h-4 w-4"
            style={{ transform: `rotate(${w.windDirection + 90}deg)` }}
          />
          <span>{w.windSpeed}</span>
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-500 mt-2">Loading weather...</p>
    );

  return (
    <section
      id="airports"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blue-400">
          A i r p o r t s
        </h2>

        <p className=" text-gray-300 mb-14">
          Fly and See Santa, the largest annual Christmas event in VATSIM skies,
          takes place at three airports in the northernmost reaches of Europe.
          Experience the magic of snow-covered landscapes and icy runways as you
          arrive at Rovaniemi, Tromsø, and Kiruna. Throughout December, the
          airspace buzzes with flights full of passengers eager to visit Santa's
          winter wonderland. We hope you’ll join us for this unforgettable
          event!
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition flex flex-col"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <p className="text-xs text-gray-600 text-center mt-1">
                  {project.credit}
                </p>
              </div>
              <div className="p-6 pt-4 flex flex-col gap-4 flex-grow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded text-xs font-medium bg-white/5 border border-white/20 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{project.description}</p>

                {/* Weather */}
                {renderWeather(weather[project.weatherKey])}

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {project.charts && (
                    <a
                      href={project.charts}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-blue-800 border border-white/10 text-xs font-semibold hover:bg-blue-900 transition"
                    >
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Charts
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 mt-16 text-center text-blue-400">
          S l o t&ensp; B o o k i n g
        </h2>
        <p className="md:text-lg text-gray-300 mb-8 text-center">
          Book an arrival slot into any of the event airports, departing from
          anywhere on the planet.
        </p>

        {timeLeft ? (
          <>
            <h3 className="text-2xl font-semibold text-center text-blue-400 mb-4">
              Bookings will open in
            </h3>

            <div className="flex justify-center">
              <div className="flex gap-4 text-center bg-white/5 backdrop-blur-md px-8 py-4 border border-white/10">
                <div>
                  <p className="text-3xl font-bold text-red-600">
                    {formatTime(timeLeft.days)}
                  </p>
                  <p className="text-xs uppercase text-gray-400">Days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">
                    {formatTime(timeLeft.hours)}
                  </p>
                  <p className="text-xs uppercase text-gray-400">Hours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">
                    {formatTime(timeLeft.minutes)}
                  </p>
                  <p className="text-xs uppercase text-gray-400">Minutes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">
                    {formatTime(timeLeft.seconds)}
                  </p>
                  <p className="text-xs uppercase text-gray-400">Seconds</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <a
                href="https://booking.vatsim-scandinavia.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-800 font-semibold shadow-lg hover:bg-blue-900 transition"
              >
                <FaExternalLinkAlt /> Book your Slot
              </a>
            </div>
          </>
        )}

        <p className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
            <FaExclamationTriangle className="h-4 w-4" />
            Pilots with no slots may expect indefinite delays
          </span>
        </p>
        */}
      </div>
    </section>
  );
}
