import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import launch from "../assets/launch.svg";
import Faqs from "../Components/Faqs";
import Transfer from "../Components/TransferSteps";
import { H1, H3 } from "../Components/Headings";


// ====== FAQ DATA ======
const DomainregFAQs = [
  {
    question: "What is a Domain Name?",
    answer:
      "Think of a domain name as your website’s digital address, yourbusiness.com.ng. It’s how visitors reach your site and helps build your brand identity. Starting a business, blog, or portfolio? Secure your domain with a reliable provider in Nigeria, such as Zuma Host, to get online quickly.",
  },
  {
    question:
      "How long does a domain registration last?",
    answer:
      "Typically, domains are registered for 1 year, but most registrars let you renew them up to a total of 10 years.",
  },
  {
    question: "Can I transfer my existing domain to your platform?",
    answer:
      "Absolutely. We support easy, fast domain transfers with no downtime. Our support team can guide you through unlocking your domain and providing the EPP/Auth code.",
  },
  {
    question: "How long does domain registration take?",
    answer:
      "Domain registration is usually instant. Once you complete your order, the domain becomes active and ready to use within minutes.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Absolutely! All hosting plans support one-click upgrades without downtime. You can scale to more storage, bandwidth, or speed anytime.",
  },
  {
    question: "Do you offer migration support?",
    answer:
      "Yes, our team offers free website migration with all plans. We'll handle everything to ensure your site transitions smoothly without downtime.",
  },
];

/* ------------------------------------------------------------------------
   DOMAIN PRICING DATA + SECTION
------------------------------------------------------------------------ */
const domainPricing = [
  { tld: ".com", register: "$23.36", renew: "$24.76", transfer: "$23.36" },
  { tld: ".info", register: "$48.62", renew: "$58.92", transfer: "$48.62" },
  { tld: ".org", register: "$26.32", renew: "$32.40", transfer: "$26.32" },
  { tld: ".net", register: "$26.08", renew: "$32.62", transfer: "$26.08" },
  { tld: ".in", register: "$13.68", renew: "$14.74", transfer: "$13.68" },
  { tld: ".host", register: "$180.78", renew: "$215.16", transfer: "$180.78" },
  { tld: ".asia", register: "$25.70", renew: "$31.78", transfer: "$25.70" },
];

