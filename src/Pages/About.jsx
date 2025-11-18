import React from "react";
import data from "../assets/stats.svg";
import about from "../assets/launch.svg";
import DataCenters from "../Components/DataCenters";
import Testimonials from "../Components/Testimonials";
import { H1, H3 } from "../Components/Headings";
import { motion } from "framer-motion";

const AboutHeader = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-white">
      {/* ========================== HERO HEADER ========================== */}
      <div className="bg-[#eee5da] text-center pt-24 pb-16 px-6 lg:px-20 md:pt-32 md:pb-24">
        {/* ❌ Heading: NO animation */}
        <H1>About Us</H1>

        {/* ✅ Only this text animates */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <H3>
            We are the first step towards putting your business online and building a strong web presence.
            <br />
            Get to know us more.
          </H3>
        </motion.div>
      </div>

      {/* ========================== WHO WE ARE ========================== */}
      <motion.div
        className="py-16 px-6 lg:px-20 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
       <motion.div
         className="w-full lg:w-1/2"
         initial={{ opacity: 0, x: -50 }}
         whileInView={{
         opacity: 1,
         x: 0,
         transition: { duration: 0.6, delay: 0.2 }, // ⭐ Added delay
        }}
          viewport={{ once: true }}
  >
          <H1>Who We Are?</H1>

          {/* Animate only the text under the heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H3 className="text-[#403c3c]">
              Zuma Host is committed to provide top-notch web hosting solutions to businesses of all sizes at an affordable price tag.
            </H3>
            <H3 className="text-[#403c3c]">
              Despite our remote work setup, we are able to handle operations from home and still communicate with clients effectively.
            </H3>
            <p className="text-[#403c3c] leading-relaxed font-['Roboto','sans-serif']">
              At Zumahost.com, we are committed to providing the highest level of service and customer care.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          <img src={data} alt="Illustration" className="w-full max-w-md" />
        </motion.div>
      </motion.div>

      {/* ========================== DATA CENTERS ========================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <DataCenters />
      </motion.div>

      {/* ========================== WHY CHOOSE US ========================== */}
      <motion.div
        className="py-16 px-6 lg:px-20 flex flex-col mt-10 md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
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
          <H1>Why Choose Zuma Host?</H1>

          {/* Animate ONLY the text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
              Zuma Host combines industry expertise with a modern approach to hosting, development, and server management. 
            </p>
            <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
              Integrity matters to us. That’s why we only promote services we can fully support—no misleading claims or hidden details. 
            </p>
            <p className="text-[#403c3c] leading-relaxed font-['Roboto','sans-serif']">
              And you’re never alone. Our customer support team is available 24/7.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ========================== TESTIMONIALS ========================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Testimonials />
      </motion.div>
    </section>
  );
};

export default AboutHeader;
