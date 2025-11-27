import React, { useRef, useState, useEffect } from "react";
import worldMap from "../assets/map-dark.svg";
import { H1, H3 } from "../Components/Headings";
import { motion } from "framer-motion";

// --- 📌 Responsive Coordinates --- //
const desktopLocations = [
  { name: "Canada", x: 11, y: 20 },
  { name: "United States", x: 14, y: 35 },
  { name: "Africa", x: 46, y: 50 },
  { name: "Europe", x: 46.5, y: 27 },
];

const tabletLocations = [
  { name: "Canada", x: 9, y: 15 },
  { name: "United States", x: 11, y: 30 },
  { name: "Africa", x: 44, y: 45 },
  { name: "Europe", x: 46, y: 22 },
];

const mobileLocations = [
  { name: "Canada", x: 6, y: 8 },
  { name: "United States", x: 6, y: 22 },
  { name: "Africa", x: 42, y: 37 },
  { name: "Europe", x: 43, y: 15.5 },
];

export default function DataCenters() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [device, setDevice] = useState("desktop");
  const [activePin, setActivePin] = useState(null);

  const isMobile = device === "mobile";

  // Detect screen size (mobile / tablet / desktop)
  useEffect(() => {
    const updateDevice = () => {
      if (window.innerWidth < 640) setDevice("mobile");
      else if (window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  // Pick correct locations
  const locations =
    device === "mobile"
      ? mobileLocations
      : device === "tablet"
        ? tabletLocations
        : desktopLocations;

  // Track map size for accurate pin placement
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close tooltip when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const close = () => setActivePin(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [isMobile]);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const pinVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <section className="w-full bg-[#fbf9f6] py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <H1>Our Data Centers Location</H1>
        <H3>
          We have carefully positioned our infrastructure closer to you for fast
          connectivity to our servers.
        </H3>
      </motion.div>

      {/* Map Container */}
      <motion.div
        className="relative w-full max-w-6xl flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={mapVariants}
      >
        {/* Map Image */}
        <img
          ref={containerRef}
          src={worldMap}
          alt="World Map"
          className="w-full h-auto opacity-[0.5] object-contain"
        />

        {/* Pins */}
        {size.width > 0 &&
          locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center group"
              style={{
                top: `${(loc.y / 100) * size.height}px`,
                left: `${(loc.x / 100) * size.width}px`,
                transform: "translate(-50%, -50%)",
              }}
              variants={pinVariants}
              custom={idx}
              initial="hidden"
              animate="visible"
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setActivePin(activePin === idx ? null : idx);
                }
              }}
            >
              {/* Tooltip */}
              <div
                className={`bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 
                  rounded-md mb-1 shadow-md whitespace-nowrap transition-opacity
                  ${isMobile
                    ? activePin === idx
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                  }
                `}
              >
                {loc.name}
              </div>

              {/* Ping Marker */}
              <div className="relative flex items-center justify-center">
                {/* Inner dot */}
                <div
                  className="
                    bg-[#a0430a] rounded-full shadow-md z-10
                    w-2 h-2
                    sm:w-3 sm:h-3
                    md:w-4 md:h-4
                  "
                ></div>

                {/* Ripple animations */}
                <div
                  className="
                    absolute rounded-full bg-[#a0430a] opacity-30 animate-ping
                    w-4 h-4
                    sm:w-6 sm:h-6
                    md:w-7 md:h-7
                  "
                ></div>

                <div
                  className="
                    absolute rounded-full bg-[#a0430a] opacity-20 animate-ping delay-150
                    w-6 h-6
                    sm:w-8 sm:h-8
                    md:w-9 md:h-9
                  "
                ></div>

                <div
                  className="
                    absolute rounded-full bg-[#a0430a] opacity-10 animate-ping delay-300
                    w-8 h-8
                    sm:w-10 sm:h-10
                    md:w-11 md:h-11
                  "
                ></div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}
