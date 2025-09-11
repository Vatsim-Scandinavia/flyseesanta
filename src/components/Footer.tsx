import { useState } from "react";
import {
  FaGlobe,
  FaMapMarked,
  FaDiscord,
  FaTwitch,
  FaComment,
} from "react-icons/fa";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string>("");

  const handleMouseEnter = (text: string) => setHoveredIcon(text);
  const handleMouseLeave = () => setHoveredIcon("");

  const iconClasses =
    "text-3xl md:text-4xl transition-transform transform hover:scale-110 hover:text-blue-400";

  return (
    <footer
      id="footer"
      className="py-20 bg-gradient-to-br from-blue-900 to-gray-950 text-white text-center relative overflow-hidden"
    >
      <h2 className="text-xl md:text-xl font-semibold mb-4 text-blue-400 relative z-10">
        Happy Holidays, wishes from
      </h2>

      {/* Logo */}
      <div className="mb-10 relative z-10">
        <img
          src="images/logo.svg"
          alt="VATSIM Scandinavia"
          className="h-20 mx-auto drop-shadow-lg"
        />
      </div>

      {/* Quicklink Icons */}
      <div className="flex justify-center gap-8 mb-6 relative z-10">
        <a
          href="https://vatsim-scandinavia.org/"
          target="_blank"
          aria-label="Website"
          onMouseEnter={() => handleMouseEnter("Website")}
          onMouseLeave={handleMouseLeave}
          className={iconClasses}
        >
          <FaGlobe />
        </a>

        <a
          href="https://fss-map.lusep.fi/"
          target="_blank"
          aria-label="FSS 2025 Map"
          onMouseEnter={() => handleMouseEnter("Fly and See Santa Map")}
          onMouseLeave={handleMouseLeave}
          className={iconClasses}
        >
          <FaMapMarked />
        </a>

        <a
          href="http://discord.vatsim-scandinavia.org/"
          target="_blank"
          aria-label="Discord"
          onMouseEnter={() => handleMouseEnter("Discord")}
          onMouseLeave={handleMouseLeave}
          className={iconClasses}
        >
          <FaDiscord />
        </a>

        <a
          href="https://www.twitch.tv/vatsimscandinavia"
          target="_blank"
          aria-label="Twitch"
          onMouseEnter={() => handleMouseEnter("Twitch")}
          onMouseLeave={handleMouseLeave}
          className={iconClasses}
        >
          <FaTwitch />
        </a>

        <a
          href="https://cc.vatsim-scandinavia.org/feedback"
          target="_blank"
          aria-label="Feedback"
          onMouseEnter={() => handleMouseEnter("Leave us Feedback")}
          onMouseLeave={handleMouseLeave}
          className={iconClasses}
        >
          <FaComment />
        </a>
      </div>

      {/* Hover Info Text */}
      <p className="text-sm text-gray-400 mb-6 h-5 relative z-10">
        {hoveredIcon}
      </p>
    </footer>
  );
}
