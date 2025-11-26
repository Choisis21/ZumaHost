// Faqs.jsx
import React, { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"; 
import {H1, H3} from "../Components/Headings";

const Faqs = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">

        <H1 className="text-center mb-10 lg:mb-20">
          {title}
        </H1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md transition-all duration-300">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5"
              >
                <h3 className="font-semibold text-base sm:text-lg font-[Georgia,_serif] text-[#a0430a]">
                  {faq.question}
                </h3>

                <span
                  className={`text-[#a0430a] transition-transform duration-300 ${
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

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <H3 className="px-5 pb-5 text-[#403c3c]">
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
