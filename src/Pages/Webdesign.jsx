import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { H1, H2, H3 } from "../Components/Headings";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Faqs from '../Components/Faqs';
import Testimonials from "../Components/Testimonials";

// HERO IMAGES
import heroLeft from "../assets/web-design2.svg";
import heroRight from "../assets/web-design3.svg";
import bestDesignImg from "../assets/launch.svg";
import contact from "../assets/contact.svg";

// DEMO IMAGES
import Demo1 from "../assets/drpm.png"; 
import Demo2 from "../assets/raven.png";
import Demo3 from "../assets/drpm.png";

// ====== FAQ DATA ======
const webdesignFAQs = [
  {
    question: "How can I trust Zuma Host?",
    answer: "At Zuma Host, we pride ourselves on offering the best web hosting service possible. Our support is friendly and efficient, and we keep our prices low to ensure that our clients get the best value for their money. If you wish to speak to us further about how to host your site, contact us on live chat or call us today.",
  },
  {
    question: "What is an SSL certificate? Can I get a free SSL certificate with my web hosting plan?",
    answer: "An SSL certificate encrypts data transferred between your website and its visitors, providing a secure browsing experience. Yes, all our web hosting plans include free SSL certificates at no additional cost.",
  },
  {
    question: "Can I transfer my existing domain to your platform?",
    answer: "Absolutely. We support easy, fast domain transfers with no downtime. Our support team can guide you through unlocking your domain and providing the EPP/Auth code.",
  },
  {
    question: "How long does domain registration take?",
    answer: "Domain registration is usually instant. Once you complete your order, the domain becomes active and ready to use within minutes.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer: "Absolutely! All hosting plans support one-click upgrades without downtime. You can scale to more storage, bandwidth, or speed anytime.",
  },
  {
    question: "Do you offer migration support?",
    answer: "Yes, our team offers free website migration with all plans. We'll handle everything to ensure your site transitions smoothly without downtime.",
  },
];

