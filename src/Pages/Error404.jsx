import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fbf9f6] px-6 py-12">
      
      {/* Container */}
      <div className="text-center max-w-lg">
        
        {/* 🔥 Animated 404 Number (fade-in + continuous zoom) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.08, 1], // continuous zoom loop
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="text-[90px] sm:text-[120px] md:text-[160px] font-bold text-[#a0430a]/70"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-[#7f7060] mt-2"
        >
          Oops! Page Not Found
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base text-[#7f7060] mt-4 leading-relaxed"
        >
          The page you are looking for doesn’t exist or has been moved.  
          Try checking the URL or return back to the homepage.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link to="/"
            className="px-6 py-3 bg-[#a0430a] text-white text-sm sm:text-base rounded-md hover:bg-[#813808] transition shadow-md"
          >
            Go to Homepage
          </Link>

          <Link to="/contact"
            className="px-6 py-3 border border-[#a0430a] text-[#a0430a] text-sm sm:text-base rounded-md hover:bg-[#a0430a10] transition"
          >
            Contact Support
          </Link>
        </motion.div>

        {/* Extra note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-xs text-[#7f7060] mt-6"
        >
          Error Code: 404 - Page Not Found
        </motion.p>
      </div>
    </div>
  );
}
