import React from "react";
import { FaBullhorn } from "react-icons/fa";
import handdrawn from "../assets/hand-drawn.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between pt-[90px] bg-[#eee5da] text-[#262424] font-[Georgia,_serif]">
      {/* ---------- Inline CSS for pulse animation ---------- */}
      <style>{`
        @keyframes pulse-square {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }
      `}</style>

      {/* ---------- LEFT SIDE CONTENT ---------- */}
      <div className="flex-1 text-center md:text-left mt-6 md:mt-0 px-5 md:px-10 lg:px-[5%] max-w-full">
        {/* Promo Badge */}
        <div className="flex items-center justify-center md:justify-start gap-3 bg-white/40 px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] mb-6 sm:mb-8 w-fit shadow-sm backdrop-blur-[2px] mx-auto md:mx-0">
          <div className="relative w-10 h-10 flex items-center justify-center bg-[#403c3c] rounded-md text-[#e5e5e5] text-[18px] overflow-visible">
            {/* Pulsing squares */}
            {[0, 0.4, 0.8].map((delay, index) => (
              <span
                key={index}
                className="absolute top-1/2 left-1/2 w-full h-full border-2 border-[#403c3c] bg-[#a29c9c42] rounded-md"
                style={{
                  transform: "translate(-50%, -50%)",
                  animation: "pulse-square 1.6s ease-out infinite",
                  animationDelay: `${delay}s`,
                }}
              ></span>
            ))}
            <FaBullhorn />
          </div>

          <span className="text-[10px] font-['Roboto','sans-serif'] text-[#403c3c] sm:text-base leading-tight">
            <strong>ENJOY UP TO 15%</strong> IN AFFILIATE COMMISSIONS
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[15px] font-[Georgia,_serif] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[40px] leading-snug sm:leading-[1.3] mb-4 sm:mb-6 font-bold text-[#a0430a]">
          Reliable Web Hosting <br className="hidden sm:block" /> & Domain Names Provider
        </h1>

        {/* Description */}
        <p className="text-[15px] font-['Roboto','sans-serif'] sm:text-[1rem] md:text-[1.1rem] leading-[1.6] text-[#7f7060] mb-8 sm:mb-9 px-0">
          We add wings to your website, featuring Website Builders, Free SSL
          Certificates, Softaculous, LiteSpeed Cache for WordPress, and much more.
        </p>

        {/* CTA Button */}
        <a
          href="#"
         className="inline-block border border-[#403c3c] bg-[#403c3c] text-white hover:bg-transparent hover:text-[#403c3c] font-medium text-[0.9rem] sm:text-[1rem] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-200">

          Check Features
        </a>
      </div>

      {/* ---------- RIGHT SIDE IMAGE ---------- */}
      <div className="flex-1 flex justify-center items-center w-full mt-10 md:mt-0 px-5 md:px-10 lg:px-[5%]">
        <img
          src={handdrawn}
          alt="Server illustration"
          className="w-full h-auto max-w-none block mx-auto md:max-w-[90%] lg:max-w-full"
        />
      </div>

    </section>
  );
};

export default Hero;
