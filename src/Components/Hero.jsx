import React from "react";
import { FaBullhorn } from "react-icons/fa";
import handdrawn from "../assets/hero2.svg";
import { Link } from "react-router-dom";
import { H1, H2, H3 } from "../Components/Headings";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-between
      bg-[#eee5da] text-[#262424] font-[Georgia,_serif] 
      pt-[90px] sm:pt-[80px] md:pt-35 pb-10 md:pb-15 lg:pt-30 lg:pb-10
      lg:min-h-[650px]"
    >
      {/* ---------- Inline CSS for animations ---------- */}
      <style>{`
        @keyframes pulse-square {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }

        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-slide-left {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ---------- LEFT SIDE CONTENT ---------- */}
      <div
        className="flex-1 text-center md:text-left mt-6 md:mt-0 px-5 md:px-10 md:py-5 lg:px-[5%] max-w-full"
        style={{
          animation: "fade-slide-up 1s ease-out forwards",
        }}
      >
        {/* Promo Badge */}
        <div className="flex items-center justify-center md:justify-start gap-3 bg-white/40 px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] mb-6 sm:mb-8 w-fit shadow-sm backdrop-blur-[2px] mx-auto md:mx-0 transition-all duration-500">
          <div className="relative w-10 h-10 flex items-center justify-center bg-[#403c3c] rounded-md text-[#e5e5e5] text-[18px] overflow-visible">
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

          <span className="text-[10px] md:text-[15px] font-['Roboto','sans-serif'] text-[#403c3c] sm:text-base leading-tight">
            <strong>ENJOY UP TO 15%</strong> IN AFFILIATE COMMISSIONS
          </span>
        </div>

        {/* Heading */}
        <H1 className="mb-4">{`Reliable Web Hosting \n & Domain Names Provider`}</H1>

        {/* Description */}
        <H3 className="mb-6">
          We add wings to your website, featuring Website Builders, Free SSL
          Certificates, Softaculous, LiteSpeed Cache for WordPress, and much more.
        </H3>

        {/* CTA Button */}
        <Link
          to="/hosting"
          className="inline-block border border-[#403c3c] bg-[#403c3c] text-white hover:bg-transparent hover:text-[#403c3c] font-medium text-[0.9rem] sm:text-[1rem] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Check Features
        </Link>
      </div>

      {/* ---------- RIGHT SIDE IMAGE (Fade in from left) ---------- */}
      <div
        className="flex-1 flex justify-center items-center w-full mt-10 md:mt-0 px-5 md:px-10 lg:px-[5%]"
        style={{
          animation: "fade-slide-left 1s ease-out forwards",
          animationDelay: "0.3s",
        }}
      >
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
