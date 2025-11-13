import React, { useState } from "react";
import { LifebuoyIcon, ChatBubbleLeftRightIcon, BookOpenIcon,} from "@heroicons/react/24/outline";
import Testimonials from "../Components/Testimonials"
import Contact from "../assets/contact.svg";

export default function ContactPage() {
  // --- Support Section State ---
  const [activeIndex, setActiveIndex] = useState(null);

  // --- Contact Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // --- Support Options ---
  const options = [
    {
      icon: <LifebuoyIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Raise a Ticket",
      description: "24/7 Support through Ticket for all Technical queries.",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Live Chat",
      description:
        "Talk to our Sales team for instant questions regarding our products.",
    },
    {
      icon: <BookOpenIcon className="h-10 w-10 text-[#a0430a]" />,
      title: "Knowledgebase",
      description: "For Instant Answers read through our Knowledgebase.",
    },
  ];

  // --- Contact Form Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Connect your backend/email integration here
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full bg-white text-[#403c3c]">
      {/* ================= CONTACT HEADER ================= */}
      <section className="bg-[#eee5da] text-center py-16 px-6 lg:px-20 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold font-[Georgia,_serif] text-[#a0430a] mb-4">
          Contact Us
        </h1>
        <p className="text-[#403c3c] font-['Roboto','sans-serif'] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          We’d love to hear from you! Reach out through any of the options below.
        </p>
      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center p-8 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Icon */}
              <div className="mb-4">{option.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#a0430a] mb-2 font-[Georgia,_serif]">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-[#403c3c] text-sm sm:text-base font-['Roboto','sans-serif'] leading-relaxed">
                {option.description}
              </p>

              {/* Animated Top Border */}
              <span
                className={`absolute top-0 right-0 h-[3px] bg-[#a0430a] transition-all duration-300 ease-out ${
                  activeIndex === index ? "w-full" : "w-0"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="flex items-center justify-center px-4 py-10 bg-white">
        <div className="flex flex-col my-25 md:flex-row w-full max-w-5xl border border-[#a0430a]/50 rounded-xl shadow-xl overflow-hidden bg-white">
          {/* --- LEFT SIDE: FORM --- */}
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#a0430a]/40 p-8 md:p-10">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 text-[#403c3c]"
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-sm uppercase tracking-wide font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-sm uppercase tracking-wide font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label className="text-sm uppercase tracking-wide font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none"
                  >
                    <option value="">Select a reason...</option>
                    <option value="Inquiry">General Inquiry</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-sm uppercase tracking-wide font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    required
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 py-3 bg-[#a0430a] hover:bg-[#a0430a] text-white font-semibold rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center text-[#403c3c]">
                <div className="text-6xl animate-bounce">📨</div>
                <p className="text-lg font-medium">
                  Thanks, {formData.name || "there"}! Your message has been sent.
                </p>
                <p className="text-sm text-[#a0430a]">
                  We’ll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto">
            <div className="absolute inset-0 bg-[#a0430a]/5 flex items-center justify-center">
              {/* Overlay text could go here if desired */}
            </div>
            <img
              src={Contact}
              alt="Contact us concept"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
