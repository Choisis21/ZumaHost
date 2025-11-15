import React, { useState, useEffect, useRef } from "react";
import launch from "../assets/launch.svg"
import Faqs from "../Components/Faqs"

export default function DomainRegistration() {
  /* ------------------------------------------------------------------------
     YOUR ORIGINAL LOGIC – UNTOUCHED
  ------------------------------------------------------------------------ */
  const [selected, setSelected] = useState(".com");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    ".com",
    ".net",
    ".org",
    ".info",
    ".ai",
    ".xyz",
    ".shop",
    ".blog",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ------------------------------------------------------------------------
     TLD DATA FOR POPULAR TOP LEVEL DOMAINS SECTION
  ------------------------------------------------------------------------ */
  const tldData = [
    {
      tld: ".com",
      tagline: "The King of domains",
      oldPrice: "$14.56",
      newPrice: "$12.37",
      color: "text-[#a0430a]",
    },
    {
      tld: ".org",
      tagline: "Connect with the .desi community",
      oldPrice: "$25.33",
      newPrice: "$19.54",
      color: "text-[#a0430a]",
    },
    {
      tld: ".ng",
      tagline: "Be the answer they want",
      oldPrice: "$27.43",
      newPrice: "$24.74",
      color: "text-[#a0430a]",
    },
    {
      tld: ".com.ng",
      tagline: "The King of domains",
      oldPrice: "$14.56",
      newPrice: "$12.37",
      color: "text-[#a0430a]",
    },
    {
      tld: ".desi",
      tagline: "Connect with the .desi community",
      oldPrice: "$25.33",
      newPrice: "$19.54",
      color: "text-[#a0430a]",
    },
    {
      tld: ".info",
      tagline: "Be the answer they want",
      oldPrice: "$27.43",
      newPrice: "$24.74",
      color: "text-[#a0430a]",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* **********************************************************************
          1) YOUR EXISTING HEADER & DOMAIN SEARCH UI — UNTOUCHED
      *********************************************************************** */}
      <section className="bg-[#eee5da] text-center px-4 sm:px-10 md:px-16 lg:px-24 py-24 sm:py-32 md:py-40">

        {/* ======= HEADER TEXT ======= */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl text-[#a0430a] font-[Georgia,_serif] sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Discover Your Ideal Domain Name
          </h1>
          <p className="text-sm text-[#7f7060] sm:text-base md:text-lg opacity-90 mb-10">
            Search for new domains and register your name before someone else does
          </p>
        </div>

        {/* ======= SEARCH BAR ======= */}
        <div className="flex flex-row justify-center items-stretch max-w-3xl mx-auto w-full bg-white rounded-md shadow-lg relative">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Now..."
            className="flex-grow px-4 py-3 text-gray-800 outline-none text-sm sm:text-base"
          />

          {/* Domain Dropdown */}
          <div
            ref={dropdownRef}
            className="relative w-[95px] sm:w-[120px] border-l border-gray-300"
          >
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-full px-4 py-3 text-gray-700 text-sm sm:text-base"
            >
              {selected}
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50">
                {options.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#a0430a] hover:text-white ${
                      selected === opt ? "bg-[#a0430a] text-white" : "text-gray-700"
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-[#403c3c] hover:bg-[#a0430a] px-3 sm:px-6 py-3 text-white text-xs sm:text-sm md:text-base transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Search
          </button>
        </div>

        {/* ======= TAG PRICES ======= */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
          {[
            { tld: ".com", price: "$4/Year" },
            { tld: ".net", price: "$5/Year" },
            { tld: ".org", price: "$8/Year" },
            { tld: ".ai", price: "$4.56/Year" },
            { tld: ".info", price: "$4.56/Year" },
            { tld: ".shop", price: "$4.56/Year" },
            { tld: ".xyz", price: "$3/Year" },
            { tld: ".blog", price: "$5/Year" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#403c3cbf] hover:bg-[#403c3c] text-white px-4 py-2 rounded-md text-sm sm:text-base transition cursor-pointer"
            >
              <span className="font-bold mr-1">{item.tld}</span>
              {item.price}
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm md:text-base opacity-70 mt-8">
          Free WHOIS privacy protection is included with every eligible domain registration.
        </p>
      </section>

      {/* **********************************************************************
          2) POPULAR TOP LEVEL DOMAINS — FIXED + ACCURATE RECREATION
      *********************************************************************** */}
      <section className="py-20 px-6 md:px-16 bg-[#fbf9f6] text-center">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#a0430a] font-[Georgia,_serif] mb-4">
          Popular Top Level Domains
        </h2>

        <p className="max-w-2xl mx-auto text-[#7f7060] font-['Roboto','sans-serif'] text-sm sm:text-base md:text-lg mb-14">
          Register your brand with the most popular domain extensions and grow your brand
          presence globally. Choose from a wide range of domain extensions.
        </p>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

          {tldData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition text-left"
            >
              {/* TLD Name */}
              <h3 className={`text-4xl font-bold mb-2 ${item.color}`}>
                {item.tld}
              </h3>

              {/* Tagline */}
              <p className="text-gray-600 mb-6">{item.tagline}</p>

              {/* Prices */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-400 line-through">{item.oldPrice}</span>
                <span className="text-2xl font-bold  text-[#403c3c]">{item.newPrice}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-[#a0430a] text-white rounded-md hover:bg-[#a0430acc] transition">
                  Register
                </button>
                <button className="px-5 py-2 border border-[#a0430acc] rounded-md hover:bg-[#a0430a0D] transition">
                  Transfer
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
        <div className="py-16 px-6 lg:px-20 bg-[#eee5da]">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#a0430a] font-[Georgia,_serif]">
            Get Your Business Online in 3 Simple Steps
          </h1>

          {/* Summary Text */}
        <p className="mb-6 text-[#403c3c] font-['Roboto','sans-serif'] leading-relaxed">
            Launch your business online effortlessly by picking a domain, choosing hosting, and going live in minutes!
        </p>

          {/* Steps */}
          <div className="space-y-4 text-[#403c3c] font-['Roboto','sans-serif']">
        <p className="flex items-start gap-2">
          <span className="text-[#a0430a] mt-1">
            {/* Tick SVG */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>
            <strong>Choose Your Domain:</strong> Pick the perfect domain name with extensions like .com, .in, .org, and more.
          </span>
        </p>

        <p className="flex items-start gap-2">
          <span className="text-[#a0430a] mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>
            <strong>Select an Hosting Plan:</strong> Pick an hosting plan from MilesWeb at competitive, reliable pricing.
          </span>
        </p>

        <p className="flex items-start gap-2">
          <span className="text-[#a0430a] mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>
            <strong>Launch Your Website:</strong> Set up instantly and get your account ready to take your website live in minutes.
          </span>
        </p>
      </div>
    </div>

        {/* Right Illustration */}
       <div className="w-full lg:w-1/2 flex justify-center">
         <img
          src={launch}
          alt="Website Launch"
          className="w-full max-w-md drop-shadow-md"/>
        </div>
    </div>
  </div>
      <Faqs />
</div>
  );
}
