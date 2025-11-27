import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PricingSection from "../Components/Pricingsection";
import Advantage from "../Components/Advantage";
import Security from "../Components/security";
import Testimonials from "../Components/Testimonials";
import Faqs from '../Components/Faqs'
import about from "../assets/domain1.svg";
import { Link } from "react-router-dom";
import { H1 } from "../Components/Headings";
import { motion } from "framer-motion";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // ====== FAQ DATA ======
const homefaqs = [
  {
    question: "How can I trust Zuma Host?",
    answer:
      "At Zuma Host, we pride ourselves on offering the best web hosting service possible. Our support is friendly and efficient, and we keep our prices low to ensure that our clients get the best value for their money. If you wish to speak to us further about how to host your site, contact us on live chat or call us today.",
  },
  {
    question:
      "What is an SSL certificate? Can I get a free SSL certificate with my web hosting plan?",
    answer:
      "An SSL certificate encrypts data transferred between your website and its visitors, providing a secure browsing experience. Yes, all our web hosting plans include free SSL certificates at no additional cost.",
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

  return (
    <section className="font-sans">
      {/* ========================== HERO SECTION ========================== */}
      <div className="relative bg-[#eee5da] text-white">
        <div className="max-w-8xl mx-auto px-6 pt-40 pb-30 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="text-center md:text-left md:px-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <H1>All in One Hosting Solutions</H1>
            <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Choose from a wide range of website hosting products, offered with
              exceptional reliability, speed & support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 gap-6 w-full justify-items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center mb-5 rounded-[10px] shadow-lg bg-white w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardHover}
              >
                <div className="bg-[#7f7060] text-white w-full py-3 text-center font-semibold uppercase tracking-wide text-sm md:text-base rounded-t-[10px]">
                  {plan.title}
                </div>

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

                <button className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 bg-[#a0430a] hover:bg-[#a0430a]/80 text-white py-2 px-6 rounded-md font-semibold text-sm flex items-center justify-center gap-2 shadow-lg whitespace-nowrap z-10">
                  View Plans <FaArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <PricingSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Advantage />
      </motion.div>

      {/* ========================== DOMAIN SECTION ========================== */}
      <div className="py-16 px-6 bg-white lg:px-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          <img src={about} alt="Illustration" className="w-full max-w-md" />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Security />
      </motion.div>

      {/* ========================== COMPARE HOSTING PACKAGES ========================== */}
      <section className="py-16 bg-white text-gray-800 px-5 md:px-5 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <H1 className="text-center">Compare Hosting Packages</H1>
        </motion.div>

        <p className="text-center text-gray-500 py-5 text-sm mt-3 block sm:hidden">
          👉 Swipe left or right to view all plans
        </p>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-[800px] w-full border-collapse text-center">
              <thead>
                <tr className="bg-[#a0430a] text-white">
                  <th className="p-4 text-left font-semibold font-[Georgia,_serif] border-r border-white rounded-tl-xl">
                    Features
                  </th>
                  {comparePlans.map((plan, idx) => (
                    <th
                      key={plan.name}
                      className={`p-4 font-bold font-[Georgia,_serif] border-r ${idx === comparePlans.length - 1 ? "" : "border-white"}`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {[["NVMe SSD Storage", "storage"], ["Hosted Domains", "hostedDomains"], ["Premium Bandwidth", "bandwidth"], ["Sub Domains", "subDomains"], ["Operating System", "os"]].map(([label, key], idx) => (
                  <tr key={label} className="hover:bg-[#fbf9f6] transition-colors">
                    <td className="p-4 text-left font-[Georgia,_serif] font-medium text-gray-700 border-r border-gray-300">{label}</td>
                    {comparePlans.map((plan, colIdx) => (
                      <td key={plan.name} className={`p-4 font-['Roboto','sans-serif'] text-gray-700 ${colIdx !== comparePlans.length - 1 ? "border-r border-gray-300" : ""}`}>
                        {typeof plan[key] === "boolean" ? (plan[key] ? "✅" : "-") : plan[key]}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="text-[#a0430a] font-[Georgia,_serif] uppercase">
                  <td colSpan={comparePlans.length + 1} className="p-3 text-center bg-[#fbf9f6] font-semibold border-t border-gray-300">
                    Package Features
                  </td>
                </tr>

                {[["Free SSL Certificate", "ssl"], ["cPGuard Malware Protection", "malware"], ["One Click App Installer", "installer"], ["Server Location", "location"], ["Money Back Guarantee", "guarantee"]].map(([label, key], idx) => (
                  <tr key={label} className="hover:bg-[#fbf9f6] transition-colors">
                    <td className="p-4 text-left font-[Georgia,_serif] font-medium text-gray-700 border-r border-gray-300">{label}</td>
                    {comparePlans.map((plan, colIdx) => (
                      <td key={plan.name} className={`p-4 font-['Roboto','sans-serif'] text-gray-700 ${colIdx !== comparePlans.length - 1 ? "border-r border-gray-300" : ""}`}>
                        {typeof plan[key] === "boolean" ? (plan[key] ? "✅" : "-") : plan[key]}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td className="p-4 text-left font-bold font-[Georgia,_serif] text-[#a0430a] border-r border-gray-300">
                    Compare Web Hosting <br />
                    <span className="text-sm font-medium text-[#7f7060] font-[Georgia,_serif]">
                      Choose your package
                    </span>
                  </td>
                  {comparePlans.map((plan, colIdx) => (
                    <td key={plan.name} className={`${colIdx !== comparePlans.length - 1 ? "border-r border-gray-300" : ""} p-4`}>
                      <button
                        className={`py-2 px-6 w-full rounded-md font-semibold border transition 
                          ${plan.name === "LITE"
                            ? "bg-[#a0430a] text-white hover:bg-[#a0430a]/80"
                            : "bg-white border-[#403c3c] text-[#403c3c] hover:bg-[#403c3c] hover:text-white"
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

      <Faqs 
      title="Frequently Asked Questions"
      faqs={homefaqs}
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Testimonials />
      </motion.div>
    </section>
  );
};

export default HostingSection;
