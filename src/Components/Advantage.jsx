import { HandRaisedIcon, RocketLaunchIcon, BoltIcon } from "@heroicons/react/24/solid";

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

  return (
    <section className="w-full bg-[#fff] py-20 px-6 sm:px-10 lg:px-[10%] text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#a0430a] mb-3 font-[Georgia,_serif]">
        The Zuma Host Advantage
      </h2>
      <p className="text-[#7f7060] text-base sm:text-lg max-w-2xl mx-auto mb-12 font-['Roboto','sans-serif']">
        It's not easy to find a right web hosting provider when you get overwhelmed with
        the number of options out there.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#a0430a] mb-2 font-[Georgia,_serif]">
              {feature.title}
            </h3>
            <p className="text-[#403c3c] text-sm sm:text-base leading-relaxed font-['Roboto','sans-serif']">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantage;




