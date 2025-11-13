// File: Migration.jsx
import React from "react";
import migrationImg from "../assets/datatf.svg"; 
import ssl2025 from "../assets/ssl.svg";

const Migration = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* ========= FIRST SECTION (Image Left, Text Right) ========= */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={migrationImg}
            alt="Migration Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-[Georgia,_serif] md:text-[22px] font-bold text-[#a0430a] mb-4 leading-snug">
            Unlimited Free Migrations & Free SSL Certificates
          </h2>
          <p className="text-[#403c3c] font-['Roboto','sans-serif'] mb-4">
            Transitioning to Zuma Host from your existing service provider? Allow
            us to manage the entire migration process on your behalf.
          </p>
          <p className="text-[#403c3c] font-['Roboto','sans-serif'] mb-4">
            When you transfer any number of your websites to your Zuma Host
            subscription, you won't incur any expenses. Whether you possess 1,
            10, or even 100 websites, there will be no charges applicable.
          </p>
          <p className="text-[#403c3c] font-['Roboto','sans-serif']">
            Every website hosted through Zuma Host is equipped with a complimentary
            default AutoSSL. As soon as your website is up and running, our
            automated SSL checker will seamlessly deploy a free SSL certificate
            for you. This process occurs hourly to ensure a secure browsing
            experience.
          </p>
        </div>
      </div>

      {/* ========= SECOND SECTION (Image Right, Text Left) ========= */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-[Georgia,_serif] md:text-[22px] font-bold text-[#a0430a] mb-4 leading-snug">
            Unlimited Free Migrations & Free SSL Certificates
          </h2>
          <p className="text-[#403c3c] font-['Roboto','sans-serif'] mb-4">
            Transitioning to Zuma Host from your existing service provider? Allow
            us to manage the entire migration process on your behalf.
          </p>
          <p className="text-[#403c3c] font-['Roboto','sans-serif'] mb-4">
            When you transfer any number of your websites to your Zuma Host
            subscription, you won't incur any expenses. Whether you possess 1,
            10, or even 100 websites, there will be no charges applicable.
          </p>
          <p className="text-[#403c3c] font-['Roboto','sans-serif']">
            Every website hosted through Zuma Host is equipped with a complimentary
            default AutoSSL. As soon as your website is up and running, our
            automated SSL checker will seamlessly deploy a free SSL certificate
            for you. This process occurs hourly to ensure a secure browsing
            experience.
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={ssl2025}
            alt="Migration Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Migration;
