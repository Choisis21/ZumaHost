import React from "react";
import data from "../assets/stats.svg";
import about from "../assets/launch.svg";
import DataCenters from "../Components/DataCenters";
import Testimonials from "../Components/Testimonials";

const AboutHeader = () => {
  return (
    <section className="bg-white">
      <div className="bg-[#eee5da] text-center pt-24 pb-16 px-6 lg:px-20 md:pt-32 md:pb-24">
        <h1 className="text-3xl md:text-4xl font-bold font-[Georgia,_serif] text-[#a0430a] mb-4">
          About Us
        </h1>
        <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          We are the first step towards putting your business online and building a strong web presence.
          <br />Get to know us more.
        </p>
      </div>
      
      <div className="py-16 px-6 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#a0430a] font-[Georgia,_serif]">
            Who We Are?
          </h2>
          <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
            Zuma Host is committed to provide top-notch web hosting solutions to businesses of all sizes at an affordable price tag.
          </p>
          <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
            Despite our remote work setup, we are able to handle operations from home and still communicate with clients effectively.
          </p>
          <p className="text-[#403c3c] leading-relaxed font-['Roboto','sans-serif']">
            At Zumahost.com, we are committed to providing the highest level of service and customer care.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={data} alt="Illustration" className="w-full max-w-md" />
        </div>
      </div>

    <DataCenters />
    
    <div className="py-16 px-6 lg:px-20 flex flex-col mt-10 md:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={about} alt="Illustration" className="w-full max-w-md" />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#a0430a] font-[Georgia,_serif]">
            Why Choose Zuma Host?
          </h2>
          <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
            Zuma Host combines industry expertise with a modern approach to hosting, development, and server management. 
            Our skilled team delivers the reliability and technical knowledge businesses depend on.
          </p>
          <p className="text-[#403c3c] mb-4 leading-relaxed font-['Roboto','sans-serif']">
            Integrity matters to us. That’s why we only promote services we can fully support, no misleading claims or hidden details. 
            You’ll always have full clarity about your hosting plan and the value you receive.
          </p>
          <p className="text-[#403c3c] leading-relaxed font-['Roboto','sans-serif']">
            And you’re never alone. Our customer support team is available 24/7, always ready to help you with hosting issues or general questions.
          </p>
        </div>
      </div>

      <Testimonials />
  
    </section>
  );
};

export default AboutHeader;
