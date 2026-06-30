"use client";

import { motion } from "framer-motion";

export default function PartnersMarquee() {
  const partners = Array(10).fill("Strategic Partner");

  return (
    <section className="py-20 border-y border-white/5 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="font-heading text-2xl font-bold text-gray-400">Our Partners</h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left and Right fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B1220]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B1220]/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex whitespace-nowrap gap-16 py-4 items-center"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Double the list to create infinite loop effect */}
          {[...partners, ...partners].map((_, index) => (
            <div key={index} className="flex items-center justify-center w-48 h-16 glass rounded-lg opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="font-heading font-bold text-lg text-gray-300">Logo {index + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
