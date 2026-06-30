"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EcosystemDiagram() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="ecosystem" className="py-24 bg-transparent relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0099FF]/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">Smart Manufacturing <span className="text-[#00D4FF]">Ecosystem</span></h2>
          <p className="text-gray-400">An interconnected environment where hardware and software work in perfect harmony.</p>
        </div>

        {/* Ecosystem Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsZoomed(true)}
          className="relative w-full max-w-5xl mx-auto glass rounded-2xl p-1.5 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-zoom-in group"
        >
          <div className="rounded-xl overflow-hidden relative bg-[#0b1220]/50">
            <img
              src="/images/ecosystem.png"
              alt="BIT Automation Smart Manufacturing Ecosystem Diagram"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          {/* Neon Glow Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0099FF]/10 to-[#00D4FF]/10 rounded-[36px] blur-2xl pointer-events-none -z-10 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[92vh] w-auto h-auto flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#0B1220]/50"
            >
              <img
                src="/images/ecosystem.png"
                alt="BIT Automation Smart Manufacturing Ecosystem Diagram"
                className="max-w-full max-h-[92vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white text-sm font-bold font-heading">
                Smart Manufacturing Ecosystem
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
