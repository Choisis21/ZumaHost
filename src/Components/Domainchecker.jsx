import React from "react";

const Domainchecker = () => {
  const domains = [
    { ext: ".com", price: "$11.25" },
    { ext: ".org", price: "$12.50" },
    { ext: ".net", price: "$14.50" },
    { ext: ".co", price: "$11.50" },
    { ext: ".info", price: "$9.00" },
    { ext: ".xyz", price: "$0.99" },
  ];

  return (
    <section className="relative px-5 py-10 bg-[#fbf9f6] mt-10 z-20">
      <div
        className="max-w-screen-lg bg-[#fff] mx-auto shadow-xl rounded-xl px-6 py-10 text-center 
                   transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
        style={{
          boxShadow:
            "0 -10px 15px -3px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4 font-[Georgia,_serif]">
          <input
            type="text"
            placeholder="Start your online journey..."
            className="border border-gray-300 rounded-md py-3 px-4 w-full sm:w-2/3
                       focus:outline-none focus:ring-2 focus:ring-[#a0430a] 
                       placeholder-gray-500 text-gray-900 
                       transition-all duration-300 transform hover:scale-[1.02]"
          />
          <button className="bg-gradient-to-r from-[#c9ad8b] to-[#a0430a] 
                             text-white font-[Georgia,_serif] py-3 px-6 rounded-md w-full sm:w-auto
                             transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            Search Domain
          </button>
        </div>

        {/* Domain Prices */}
        <div className="flex justify-center flex-wrap gap-6 font-[Georgia,_serif] text-[#403c3c] text-sm sm:text-base">
          {domains.map((domain, idx) => (
            <span
              key={idx}
              className="transition-all duration-300 transform hover:scale-110 hover:text-[#a0430a] cursor-default"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {domain.ext}{" "}
              <span className="text-[#a0430a] font-medium">{domain.price}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domainchecker;
