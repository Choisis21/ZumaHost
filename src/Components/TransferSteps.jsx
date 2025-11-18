import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import stepImage from "../assets/domain1.svg";
import { H1, H2, H3 } from "../Components/Headings"; 

const steps = [
  {
    id: 1,
    title: "Domain is valid",
    desc: "The domain registration must be valid with another registrar.",
    contentTitle: "Domain Name you want to transfer",
    contentDesc:
      "To initiate the transfer of your domain name, enter the domain name you wish to transfer. Ensure your domain is unlocked and accessible.",
    checklist: [
      "Domain Name: Enter the full domain name you want to transfer",
      "Domain Unlock: Ensure your domain is unlocked for transfer",
    ],
  },
  {
    id: 2,
    title: "Domain is Unlocked",
    desc: "The domain registration must be valid with another registrar.",
    contentTitle: "Unlock Your Domain",
    contentDesc:
      "Make sure your domain is unlocked from the current registrar before starting the transfer.",
    checklist: ["Remove Registrar Lock", "Disable Transfer Restrictions"],
  },
  {
    id: 3,
    title: "Authorization Code",
    desc: "The domain registration must be valid with another registrar.",
    contentTitle: "Enter Authorization Code",
    contentDesc:
      "Request your EPP/Authorization code from your current registrar and enter it here.",
    checklist: ["Obtain Valid EPP Code", "Ensure Code Matches the Domain"],
  },
  {
    id: 4,
    title: "Disable Privacy",
    desc: "The domain registration must be valid with another registrar.",
    contentTitle: "Disable Domain Privacy",
    contentDesc:
      "Disable WHOIS privacy so the new registrar can validate your ownership during the transfer.",
    checklist: ["Turn Off WHOIS Privacy", "Ensure Contact Email Is Accessible"],
  },
];

const TransferSteps = () => {
  const [active, setActive] = useState(steps[0]);

  // ---- Scroll Animation Controls ----
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { margin: "-100px", once: true });
  const controls = useAnimation();

  // Wrap H1 with motion
  const MotionH1 = motion(H1);
  const MotionH2 = motion(H2);
  const MotionH3 = motion(H3);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-10">
      {/* SECTION HEADER WITH SCROLL ANIMATION */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-center mb-10"
      >
        <motion.p
          className="text-[#403c3c] font-['Roboto','sans-serif'] font-medium text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.1 }}
        >
          Technology Overview
        </motion.p>

        <H1
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          Transfer a Domain Name in <br /> 4 Simple Steps
        </H1>
      </motion.div>

      {/* MAIN CONTENT CARD */}
      <div className="w-full max-w-6xl mx-auto bg-[#eee5da] rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300">
        {/* Left Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={stepImage}
            alt="Step Illustration"
            className="w-[80%] md:w-[70%] lg:w-[60%]"
          />
        </div>

        {/* Right Dynamic Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Step Badge */}
              <span className="inline-block bg-[#a0430a] text-white px-4 py-1 text-sm rounded-md">
                Step {String(active.id).padStart(2, "0")}
              </span>

              <H2 className="text-2xl font-bold mt-4">{active.contentTitle}</H2>
              <H3 className="mt-3 leading-relaxed">{active.contentDesc}</H3>

              {/* Checklist */}
              <ul className="mt-6 space-y-3">
                {active.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-4 h-4 mt-1 bg-[#a0430a] rounded-full"></span>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* STEP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`cursor-pointer p-5 rounded-lg shadow-sm border transition-all duration-300 bg-white
              ${active.id === step.id ? "border-[#a0430a] shadow-md scale-[1.02]" : "border-gray-200 hover:border-[#a0430a]"}`}
            onClick={() => setActive(step)}
          >
            <p className="text-sm text-gray-500">0{step.id}</p>
            <H2
              className={`font-semibold text-lg ${active.id === step.id ? "text-[#a0430a]" : "text-[#0c1326]"}`}
            >
              {step.title}
            </H2>
            <H3 className="text-gray-600 text-sm mt-2">{step.desc}</H3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransferSteps;
