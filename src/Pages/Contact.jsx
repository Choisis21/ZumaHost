import React, { useState } from "react";
import { LifebuoyIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Testimonials from "../Components/Testimonials";
import Contact from "../assets/contact.svg";
import { H1 } from "../Components/Headings";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const options = [
    {
      icon: <LifebuoyIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Raise a Ticket",
      description: "24/7 Support through Ticket for all Technical queries.",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Live Chat",
      description: "Talk to our Sales team for instant questions regarding our products.",
    },
    {
      icon: <BookOpenIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Knowledgebase",
      description: "For Instant Answers read through our Knowledgebase.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverScale = {
    hover: { scale: 1.05 },
  };

  return (
    <div className="w-full bg-white text-[#403c3c] overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <section className="bg-[#eee5da] text-center px-6 sm:px-10 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <H1>Contact Us</H1>
        </motion.div>

        <motion.p
          className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We’d love to hear from you! Reach out through any of the options below.
        </motion.p>

      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <motion.section
        className="w-full bg-white px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center p-8 cursor-pointer overflow-hidden"
              variants={hoverScale}
              whileHover="hover"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-lg font-semibold text-[#a0430a] mb-2 font-[Georgia,_serif]">
                {option.title}
              </h3>
              <p className="text-[#403c3c] text-sm sm:text-base font-['Roboto','sans-serif'] leading-relaxed">
                {option.description}
              </p>
              <span
                className={`absolute top-0 right-0 h-[3px] bg-[#a0430a] transition-all duration-300 ease-out ${
                  activeIndex === index ? "w-full" : "w-0"
                }`}
              ></span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CONTACT FORM ================= */}
      <section className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-30 bg-white">

        <motion.div
          className="text-center mb-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <H1>Get in Touch</H1>
          <p className="text-sm sm:text-base text-[#403c3c] font-['Roboto','sans-serif'] leading-relaxed px-2">
            Have a question about our hosting plans or services? Use the form below to reach us.
            For technical issues, we recommend opening a support ticket for a faster response.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full max-w-5xl border border-[#a0430a]/50 rounded-xl shadow-xl overflow-hidden bg-white">

          {/* LEFT FORM */}
          <motion.div
            className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#a0430a]/40 p-8 sm:p-10 lg:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-[#403c3c]">
                
                {/* Name + Phone */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 555 123 4567"
                      className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none"
                    />
                  </div>
                </div>

                {/* Email + Website */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">Website (optional)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col w-full">
                  <label className="text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="flex flex-col w-full">
                  <label className="text-sm font-semibold mb-2">Upload File</label>
                  <input
                    type="file"
                    name="file"
                    accept=".jpg,.png,.gif,.mp4,.wmv,.mp3,.pdf"
                    onChange={handleFileChange}
                    className="bg-white border border-[#a0430a]/40 p-3 rounded-md outline-none file:mr-4 file:py-2 file:px-4 file:bg-[#a0430a] file:text-white file:rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 py-3 bg-[#a0430a] hover:bg-[#8c3908] text-white cursor-pointer font-semibold rounded-md shadow-md"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div 
                className="flex flex-col items-center justify-center space-y-4 py-10 text-center text-[#403c3c]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
              >
                <div className="text-6xl animate-bounce">📨</div>
                <p className="text-lg font-[Georgia,_serif] font-medium">
                  Thanks, {formData.name || "there"}! Your message has been sent.
                </p>
                <p className="text-sm font-['Roboto','sans-serif'] text-[#a0430a]">We’ll get back to you as soon as possible.</p>
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden bg-[#fdf8f5]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <img
              src={Contact}
              alt="Contact us concept"
              className="w-full h-full object-contain p-6 sm:p-10 lg:p-12"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Testimonials />
      </motion.div>

    </div>
  );
}
