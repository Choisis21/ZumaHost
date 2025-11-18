import { HandRaisedIcon, RocketLaunchIcon, BoltIcon } from "@heroicons/react/24/solid";
import { H1, H2, H3 } from "../Components/Headings";
import { motion } from "framer-motion";

const Advantage = () => {
  const features = [
    {
      icon: <HandRaisedIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "High Quality Support",
      desc: "Let our award-winning support team take care of your web hosting and maintenance needs, so you can focus on running your business.",
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "Superior Performance",
      desc: "We strike the perfect balance between power and price. Experience speed, space, high-quality features, and so much more!",
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "100% Pure SSD Servers",
      desc: "We deliver high-speed hosting solutions through our non-overloaded, optimized, and enterprise-grade SSD servers.",
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "100% Pure SSD Servers",
      desc: "We deliver high-speed hosting solutions through our non-overloaded, optimized, and enterprise-grade SSD servers.",
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "100% Pure SSD Servers",
      desc: "We deliver high-speed hosting solutions through our non-overloaded, optimized, and enterprise-grade SSD servers.",
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#a0430a]" />,
      title: "100% Pure SSD Servers",
      desc: "We deliver high-speed hosting solutions through our non-overloaded, optimized, and enterprise-grade SSD servers.",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15, // stagger effect
      },
    }),
  };

  return (
    <section className="w-full bg-[#fff] py-20 px-6 sm:px-10 lg:px-[10%] text-center">
      
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <H1>The Zuma Host Advantage</H1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <H3>
          It's not easy to find a right web hosting provider when you get overwhelmed with the number of options out there.
        </H3>
      </motion.div>

      {/* Cards with stagger animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-left p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            custom={index} // provides index to variants
          >
            <div className="mb-4">{feature.icon}</div>
            <H2>{feature.title}</H2>
            <H3 className="text-[#403c3c]">{feature.desc}</H3>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Advantage;
