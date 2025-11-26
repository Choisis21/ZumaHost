import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { H1, H2, H3 } from "../Components/Headings";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".tooltip-container")) {
        setActiveTooltip(null);
      }
    };
    if (isMobile) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  const pricingPlans = [
    {
      name: "Go Basic",
      price: { monthly: "$2.99", yearly: "$29.99" },
      duration: { monthly: "/month", yearly: "/year" },
      description: "Ideal for those starting out and looking to upgrade later.",
      features: [
        { text: "Host 1 Website", tooltip: "You can host only 1 website on this plan. Upgrade to add more." },
        { text: "20GB SSD Storage", tooltip: "Fast SSD storage for better performance." },
        { text: "500GB Bandwidth", tooltip: "Monthly data transfer limit for your website." },
        { text: "Unlimited FTP Accounts", tooltip: "Create as many FTP accounts as needed." },
        { text: "10 Email Accounts", tooltip: "Includes up to 10 custom email addresses." },
        { text: "10 Databases", tooltip: "MySQL or PostgreSQL databases supported." },
      ],
    },
    {
      name: "Standard",
      price: { monthly: "$4.99", yearly: "$49.99" },
      duration: { monthly: "/month", yearly: "/year" },
      description: "High performance for up to five websites.",
      features: [
        { text: "Host 5 Websites", tooltip: "You can host up to 5 websites." },
        { text: "50GB SSD Storage", tooltip: "Faster and larger SSD space." },
        { text: "Unlimited Bandwidth", tooltip: "No restriction on traffic." },
        { text: "Unlimited FTP Accounts", tooltip: "Unlimited FTP account creation." },
        { text: "20 Email Accounts", tooltip: "Includes up to 20 email addresses." },
        { text: "Unlimited Databases", tooltip: "Create as many databases as you need." },
      ],
    },
    {
      name: "Go Unlimited",
      price: { monthly: "$9.99", yearly: "$99.99" },
      duration: { monthly: "/month", yearly: "/year" },
      description: "For developers and freelancers needing unlimited resources.",
      features: [
        { text: "Host Unlimited Websites", tooltip: "No limit to how many websites you can host." },
        { text: "Unlimited SSD Storage", tooltip: "No storage caps, grow as needed." },
        { text: "Unlimited Bandwidth", tooltip: "Truly unlimited data transfer." },
        { text: "Unlimited FTP Accounts", tooltip: "Unlimited account creation." },
        { text: "Unlimited Email Accounts", tooltip: "Unlimited custom email addresses." },
        { text: "Unlimited Databases", tooltip: "Create unlimited databases anytime." },
      ],
    },
  ];

  return (
    <section className="text-center px-6 bg-[#fbf9f6] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">

      <H1>Our Pricing Plan</H1>
      <div className="w-[60px] h-[2px] bg-[#a0430a] mx-auto mb-5 rounded"></div>
      <H3> Start saving today. If you are not happy with our services, we’ll refund your payment. </H3>

      {/* Billing Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-center pt-8 gap-3 mb-3 sm:mb-12">
        <div className="inline-flex bg-white rounded-full p-[3px] shadow-md">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${billingCycle === "monthly" ? "bg-[#3b3533] text-white" : "text-[#403c3c]"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${billingCycle === "yearly" ? "bg-[#3b3533] text-white" : "text-[#403c3c]"}`}
          >
            Yearly
          </button>
        </div>

        <span className="text-[#a0430a] text-sm font-semibold mt-2 sm:mt-0 sm:ml-3">
          Save up to 15% Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className={`relative bg-white rounded-xl shadow-md p-8 hover:shadow-2xl transition-all duration-300
              ${i === 1 ? "border-2 border-[#a0430a]" : ""}
            `}
          >
            {i === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a0430a] text-white text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-1 shadow-lg z-20">
                Most Popular
              </div>
            )}

            <H2 className="font-bold uppercase mb-2">{plan.name}</H2>
            <p className="text-[#7f7060] mb-3 text-sm">{plan.description}</p>

            <div className="text-4xl font-bold text-[#a0430a]">
              {plan.price[billingCycle]}
              <span className="text-lg font-medium text-[#403c3c]">{plan.duration[billingCycle]}</span>
            </div>

            <hr className="my-4 border-gray-200" />

            <ul className="space-y-3 text-[#403c3c]">
              {plan.features.map((feature, idx) => {
                const tooltipId = `${i}-${idx}`;
                return (
                  <li key={idx} className="flex items-center justify-between relative">
                    <span className="font-medium">{feature.text}</span>

                    <div
                      className="relative tooltip-container ml-2"
                      onMouseEnter={() => !isMobile && setActiveTooltip(tooltipId)}
                      onMouseLeave={() => {
                        if (!isMobile)
                          setTimeout(() => {
                            setActiveTooltip(prev => (prev === tooltipId ? null : prev));
                          }, 150);
                      }}
                    >
                      <FaInfoCircle
                        className={`cursor-pointer transition-colors duration-200 ${activeTooltip === tooltipId ? "text-[#a0430a]" : "text-gray-500 hover:text-[#a0430a]"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isMobile) setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
                        }}
                      />

                      <div
                        className={`absolute bottom-[125%] sm:left-1/2 sm:-translate-x-1/2 right-0 bg-[#403c3c] text-[#eee5da] text-xs rounded-md px-3 py-2 shadow-lg z-10 w-48 max-w-[85vw] text-center transition-all duration-200
                          ${activeTooltip === tooltipId ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                        `}
                      >
                        {feature.tooltip}
                        <div className="absolute w-3 h-3 bg-[#403c3c] rotate-45 bottom-[-6px] right-4 sm:left-1/2 sm:-translate-x-1/2"></div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <button className="mt-6 w-full bg-[#a0430a] text-white py-2 rounded-lg font-semibold hover:bg-[#a0430a]/80 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
