import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    title: "Outstanding customer service",
    text: "Zuma Host customer care and technical knowledge is excellent. I got my host service and domain names migrated in no time at all and smoothly.",
    name: "Juan Lezama",
    company: "OneStone Media",
  },
  {
    title: "Best service",
    text: "After searching the net so much I finally found a hosting service that I was waiting for. Thank you guys for the excellent service!!!",
    name: "Luis Costa",
    company: "Nine9Host",
  },
  {
    title: "Exceptional support",
    text: "Their team helped me migrate 10 websites seamlessly. The response time and professionalism were top-notch!",
    name: "Aisha Karim",
    company: "TechNova Labs",
  },
  {
    title: "Reliable and fast",
    text: "Servers are extremely fast, and uptime has been perfect. The free SSL and migration service are huge bonuses.",
    name: "Michael Reeves",
    company: "CodeHaven",
  },
  {
    title: "Highly recommend!",
    text: "I've been using Zuma Host for over a year now. Their support team is always available and genuinely cares about your business.",
    name: "Sophia Lin",
    company: "Cloudify Studio",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 0.6; // Adjust for faster/slower
    let requestId;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollSpeed;

      // When we reach the duplicated half, reset seamlessly
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }

      // Update the active index smoothly
      const halfWidth = scrollContainer.scrollWidth / 2;
      const progress = (scrollContainer.scrollLeft % halfWidth) / halfWidth;
      const newIndex = Math.floor(progress * totalSlides) % totalSlides;
      setActiveIndex(newIndex);

      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(requestId);
  }, [totalSlides]);

  return (
    <section className="bg-[#fbf9f6] py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* ===== Left Column: Centered Text ===== */}
        <div className="lg:w-1/3 w-full flex-shrink-0 flex flex-col justify-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-[Georgia,_serif] sm:text-3xl lg:text-4xl font-bold text-[#a0430a]">
              Trusted By Leaders and Industry Experts
            </h2>
            <p className="text-[#7f7060] font-['Roboto','sans-serif'] mt-4 leading-relaxed">
              Performance, reliability and quality service make thousands of
              businesses trust Zuma Host.
            </p>
          </div>
        </div>

        {/* ===== Right Column: Auto-Scrolling Testimonials ===== */}
        <div className="lg:w-2/3 w-full relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden select-none"
          >
            {/* Hide scrollbar */}
            <style>{`
              ::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex-shrink-0 w-[85%] sm:w-[calc(50%-0.75rem)]"
              >
                <h3 className="text-lg font-[Georgia,_serif] font-semibold text-[#a0430a] mb-3">
                  {t.title}
                </h3>
                <p className="text-[#403c3c] font-['Roboto','sans-serif'] mb-5">{t.text}</p>
                <div>
                  <p className="font-semibold font-[Georgia,_serif] text-[#a0430a]">{t.name}</p>
                  <p className="text-sm font-['Roboto','sans-serif'] text-[#403c3c]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Dynamic Dots Indicator ===== */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#403c3c]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