// Work process data
const steps = [
  { title: "Order your package", desc: "First, order your package that has the features you are looking for on your website and complete the payment." },
  { title: "Workshops & Kick-off", desc: "The second stage focuses on understanding your goals. We discuss openly with you and your team." },
  { title: "UX Design", desc: "Next, we begin working on the prototypes. Based on your needs, we tailor the testing process to suit your timeline." },
  { title: "Development", desc: "Our team begins development, ensuring clean code, performance, and scalable structure." },
  { title: "Testing", desc: "We rigorously test your project to guarantee quality, speed, and user experience across all devices." },
  { title: "Launch & Support", desc: "Finally, we launch the project and offer ongoing support to ensure everything runs smoothly." }
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerParent = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepCard = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionLink = motion(Link);

const Webdesign = () => {
  const demos = [
    { 
      id: 1, 
      title: "NGO", 
      img: Demo1, 
      imageUrl: "https://divineroyalpriesthood.org/", 
      buttonUrl: "https://divineroyalpriesthood.org/" 
    },
    { 
      id: 2, 
      title: "NFT", 
      img: Demo2, 
      imageUrl: "https://corvusaurum.com/", 
      buttonUrl: "https://corvusaurum.com/" 
    },
    { 
      id: 3, 
      title: "Web Design", 
      img: Demo3, 
      imageUrl: "https://example.com/web-image", 
      buttonUrl: "https://example.com/web-demo" 
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#eee5da] pt-28 pb-20 md:pt-36 md:pb-32 lg:pt-50 lg:pb-48 overflow-hidden">
        <motion.img src={heroLeft} className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[28%] max-w-[380px]"
          alt="hero-left" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        <motion.img src={heroRight} className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[28%] max-w-[380px]"
          alt="hero-right" variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        <motion.div className="relative z-10 mx-auto text-center px-4 sm:px-6 md:px-16 lg:px-0 max-w-full md:max-w-2xl lg:max-w-3xl"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <H3 className="text-[#7f7060] font-bold">Web Development Made Easy</H3>
          <H1>Reliable Websites Design And <br /> Development Services</H1>
          <p className="text-[#403c3c] mt-4 md:mt-5 text-base md:text-lg leading-relaxed">
            With cutting-edge design techniques, we'll create a powerful online presence that attracts customers and leaves a lasting impression.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 cursor-pointer bg-[#a0430a] text-white rounded-lg shadow hover:bg-[#a0430a]/80 transition text-base md:text-lg">
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =============================== */}
      {/* ⭐ SAMPLE PROJECTS SECTION ⭐ */}
      {/* =============================== */}
      <section className="w-full py-16 px-4 md:px-10 lg:pt-35 lg:pb-25 lg:px-20 bg-[#fbf9f6]">
        <div className="mb-12">
          <h2 className="font-bold flex flex-row flex-wrap items-baseline gap-2 sm:gap-4">
            <span className="font-[Georgia,_serif] text-[#a0430a] text-3xl sm:text-[40px] md:text-[50px] lg:text-[60px]">Sample</span>
            <span className="text-[#403c3c] font-['Roboto','sans-serif'] text-2xl sm:text-[30px] md:text-[40px] lg:text-[50px]">Projects</span>
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {demos.map((demo) => (
            <motion.div
              key={demo.id}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-transform duration-300"
              variants={stepCard}
              whileHover={{ scale: 1.03 }}
            >
              {/* IMAGE LINK */}
              <a href={demo.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div
                  className="relative h-64 overflow-y-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
                  style={{ scrollbarWidth: "none" }}
                >
                  <img src={demo.img} alt={demo.title} className="w-full object-cover" />
                  <style>
                    {`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                  </style>
                </div>
              </a>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{demo.title}</h3>

                {/* BUTTON LINK */}
                <a
                  href={demo.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-[#a0430a] text-white rounded-lg hover:bg-[#a0430a]/70 cursor-pointer transition"
                >
                  View Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section className="w-full bg-[#fbf9f6] py-20 px-5 md:px-12 lg:px-20">
        <motion.div className="text-center max-w-3xl mx-auto mb-14"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <H1>How We Bring Your Ideas <br /> to Life</H1>
          <H3>Explore every step of our work process to get to know us better.</H3>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {steps.map((item, i) => (
            <motion.div key={i}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition"
              variants={stepCard}>
              <div className="w-12 h-12 flex items-center justify-center bg-[#a0430a]/20 rounded-full">
                <CheckCircleIcon className="w-7 h-7 text-[#a0430a]" />
              </div>
              <H2>{item.title}</H2>
              <H3 className="text-[#403c3c]">{item.desc}</H3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BEST WEBSITE DESIGN SERVICES SECTION */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-10 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <motion.div className="w-full lg:w-[50%] flex justify-center"
            variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src={bestDesignImg} alt="best design" className="w-full max-w-[550px] rounded-xl object-contain" />
          </motion.div>

          <motion.div className="w-full lg:w-[50%]"
            variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7f7060] font-medium mb-3 text-lg">Rest Assured With Us</p>
            <H1>We Give You The Best <br /> Website Design Services</H1>
            <H3 className="text-[#403c3c]">
              At Zuma Host, we know a strong website is crucial in today’s digital world.
              We provide premium website design and development services to help
              businesses build a powerful online presence. Let us craft a website that
              looks stunning and performs flawlessly, driving growth and success.
            </H3>
            <motion.a href="#" className="inline-block px-8 py-3 bg-[#a0430a] text-white rounded-lg font-medium hover:bg-[#a0430a]/80 transition shadow-md"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Get Started Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      <div className="w-full max-w-10xl border-t border-gray-200"></div>

      {/* SUPPORT SECTION */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-10 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <motion.div className="w-full lg:w-[50%]"
            variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#7f7060] font-medium mb-3 text-lg">Support</p>
            <H1>Our Dedicated Support <br /> Team Is Here.</H1>
            <H3 className="text-[#403c3c]">
              Our top-notch support team is a source of pride. 
              They're available whenever you need them, ensuring uninterrupted assistance. 
              Experience unparalleled support for your services, including servers, websites, emails, and more. 
              Discover the best support that sets the standard for excellence.
            </H3>
            <MotionLink to="/contact" className="inline-block px-8 py-3 bg-[#a0430a] cursor-pointer text-white rounded-lg font-medium hover:bg-[#a0430a]/80 transition shadow-md"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Contact Us
            </MotionLink>
          </motion.div>

          <motion.div className="w-full lg:w-[50%] flex justify-center"
            variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src={contact} alt="best design" className="w-full max-w-[550px] rounded-xl object-contain" />
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <Faqs title="Frequently Asked Questions" faqs={webdesignFAQs} />

      <Testimonials />
    </>
  );
};

export default Webdesign;
