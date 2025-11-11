import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PricingSection from "../Components/Pricingsection";
import Advantage from "../Components/Advantage";

const HostingSection = () => {
  const plans = [
    { title: "Silver Plan", price: "$10", subtitle: "Starting From" },
    { title: "Gold Plan", price: "$20", subtitle: "Starting From" },
    { title: "Diamond Plan", price: "$115", subtitle: "Starting From" },
  ];

  const comparePlans = [
    {
      name: "STARTER",
      storage: "1 GB",
      hostedDomains: "1",
      bandwidth: "5GB",
      subDomains: "5",
      os: "Linux",
      ssl: true,
      malware: true,
      installer: true,
      location: "Charlotte, USA",
      guarantee: "30 Days",
    },
    {
      name: "LITE",
      storage: "5 GB",
      hostedDomains: "1",
      bandwidth: "10GB",
      subDomains: "10",
      os: "Linux",
      ssl: true,
      malware: true,
      installer: true,
      location: "Charlotte, USA",
      guarantee: "30 Days",
    },
    {
      name: "ELITE",
      storage: "10 GB",
      hostedDomains: "2",
      bandwidth: "50GB",
      subDomains: "Unlimited",
      os: "Linux",
      ssl: true,
      malware: true,
      installer: true,
      location: "Charlotte, USA",
      guarantee: "30 Days",
    },
  ];

  return (
    <section className="font-sans">
      {/* ========================== HERO SECTION ========================== */}
      <div className="relative bg-[#f9f6f2] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* --- Left Text --- */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#a0430a] font-[Georgia,_serif] mb-4">
              All in One Hosting Solutions
            </h1>
            <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Choose from a wide range of website hosting products, offered with
              exceptional reliability, speed & support.
            </p>
          </div>

          {/* --- Right: Hosting Summary Cards --- */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center rounded-[5px] shadow-lg bg-white hover:scale-105 transition-transform duration-300 w-full max-w-xs"
              >
                {/* Card Header */}
                <div className="bg-[#7f7060] text-white w-full py-3 text-center font-semibold uppercase tracking-wide text-sm md:text-base rounded-t-[5px]">
                  {plan.title}
                </div>

                {/* Card Body */}
                <div className="bg-[#f9f6f2] w-full flex flex-col justify-center items-center text-center py-[25px] px-[25px] rounded-b-[5px]">
                  <p className="text-[#a0430a] font-[Georgia,_serif] text-sm mb-1">
                    {plan.subtitle}
                  </p>
                  <div className="w-[60px] h-[1px] bg-[#a0430a] mx-auto mb-5 rounded"></div>
                  <p className="text-4xl text-[#403c3c] font-['Roboto','sans-serif'] font-bold mb-2">
                    {plan.price}
                  </p>
                  <p className="text-sm text-[#403c3c]/50">Monthly</p>
                </div>

                {/* Floating Button */}
                <button className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 bg-[#a0430a] hover:bg-[#a0430a]/80 text-white py-2 px-6 rounded-md font-semibold text-sm flex items-center justify-center gap-2 shadow-lg whitespace-nowrap z-10">
                  View Plans <FaArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================== PRICING SECTION ========================== */}
      <PricingSection />

      {/* ========================== ADVANTAGE SECTION ========================== */}
      <Advantage />

      {/* ========================== WEBSITE FIREWALL SECTION ========================== */}
      <div className="bg-[#f9f6f2] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* --- Text Content --- */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#a0430a] font-[Georgia,_serif]">
              Website Application Firewall (WAF)
            </h2>
            <p className="text-lg text-[#403c3c] font-['Roboto','sans-serif'] leading-relaxed">
              Protecting your website from attacks & hacks is our utmost
              priority. Our Website Application Firewall (WAF) prevents all kinds
              of attacks and protects your web application from exploits.
            </p>
          </div>

          {/* --- Icon Section --- */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-[#a0430a] p-6 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                className="w-24 h-24"
              >
                <path d="M12 1C7 3 2 5 2 10c0 7.1 4.2 11.8 9.3 13.8.5.2 1 .2 1.4 0C17.8 21.8 22 17.1 22 10c0-5-5-7-10-9zm.5 20.3C8.4 19.2 4 15.2 4 10c0-3.5 3.6-5.2 8-7 4.4 1.8 8 3.5 8 7 0 5.2-4.4 9.2-7.5 11.3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 7a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ========================== COMPARE HOSTING PACKAGES ========================== */}
      <section className="py-16 bg-white text-gray-800 px-5 md:px-5 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#a0430a]">
          Compare Hosting Packages
        </h2>

        {/* Scrollable container for mobile/tablet */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-[800px] w-full border-collapse text-center">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-700 border border-gray-300 bg-white">
                    Hosting Plans
                  </th>
                  {comparePlans.map((plan) => (
                    <th
                      key={plan.name}
                      className="p-4 border border-gray-300 font-bold text-[#0f265c] bg-white whitespace-nowrap"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* Section heading */}
                <tr className="bg-[#f4f4f4]">
                  <td
                    colSpan={comparePlans.length + 1}
                    className="p-3 font-semibold text-gray-700 text-center uppercase"
                  >
                    Hosting Specifications
                  </td>
                </tr>

                {[
                  ["NVMe SSD Storage", "storage"],
                  ["Hosted Domains", "hostedDomains"],
                  ["Premium Bandwidth", "bandwidth"],
                  ["Sub Domains", "subDomains"],
                  ["Operating System", "os"],
                ].map(([label, key]) => (
                  <tr key={label} className="even:bg-gray-50">
                    <td className="p-4 text-left font-medium border border-gray-300 whitespace-nowrap">
                      {label}
                    </td>
                    {comparePlans.map((plan) => (
                      <td key={plan.name} className="p-4 border border-gray-300 whitespace-nowrap">
                        {plan[key]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Divider heading */}
                <tr className="bg-[#f4f4f4]">
                  <td
                    colSpan={comparePlans.length + 1}
                    className="p-3 font-semibold text-gray-700 text-center uppercase"
                  >
                    Package Features
                  </td>
                </tr>

                {[
                  ["Free SSL Certificate", "ssl"],
                  ["cPGuard Malware Protection", "malware"],
                  ["One Click App Installer", "installer"],
                  ["Server Location", "location"],
                  ["Money Back Guarantee", "guarantee"],
                ].map(([label, key]) => (
                  <tr key={label} className="even:bg-gray-50">
                    <td className="p-4 text-left font-medium border border-gray-300 whitespace-nowrap">
                      {label}
                    </td>
                    {comparePlans.map((plan) => (
                      <td key={plan.name} className="p-4 border border-gray-300 whitespace-nowrap">
                        {typeof plan[key] === "boolean"
                          ? plan[key]
                            ? "✅"
                            : "❌"
                          : plan[key]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Final CTA Row */}
                <tr className="bg-gray-50">
                  <td className="p-4 text-left font-medium border border-gray-300 whitespace-nowrap">
                    Compare Web Hosting <br />
                    <span className="text-sm text-gray-500">
                      Choose your package
                    </span>
                  </td>
                  {comparePlans.map((plan) => (
                    <td key={plan.name} className="p-4 border border-gray-300 whitespace-nowrap">
                      <button
                        className={`py-2 px-6 w-full rounded-md font-semibold border transition 
                          ${
                            plan.name === "LITE"
                              ? "border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                              : "border-blue-800 text-blue-800 hover:bg-blue-50"
                          }`}
                      >
                        Get Started
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-gray-500 text-sm mt-3 block sm:hidden">
          👉 Swipe left or right to view all plans
        </p>
      </section>
    </section>
  );
};

export default HostingSection;
