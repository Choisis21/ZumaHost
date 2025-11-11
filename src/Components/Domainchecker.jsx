import React from "react";

const Domainchecker = () => {
  return (
    <section className="relative px-5 py-5 bg-[#fbf9f6] mt-10 z-20">
      <div
        className="max-w-screen-lg bg-[#fff] mx-auto shadow-xl rounded-xl px-6 py-8 text-center"
        style={{
          boxShadow:
            "0 -10px 15px -3px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        {/* Input + Button */}
        <div className="flex flex-col font-[Georgia,_serif] sm:flex-row justify-center items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Start your online journey..."
            className="border border-gray-300 rounded-md py-3 px-4 w-full sm:w-2/3 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 
                       placeholder-gray-500 text-gray-900"
          />
          <button className="bg-gradient-to-r from-[#c9ad8b] to-[#a0430a] text-white font-[Georgia,_serif] py-3 px-6 rounded-md w-full sm:w-auto transition">
            Search Domain
          </button>
        </div>

        {/* Domain Prices */}
        <div className="flex justify-center flex-wrap gap-6 font-[Georgia,_serif] text-[#403c3c]">
          <span>
            .com <span className="text-[#a0430a] font-medium">$11.25</span>
          </span>
          <span>
            .org <span className="text-[#a0430a] font-medium">$12.50</span>
          </span>
          <span>
            .net <span className="text-[#a0430a] font-medium">$14.50</span>
          </span>
          <span>
            .co <span className="text-[#a0430a] font-medium">$11.50</span>
          </span>
          <span>
            .info <span className="text-[#a0430a] font-medium">$9.00</span>
          </span>
          <span>
            .xyz <span className="text-[#a0430a] font-medium">$0.99</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Domainchecker;