const DomainPricingSection = () => (
  <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">
    {/* HEADER */}
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <H1>Most Popular Domains Price List</H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <H3>
          It all starts with a perfect domain name. Choose from a wide range of 
          domain extensions. Transfer your domain to GoSSDHosting for great offers.
        </H3>
      </motion.div>
    </motion.div>

    <p className="text-center text-gray-500 py-5 text-sm mt-3 block sm:hidden">
          👉 Swipe left or right to view all prices
        </p>

    {/* TABLE */}
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <motion.table
        className="w-full text-left min-w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* HEADER */}
        <thead>
          <tr className="bg-[#a0430a] text-white">
            <th className="py-4 px-4 font-semibold border-r border-gray-300">Extensions (TLD)</th>
            <th className="py-4 px-4 font-semibold border-r border-gray-300">Register</th>
            <th className="py-4 px-4 font-semibold border-r border-gray-300">Renew</th>
            <th className="py-4 px-4 font-semibold">Transfer</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {domainPricing.map((row, index) => (
            <motion.tr
              key={index}
              className="border-b border-gray-200 hover:bg-[#fbf9f6] transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <td className="py-4 px-4 font-medium text-gray-800 border-r border-gray-200">{row.tld}</td>
              <td className="py-4 px-4 text-gray-700 border-r border-gray-200">{row.register}</td>
              <td className="py-4 px-4 text-gray-700 border-r border-gray-200">{row.renew}</td>
              <td className="py-4 px-4 text-gray-700">{row.transfer}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  </section>
);

/* ------------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------------ */
export default function DomainRegistration() {
  const [selected, setSelected] = useState(".com");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [".com", ".net", ".org", ".info", ".ai", ".xyz", ".shop", ".blog"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tldData = [
    { tld: ".com", tagline: "The King of domains", oldPrice: "$14.56", newPrice: "$12.37", color: "text-[#a0430a]" },
    { tld: ".org", tagline: "Connect with the .desi community", oldPrice: "$25.33", newPrice: "$19.54", color: "text-[#a0430a]" },
    { tld: ".ng", tagline: "Be the answer they want", oldPrice: "$27.43", newPrice: "$24.74", color: "text-[#a0430a]" },
    { tld: ".com.ng", tagline: "The King of domains", oldPrice: "$14.56", newPrice: "$12.37", color: "text-[#a0430a]" },
    { tld: ".desi", tagline: "Connect with the .desi community", oldPrice: "$25.33", newPrice: "$19.54", color: "text-[#a0430a]" },
    { tld: ".info", tagline: "Be the answer they want", oldPrice: "$27.43", newPrice: "$24.74", color: "text-[#a0430a]" },
  ];

  return (
    <div className="w-full bg-white">

      {/* HEADER + SEARCH */}
      <section className="bg-[#eee5da] text-center px-4 sm:px-10 md:px-16 lg:px-24 py-24 sm:py-32 md:py-40">

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H1>Discover Your Ideal Domain Name</H1>
          </motion.div>

          <motion.p
            className="text-sm text-[#7f7060] sm:text-base md:text-lg opacity-90 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Search for new domains and register your name before someone else does
          </motion.p>
        </motion.div>

        {/* SEARCH BAR – left untouched */}
        <div className="flex flex-row justify-center items-stretch max-w-3xl mx-auto w-full bg-white rounded-md shadow-lg relative">
          <input type="text" placeholder="Search Now..." className="flex-grow px-4 py-3 text-gray-800 outline-none text-sm sm:text-base" />

          <div ref={dropdownRef} className="relative w-[95px] sm:w-[120px] border-l border-gray-300">
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-full px-4 py-3 text-gray-700 text-sm sm:text-base"
            >
              {selected}
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50"
              >
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
              </motion.ul>
            )}
          </div>

          <button className="flex items-center justify-center gap-2 bg-[#403c3c] hover:bg-[#a0430a] px-3 sm:px-6 py-3 text-white text-xs sm:text-sm md:text-base transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Search
          </button>
        </div>

        {/* PRICE TAGS – unchanged except added motion */}
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
            <motion.div
              key={i}
              className="bg-[#403c3cbf] hover:bg-[#403c3c] text-white px-4 py-2 rounded-md text-sm sm:text-base transition cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="font-bold mr-1">{item.tld}</span>
              {item.price}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xs sm:text-sm md:text-base opacity-70 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Free WHOIS privacy protection is included with every eligible domain registration.
        </motion.p>
      </section>

      {/* POPULAR TLD CARDS */}
      <section className="py-20 px-6 md:px-16 bg-[#fbf9f6] text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <H1>Popular Top Level Domains</H1>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto text-[#7f7060] text-sm sm:text-base md:text-lg mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Register your brand with the most popular domain extensions and grow your brand presence globally.
        </motion.p>

        {/* Cards left intact except animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {tldData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className={`text-4xl font-bold mb-2 ${item.color}`}>{item.tld}</h3>
              <p className="text-gray-600 mb-6">{item.tagline}</p>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-400 line-through">{item.oldPrice}</span>
                <span className="text-2xl font-bold text-[#403c3c]">{item.newPrice}</span>
              </div>

              <div className="flex gap-3">
                <button className="px-5 py-2 bg-[#a0430a] cursor-pointer text-white rounded-md hover:bg-[#a0430acc] transition">
                  Register
                </button>
                <button className="px-5 py-2 cursor-pointer border border-[#a0430acc] rounded-md hover:bg-[#a0430a0D] transition">
                  Transfer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOMAIN PRICING */}
      <DomainPricingSection />

      <Transfer />

      {/* GET YOUR BUSINESS ONLINE (3 STEPS) */}
<motion.div 
  className="py-16 px-6 lg:px-20 bg-[#eee5da]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* LEFT SIDE */}
    <motion.div 
      className="w-full lg:w-1/2"
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <H1>Get Your Business Online in 3 Simple Steps</H1>
      </motion.div>

      <motion.p
        className="mb-6 text-[#403c3c] leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Launch your business online effortlessly by picking a domain, choosing hosting, and going live in minutes!
      </motion.p>

      <div className="space-y-4 text-[#403c3c]">

        <motion.p 
          className="flex gap-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#a0430a] mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span><strong>Choose Your Domain:</strong> Pick the perfect domain name with extensions like .com, .in, .org, and more.</span>
        </motion.p>

        <motion.p 
          className="flex gap-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[#a0430a] mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span><strong>Select a Hosting Plan:</strong> Choose hosting from MilesWeb at reliable pricing.</span>
        </motion.p>

        <motion.p 
          className="flex gap-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-[#a0430a] mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span><strong>Launch Your Website:</strong> Set up instantly and go live in minutes.</span>
        </motion.p>

      </div>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div 
      className="w-full lg:w-1/2 flex justify-center"
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={launch}
        alt="Website Launch"
        className="w-full max-w-md drop-shadow-md"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>

  </div>
</motion.div>

     <Faqs 
      title="Frequently Asked Questions"
      faqs={DomainregFAQs}
      />
    </div>
  );
}
