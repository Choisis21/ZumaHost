import React from 'react'

const Security = () => {
  return (
    <div className="bg-[#f9f6f2] py-16 px-6 md:px-12 lg:px-24">
      {/* ========================== WEBSITE FIREWALL SECTION ========================== */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        {/* --- Text Content --- */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-2xl font-extrabold mb-4 text-[#a0430a] font-[Georgia,_serif]">
            Website Application Firewall (WAF)
          </h2>
          <p className="text-lg md:text-[15px] text-[#403c3c] font-['Roboto','sans-serif'] leading-relaxed">
            Protecting your website from attacks & hacks is our utmost
            priority. Our Website Application Firewall (WAF) prevents all kinds
            of attacks and protects your web application from exploits.
          </p>
        </div>

        {/* --- Icon Section --- */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-[#a0430a] p-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              className="w-24 h-24"
            >
              <path d="M12 1C7 3 2 5 2 10c0 7.1 4.2 11.8 9.3 13.8.5.2 1 .2 1.4 0C17.8 21.8 22 17.1 22 10c0-5-5-7-10-9zm.5 20.3C8.4 19.2 4 15.2 4 10c0-3.5 3.6-5.2 8-7 4.4 1.8 8 3.5 8 7 0 5.2-4.4 9.2-7.5 11.3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 7a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security
