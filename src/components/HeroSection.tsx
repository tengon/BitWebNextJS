"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import Link from "next/link";

const slideshowImages = [
  "/images/our-services/industrial-automation.png",
  "/images/our-services/manufacture-solution.png",
  "/images/our-services/utilities.png",
  "/images/our-services/surveillance.png",
  "/images/our-services/tracking-solution.png",
  "/images/our-services/smart-industry.png"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isZoomed) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 4500); // Rotate every 4.5 seconds
    return () => clearInterval(timer);
  }, [isZoomed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Connecting Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00D4FF] neon-text">Creating The Future</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                Every bit of innovation drives us forward, shaping the future of technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="px-8 py-4 rounded-md bg-[#0099FF] text-white font-medium flex items-center gap-2 hover:bg-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,153,255,0.6)] transition-all duration-300"
                >
                  Explore Solutions <ArrowRight size={18} />
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-md glass text-white font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image Slideshow */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div className="relative w-full max-w-[1536px] aspect-[3/2] glass rounded-2xl p-1.5 border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 1, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: "-100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  onClick={() => setIsZoomed(true)}
                  className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0b1220]/50 cursor-zoom-in"
                >
                  <img
                    src={slideshowImages[currentIndex]}
                    alt={servicesData[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bullet indicators */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {servicesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-[#00D4FF] w-6" : "bg-white/30 hover:bg-white/60"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Pulsing neon tech glow effect in background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0099FF]/10 to-[#00D4FF]/10 rounded-[40px] blur-2xl pointer-events-none -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>

      {/* Zoom Modal Popup */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Zoomed Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[92vh] w-auto h-auto flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#0B1220]/50"
            >
              <img
                src={slideshowImages[currentIndex]}
                alt={servicesData[currentIndex].title}
                className="max-w-full max-h-[92vh] object-contain rounded-xl"
              />
              {/* Overlay Title */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white text-sm font-bold font-heading">
                {servicesData[currentIndex].title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
