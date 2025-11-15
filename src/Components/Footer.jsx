import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#eee5da] py-16 px-6 sm:px-10 lg:px-20">
      
      {/* --- Top Footer Grid Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full mx-auto text-gray-700">
        
        {/* Brand & Socials */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          {/* Logo and text side by side */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="/logo 4.png"
              alt="Zuma Host Logo"
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <div className="text-2xl font-bold font-[Georgia,_serif] text-transparent bg-clip-text bg-gradient-to-r from-[#403c3c] to-[#c9ad8b]">
              Zuma Host
            </div>
          </div>

          <p className="font-['Roboto','sans-serif'] text-[#7f7060] leading-relaxed">
            Premium web hosting services with cutting-edge technology and unparalleled support.
          </p>

          <div className="flex space-x-3 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-[#a0430a] hover:bg-gradient-to-r hover:from-[#c9ad8b] hover:to-[#a0430a] transition-all"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-[#a0430a] font-[Georgia,_serif] font-semibold mb-3">Product</h3>
          <ul className="space-y-2 font-['Roboto','sans-serif'] text-[#403c3c] text-sm">
            <li><Link to="/hosting" className="hover:text-[#7f7060]">Hosting</Link></li>
            <li><Link to="/domain-registration" className="hover:text-[#7f7060]">Domain Registration</Link></li>
            <li><Link to="/domain" className="hover:text-[#7f7060]">Domain Transfer</Link></li>
            <li><Link to="/dns" className="hover:text-[#7f7060]">DNS Management</Link></li>
            <li><Link to="/web" className="hover:text-[#7f7060]">Web development</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[#a0430a] font-[Georgia,_serif] font-semibold mb-3">Company</h3>
          <ul className="space-y-2 font-['Roboto','sans-serif'] text-[#403c3c] text-sm">
            <li><Link to="/about" className="hover:text-[#7f7060]">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-[#7f7060]">Careers</Link></li>
            <li><Link to="/affiliate" className="hover:text-[#7f7060]">Affiliates</Link></li>
            <li><Link to="/press" className="hover:text-[#7f7060]">Press</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-[#a0430a] font-[Georgia,_serif] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 font-['Roboto','sans-serif'] text-[#403c3c] text-sm">
            <li><Link to="/documentation" className="hover:text-[#7f7060]">Documentation</Link></li>
            <li><Link to="/contact" className="hover:text-[#7f7060]">Support</Link></li>
            <li><Link to="/about" className="hover:text-[#7f7060]">API</Link></li>
            <li><Link to="/about" className="hover:text-[#7f7060]">Community</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile-only Legal Links */}
      <div className="md:hidden border-t font-[Georgia,_serif] border-gray-300 pt-6 mt-6 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-6">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>

      {/* Newsletter Section */}
    <div className="max-w-4xl mx-auto bg-[#fbf9f6] rounded-lg p-6 sm:flex sm:items-center sm:justify-between mt-14 mb-8">
      <div className="flex items-center space-x-3 mb-4 sm:mb-0">
      {/* Icon container with border */}
      <div className="border border-[#7f7060] text-[#7f7060] p-2 rounded-md flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12H8m0 0l4-4m-4 4l4 4m8 4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
      </svg>
    </div>

    {/* Text content */}
    <div>
      <h4 className="text-[#7f7060] font-[Georgia,_serif] font-medium">
        Subscribe to our newsletter
      </h4>
      <p className="text-[#403c3c] font-['Roboto','sans-serif'] text-sm">
        Get the latest updates and offers
      </p>
    </div>
  </div>

        <form className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 px-4 py-2 rounded-md bg-[#fbf9f6] border border-[#7f7060] text-[#403c3c] font-['Roboto','sans-serif'] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f7060]"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#c9ad8b] to-[#a0430a] text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition-all"
          > 
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-300 font-[Georgia,_serif] pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 max-w-7xl mx-auto">
        <p>© 2025 Zuma Host. All rights reserved.</p>
        <div className="hidden md:flex space-x-6">
          <Link to="/about">Privacy</Link>
          <Link to="/about">Terms</Link>
          <Link to="/about">Cookies</Link>
        </div>
      </div>

    </footer>
  );
}
