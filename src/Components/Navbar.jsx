import { useState, useEffect } from "react";
import { GlobeAltIcon, ArrowPathIcon, Cog6ToothIcon, BeakerIcon, StarIcon, SparklesIcon,} from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);
  const [domainOpen, setDomainOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hostingPlans = [
    {
      icon: BeakerIcon,
      title: "Silver Plan",
      desc: "Affordable hosting for small projects and personal websites.",
    },
    {
      icon: StarIcon,
      title: "Gold Plan",
      desc: "Perfect for growing businesses with higher traffic and storage needs.",
    },
    {
      icon: SparklesIcon,
      title: "Diamond Plan",
      desc: "Premium hosting with maximum performance, resources, and priority support.",
    },
  ];

  const domainServices = [
    {
      icon: GlobeAltIcon,
      title: "Domain Registration",
      desc: "Secure your perfect domain name today.",
    },
    {
      icon: ArrowPathIcon,
      title: "Domain Transfer",
      desc: "Move your domain easily from another registrar.",
    },
    {
      icon: Cog6ToothIcon,
      title: "DNS Management",
      desc: "Configure records and control your domain’s settings.",
    },
  ];

  // 🧭 Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 font-[Georgia,_sans-serif] ${
        scrolled
          ? "bg-[#fbf9f6]/90 backdrop-blur-sm border-b border-[#c9ad8b]/40 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Navbar Container */}
      <div className="w-full flex justify-between md:px-5 items-center mt-2 p-4 rounded-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2 pl-4 sm:pl-6 md:pl-10">
          <img
            src="/logo 4.png"
            alt="Zuma Host Logo"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 cursor-pointer"
          />
          <div className="text-sm sm:text-base md:text-xl font-bold font-[Georgia,_serif] text-transparent bg-clip-text cursor-pointer bg-gradient-to-r from-[#403c3c] to-[#c9ad8b]">
            Zuma Host
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center pr-10 space-x-8">
          <Link to="/" className="text-[#3b3533] hover:text-[#a0430a]">
            Home
          </Link>
          <Link to="/about" className="text-[#3b3533] hover:text-[#a0430a]">
            About
          </Link>

          <Link to="/hosting" className="text-[#3b3533] hover:text-[#a0430a]">
            Hosting
          </Link>

          {/* Hosting Dropdown 
          <div className="relative group">
            <button className="text-[#3b3533] hover:text-[#a0430a] flex items-center gap-1 px-2 py-1">
              Hosting ▾
            </button> */}

            {/* Invisible hover bridge 
            <div className="absolute left-0 top-full w-full h-4 bg-transparent"></div>

            <div
              style={{ backgroundImage: "linear-gradient(145deg, #f7f3ee, #c9ad8b)", }}
              className="absolute left-0 top-full mt-2 min-w-[16rem] sm:min-w-[18rem] 
              bg-[#f8f8f8] rounded-xl shadow-lg opacity-0 scale-95 translate-y-2 
              pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 
              group-hover:scale-100 group-hover:pointer-events-auto border border-[#a8a29e]/60
              transition-all duration-200 ease-out z-50"
            >
              {hostingPlans.map((plan, idx) => (
                <a key={idx} href="#"
                 className="flex items-start gap-3 px-4 py-2 text-[#3b3533] rounded-md transition-colors"
                >
                  <plan.icon className="w-8 h-8 text-[#a0430a] mt-1" />
                  <div>
                    <p className="font-medium hover:text-[#a0430a]">{plan.title}</p>
                    <p className="text-sm font-['Roboto','sans-serif'] text-[#8a8383]">{plan.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div> */}

          {/* Domain Dropdown */}
          <div className="relative group">
            <button className="text-[#3b3533] hover:text-[#a0430a] flex items-center gap-1 px-2 py-1">
              Domain ▾
            </button>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 top-full w-full h-4 bg-transparent"></div>

            <div
              style={{ backgroundImage: "linear-gradient(145deg, #f7f3ee, #c9ad8b)", }}
              className="absolute left-0 top-full mt-2 min-w-[16rem] sm:min-w-[18rem] 
              bg-[#f8f8f8] rounded-xl shadow-lg opacity-0 scale-95 translate-y-2 
              pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 
              group-hover:scale-100 group-hover:pointer-events-auto border border-[#a8a29e]/60
              transition-all duration-200 ease-out z-50"
            >
              {domainServices.map((service, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-start gap-3 px-4 py-2 text-[#3b3533] rounded-md transition-colors"
                >
                  <service.icon className="w-5 h-5 text-[#a0430a] mt-1" />
                  <div>
                    <p className="font-medium hover:text-[#a0430a]">{service.title}</p>
                    <p className="text-sm font-['Roboto','sans-serif'] text-[#8a8383]">{service.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Link to="/contact" className="text-[#3b3533] hover:text-[#a0430a]">
            Contact
          </Link>
          <Link to="#" className="text-[#3b3533] hover:text-[#a0430a]">
            Affiliates
          </Link>

          {/* Client Area Button */}
          <a
            href="#"
            className="text-[#403c3c] border border-[#403c3c] px-3 py-1.5 rounded-full hover:bg-[#403c3c] hover:text-[#fff] transition-colors duration-200"
          >
            Client Area
          </a>
        </nav>

        {/* Mobile & Tablet Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3b3533] hover:text-[#a0430a]"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div
          style={{ backgroundImage: "linear-gradient(145deg, #f7f3ee, #c9ad8b)", }}
          className="lg:hidden my-1 mx-2 space-y-2 rounded-lg border border-[#a8a29e]/60 shadow-inner shadow-[#726b6b]/50 p-2"
        >
          <Link to="/"
            className="block text-[#3b3533] hover:bg-gray-200 px-2 py-2 rounded-md"
          >
            Home
          </Link>
          <Link to="/about"
            className="block text-[#3b3533] hover:bg-gray-200 px-2 py-2 rounded-md"
          >
            About
          </Link>

          <Link to="/hosting"
            className="block text-[#3b3533] hover:bg-gray-200 px-2 py-2 rounded-md"
          >
            Hosting
          </Link>


          {/* Hosting Mobile Dropdown 
          <div>
            <button
              onClick={() => setHostingOpen(!hostingOpen)}
              className="w-full text-left flex justify-between items-center text-[#3b3533] hover:text-[#a0430a] px-2 py-2 rounded-md"
            >
              Hosting ▾
            </button>
            {hostingOpen && (
              <div
                style={{
                  backgroundImage: "linear-gradient(145deg, #403c3c, #c9ad8b)",
                }}
                className="mt-2 space-y-2 rounded-lg shadow-inner p-2"
              >
                {hostingPlans.map((plan, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-start gap-3 px-2 py-2 text-[#fff] hover:opacity-90 rounded-md transition-colors"
                  >
                    <plan.icon className="w-5 h-5 text-[#eee5da] mt-1" />
                    <div>
                      <p className="font-medium">{plan.title}</p>
                      <p className="text-sm font-['Roboto','sans-serif'] text-[#fdfcfc80]">{plan.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>  */}

          {/* Domain Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDomainOpen(!domainOpen)}
              className="w-full text-left flex justify-between items-center text-[#3b3533] hover:text-[#a0430a] px-2 py-2 rounded-md"
            >
              Domain ▾
            </button>
            {domainOpen && (
              <div
                style={{
                  backgroundImage: "linear-gradient(145deg, #403c3c, #c9ad8b)",
                }}
                className="mt-2 space-y-2 rounded-lg shadow-inner p-2"
              >
                {domainServices.map((service, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-start gap-3 px-2 py-2 text-[#fff] hover:opacity-90 rounded-md transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-[#eee5da] mt-1" />
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-sm font-['Roboto','sans-serif'] text-[#fdfcfc80]">{service.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact"
            className="block text-[#3b3533] hover:bg-gray-200 px-2 py-2 rounded-md"
          >
            Contact
          </Link>
          <a
            href="#"
            className="block text-[#3b3533] hover:bg-gray-200 px-2 py-2 rounded-md"
          >
            Affiliates
          </a>

          <a
            href="#"
            className="text-[#403c3c] my-3 border border-[#403c3c] px-3 py-2 rounded-full hover:bg-[#403c3c] hover:text-[#eee5da] transition-colors duration-200 block text-center"
          >
            Client Area
          </a>
        </div>
      )}
    </header>
  );
}
