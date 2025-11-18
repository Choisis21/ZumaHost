import React, { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"; 
import {H1, H3} from "../Components/Headings";

// ====== FAQ DATA ======
const faqs = [
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
    question: "Which cloud web hosting plan is best for me?",
    answer:
      "The best cloud hosting plan depends on your website’s needs. We recommend starting with our standard plan, which offers great scalability and performance for most small to medium businesses.",
  },
  {
    question: "Do you offer migration support?",
    answer:
      "Yes, our team offers free website migration with all plans. We'll handle everything to ensure your site transitions smoothly without downtime.",
  },
];

// ====== COMPONENT ======
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first FAQ open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* ===== Section Title ===== */}
        <H1 className="text-center mb-10 lg:mb-20 transition-opacity duration-700 animate-fade-in">
          Frequently Asked Questions
        </H1>

        {/* ===== FAQ Items ===== */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-md transition-all duration-300 ${
                openIndex === index
                  ? "border-gray-200"
                  : "border-gray-200"
              }`}
            >
              {/* ===== Question Row ===== */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded-md"
              >
                <h3 className="font-semibold text-base sm:text-lg font-[Georgia,_serif] text-[#a0430a] transition-colors duration-300 hover:text-[#c97d52]">
                  {faq.question}
                </h3>

                {/* ===== Toggle Icon ===== */}
                <span
                  className={`text-[#a0430a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? (
                    <XMarkIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </span>
              </button>

              {/* ===== Answer Section (smooth expand + fade) ===== */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <H3 className="px-5 pb-5 text-[#403c3c] transition-opacity duration-500">
                  {faq.answer}
                </H3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
