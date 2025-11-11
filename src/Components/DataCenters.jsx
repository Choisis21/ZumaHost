import React, { useRef, useState, useEffect } from "react";
import worldMap from "../assets/map-dark.svg";

const locations = [
  { name: "Canada", x: 15.5, y: 25 },
  { name: "United States", x: 18, y: 35 },
  { name: "Africa", x: 48, y: 52 },
  { name: "Europe", x: 52, y: 30 },
];

export default function DataCenters() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Observe the image container size to keep pins aligned
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize(); // run once initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#fbf9f6] py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* --- Section Heading --- */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#a0430a] font-[Georgia,_serif]">
          Our Data Centers Location
        </h2>
        <p className="mt-4 text-lg text-[#7f7060] font-['Roboto','sans-serif']">
          We have carefully positioned our infrastructure closer to you for fast connectivity to our servers.
        </p>
      </div>

      {/* --- Map Container --- */}
      <div className="relative w-full max-w-6xl flex justify-center">
        {/* Map Image */}
        <img
          ref={containerRef}
          src={worldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />

        {/* --- Pins Overlay --- */}
        {size.width > 0 &&
          locations.map((loc, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center group"
              style={{
                top: `${(loc.y / 100) * size.height}px`,
                left: `${(loc.x / 100) * size.width}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Tooltip */}
              <div className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md mb-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {loc.name}
              </div>

              {/* Square Pin + Pulse */}
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#a0430a] rounded-full shadow-md z-10"></div>
                <div className="absolute w-6 h-6 sm:w-7 sm:h-7 bg-[#a0430a] opacity-30 rounded-full animate-ping"></div>
                <div className="absolute w-8 h-8 sm:w-9 sm:h-9 bg-[#a0430a] opacity-20 rounded-full animate-ping delay-150"></div>
                <div className="absolute w-10 h-10 sm:w-11 sm:h-11 bg-[#a0430a] opacity-10 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
