import React, { useState } from "react";
import {
  LifebuoyIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Testimonials from "../Components/Testimonials";
import Contact from "../assets/contact.svg";

export default function ContactPage() {
  // --- Support hover state ---
  const [activeIndex, setActiveIndex] = useState(null);

  // --- Form state ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // --- Support options data ---
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

  // --- Handlers ---
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
    // Connect backend/email API here if needed
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full bg-white text-[#403c3c] overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <section className="bg-[#eee5da] text-center px-6 sm:px-10 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <h1 className="text-3xl md:text-4xl font-bold font-[Georgia,_serif] text-[#a0430a] mb-4">
          Contact Us
        </h1>
        <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          We’d love to hear from you! Reach out through any of the options below.
        </p>
      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center p-8 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-lg font-semibold text-[#a0430a] mb-2 font-[Georgia,_serif]">
                {option.title}
              </h3>
              <p className="text-[#403c3c] text-sm sm:text-base font-['Roboto','sans-serif'] leading-relaxed">
                {option.description}
              </p>

              {/* Animated top border */}
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
      <section className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-30 bg-white">
        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Georgia,_serif] text-[#a0430a] mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#403c3c] font-['Roboto','sans-serif'] leading-relaxed px-2">
            Have a question about our hosting plans or services? Use the form
            below to reach us. For technical issues, we recommend opening a
            support ticket for a faster response.
          </p>
        </div>

        {/* --- FORM CONTAINER --- */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl border border-[#a0430a]/50 rounded-xl shadow-xl overflow-hidden bg-white">
          {/* --- LEFT SIDE: FORM --- */}
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#a0430a]/40 p-8 sm:p-10 lg:p-12">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 text-[#403c3c]"
              >
                {/* ======= NAME & PHONE ======= */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none w-full"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                      required
                      className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none w-full"
                    />
                  </div>
                </div>

                {/* ======= EMAIL & WEBSITE ======= */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none w-full"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm font-semibold mb-2">
                      Website (optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none w-full"
                    />
                  </div>
                </div>

                {/* ======= MESSAGE ======= */}
                <div className="flex flex-col w-full">
                  <label className="text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    required
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none resize-none w-full"
                  ></textarea>
                </div>

                {/* ======= FILE UPLOAD ======= */}
                <div className="flex flex-col w-full">
                  <label className="text-sm font-semibold mb-2">
                    Upload File
                  </label>
                  <input
                    type="file"
                    name="file"
                    accept=".jpg,.png,.gif,.mp4,.wmv,.mp3,.pdf"
                    onChange={handleFileChange}
                    className="bg-white border border-[#a0430a]/40 focus:border-[#a0430a] transition-colors p-3 rounded-md outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-[#a0430a] hover:file:bg-[#8c3908] w-full"
                  />
                  <p className="text-xs text-[#666] mt-1">
                    Allowed: JPG, PNG, GIF, MP4, WMV, MP3, PDF
                  </p>
                </div>

                {/* ======= SUBMIT BUTTON ======= */}
                <button
                  type="submit"
                  className="mt-4 py-3 bg-[#a0430a] hover:bg-[#8c3908] text-white font-semibold rounded-md transition-all shadow-md hover:shadow-lg w-full"
                >
                  Send Message
                </button>
              </form>
            ) : (
              // ======= SUCCESS MESSAGE =======
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
          <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden bg-[#fdf8f5]">
            <div className="absolute inset-0 bg-[#a0430a]/5 flex items-center justify-center"></div>
            <img
              src={Contact}
              alt="Contact us concept"
              className="w-full h-full object-contain p-6 sm:p-10 lg:p-12"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
        <Testimonials />
    </div>
  );
}
