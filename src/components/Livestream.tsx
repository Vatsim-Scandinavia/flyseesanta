import { motion } from 'framer-motion';
import { FaTwitch, FaYoutube } from 'react-icons/fa';

export function Livestream() {
  return (
    <section
      id="livestream"
      className="py-20 min-h-screen bg-gradient-to-br from-pink-950 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-blue-400"
        >
          L i v e s t r e a m
        </motion.h2>

        {/* Tune in to our Christmas livestream from Finland! */}
        <p className="md:text-lg text-gray-300 mb-10">
          Watch our event livestreams from Finland!
        </p>

        {/* Grid for current + previous year streams */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Twitch Embed
          <div>
            <div className="relative aspect-video overflow-hidden shadow-xl border border-white/10 max-w-2xl mx-auto">
              <iframe
                src="https://player.twitch.tv/?channel=vatsimscandinavia&parent=fss.vatsim-scandinavia.org"
                height="100%"
                width="100%"
                allowFullScreen
                title="VATSIM Scandinavia Twitch"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.twitch.tv/vatsimscandinavia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded bg-purple-700 hover:bg-purple-800 transition shadow-lg"
              >
                <FaTwitch className="text-xl" />
                <span className="font-semibold">Watch on Twitch</span>
              </a>
            </div>
          </div>
          */}

          <div>
            <div className="relative aspect-video overflow-hidden shadow-xl border border-white/10 max-w-2xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/cGuu0QfU5rQ?si=sRXG0FenbrkFrihW"
                height="100%"
                width="100%"
                allowFullScreen
                title="Previous Year Livestream"
                className="w-full h-full"
              ></iframe>
            </div>
            {/* YouTube Button */}
            <div className="flex flex-col items-center justify-center mt-6">
              <a
                href="https://youtu.be/cGuu0QfU5rQ?si=1hFpvxjkdnYqGkeT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded bg-red-600 hover:bg-red-700 transition shadow-lg"
              >
                <FaYoutube className="text-xl" />
                <span className="font-semibold">2025 livestream</span>
              </a>
            </div>
          </div>

          {/* YouTube Embed */}
          <div>
            <div className="relative aspect-video overflow-hidden shadow-xl border border-white/10 max-w-2xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/vlz7ryQzt_0"
                height="100%"
                width="100%"
                allowFullScreen
                title="Previous Year Livestream"
                className="w-full h-full"
              ></iframe>
            </div>
            {/* YouTube Button */}
            <div className="flex flex-col items-center justify-center mt-6">
              <a
                href="https://www.youtube.com/watch?v=vlz7ryQzt_0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded bg-red-600 hover:bg-red-700 transition shadow-lg"
              >
                <FaYoutube className="text-xl" />
                <span className="font-semibold">2024 livestream</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
