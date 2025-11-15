import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PricingSection from "../Components/Pricingsection";
import Advantage from "../Components/Advantage";
import Security from "../Components/security";
import Testimonials from "../Components/Testimonials"
import about from "../assets/domain1.svg";
import { Link } from "react-router-dom";

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
      <div className="relative bg-[#eee5da] text-white">
        <div className="max-w-8xl mx-auto px-6 pt-40 pb-30 grid md:grid-cols-2 gap-10 items-center">
          {/* --- Left Text --- */}
          <div className="text-center md:text-left md:px-7">
            <h1 className="text-3xl md:text-3xl font-bold leading-snug text-[#a0430a] font-[Georgia,_serif] mb-4">
              All in One Hosting Solutions
            </h1>
            <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Choose from a wide range of website hosting products, offered with
              exceptional reliability, speed & support.
            </p> 
          </div>

          {/* --- Right: Hosting Summary Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 gap-6 w-full justify-items-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center mb-5 rounded-[10px] shadow-lg bg-white hover:scale-105 transition-transform duration-300 w-full max-w-xs"
              >
                {/* Card Header */}
                <div className="bg-[#7f7060] text-white w-full py-3 text-center font-semibold uppercase tracking-wide text-sm md:text-base rounded-t-[10px]">
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

      <PricingSection />
      <Advantage />
       <div className="py-16 px-6 bg-white lg:px-20 flex flex-col md:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img src={about} alt="Illustration" className="w-full max-w-md" />
              </div>
      
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#a0430a] font-[Georgia,_serif]">
                  Choose Your Domain with Ease
                </h2>
                <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
                  Your domain name is the foundation of your online identity, and finding the right one shouldn’t be complicated. 
                  That’s why Zuma Host offers an easy, intuitive search experience.
                </p>
                <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
                  With hundreds of domain options available, you can find the one that perfectly represents your brand, project, or business vision.
                </p>
                <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
                  Take the next step to secure the domain that brings your idea to life.
                </p>
                <Link to="/domain-registration" className="px-5 py-2 bg-[#ece4d9] text-[#403c3c] rounded-md transition-colors hover:bg-[#a0430a] hover:text-white font-['Roboto','sans-serif']">
                   Get Started
                </Link>

              </div>
            </div>
      <Security />

      {/* ========================== COMPARE HOSTING PACKAGES ========================== */}
      <section className="py-16 bg-white text-gray-800 px-5 md:px-5 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#a0430a] font-[Georgia,_serif]">
          Compare Hosting Packages
        </h2>

        {/* Scrollable container for mobile/tablet */}
                {/* Mobile scroll hint */}
        <p className="text-center text-gray-500 py-5 text-sm mt-3 block sm:hidden">
          👉 Swipe left or right to view all plans
        </p>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-[800px] w-full border-collapse text-center">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left font-semibold text-[#a0430a] font-[Georgia,_serif] border border-gray-300 bg-white">
                    Features
                  </th>
                  {comparePlans.map((plan) => (
                    <th
                      key={plan.name}
                      className="p-4 border border-gray-300 font-bold text-[#a0430a] font-[Georgia,_serif] bg-white whitespace-nowrap"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                
                {[
                  ["NVMe SSD Storage", "storage"],
                  ["Hosted Domains", "hostedDomains"],
                  ["Premium Bandwidth", "bandwidth"],
                  ["Sub Domains", "subDomains"],
                  ["Operating System", "os"],
                ].map(([label, key]) => (
                  <tr key={label} className="even:bg-gray-50">
                    <td className="p-4 text-left text-[#403c3c] font-[Georgia,_serif] font-medium border border-gray-300 whitespace-nowrap">
                      {label}
                    </td>
                    {comparePlans.map((plan) => (
                      <td key={plan.name} className="p-4 border text-[#403c3c] font-['Roboto','sans-serif'] border-gray-300 whitespace-nowrap">
                        {plan[key]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Divider heading */}
                <tr className="bg-[#f4f4f4]">
                  <td
                    colSpan={comparePlans.length + 1}
                    className="p-3 font-semibold text-[#a0430a] font-[Georgia,_serif] text-center uppercase"
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
                    <td className="p-4 text-left text-[#403c3c] font-[Georgia,_serif] font-medium border border-gray-300 whitespace-nowrap">
                      {label}
                    </td>
                    {comparePlans.map((plan) => (
                      <td key={plan.name} className="p-4 border text-[#403c3c] font-['Roboto','sans-serif'] border-gray-300 whitespace-nowrap">
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
                  <td className="p-4 text-left font-bold text-[#a0430a] font-[Georgia,_serif] border border-gray-300 whitespace-nowrap">
                    Compare Web Hosting <br />
                    <span className="text-sm font-medium text-[#a0430a] font-[Georgia,_serif]">
                      Choose your package
                    </span>
                  </td>
                  {comparePlans.map((plan) => (
                    <td key={plan.name} className="p-4 border border-gray-300 whitespace-nowrap">
                      <button
                        className={`py-2 px-6 w-full rounded-md font-semibold border transition 
                          ${
                            plan.name === "LITE"
                              ? "border-yellow-400 font-['Roboto','sans-serif'] text-yellow-600 hover:bg-yellow-50"
                              : "border-blue-800 font-['Roboto','sans-serif'] text-blue-800 hover:bg-blue-50"
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

      </section>
      <Testimonials />
    </section>
  );
};

export default HostingSection;
