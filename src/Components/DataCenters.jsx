import React, { useRef, useState, useEffect } from "react";
import worldMap from "../assets/map-dark.svg";
import { H1, H3 } from "../Components/Headings";
import { motion } from "framer-motion";

const locations = [
  { name: "Canada", x: 15.5, y: 25 },
  { name: "United States", x: 18, y: 35 },
  { name: "Africa", x: 48, y: 52 },
  { name: "Europe", x: 52, y: 30 },
];

export default function DataCenters() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
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
          We have carefully positioned our infrastructure closer to you for fast connectivity
          to our servers.
        </H3>
      </motion.div>

      {/* Map container */}
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
            >
              {/* Tooltip */}
              <div className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md mb-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {loc.name}
              </div>

              {/* Ping marker */}
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#a0430a] rounded-full shadow-md z-10"></div>
                
                <div className="absolute w-6 h-6 sm:w-7 sm:h-7 bg-[#a0430a] opacity-30 rounded-full animate-ping"></div>
                <div className="absolute w-8 h-8 sm:w-9 sm:h-9 bg-[#a0430a] opacity-20 rounded-full animate-ping delay-150"></div>
                <div className="absolute w-10 h-10 sm:w-11 sm:h-11 bg-[#a0430a] opacity-10 rounded-full animate-ping delay-300"></div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}
