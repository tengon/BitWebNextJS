"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ArrowRight } from "lucide-react";

export default function FeaturedSolutions() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedTitle, setZoomedTitle] = useState<string>("");

  const solutions = [
    {
      title: "Overall Equipment Effectiveness (OEE)",
      slug: "oee",
      description: "Maximize your manufacturing productivity with real-time insights into availability, performance, and quality.",
      features: ["Real-time dashboard", "Downtime analysis", "Productivity analysis", "Automatic reports", "KPI monitoring"],
      color: "from-blue-600 to-cyan-500",
      imagePattern: "radial-gradient(circle at center, #0099FF 0%, transparent 70%)",
      image: "/images/oee.png",
      gradient: "from-[#0099FF]/20 to-[#00D4FF]/20",
      accentColor: "#0099FF",
    },
    {
      title: "Environment Monitoring System",
      slug: "environment-monitoring",
      description: "Ensure optimal conditions for your industrial processes and maintain compliance with environmental standards.",
      features: ["Temperature & Humidity", "Pressure monitoring", "Water consumption", "Alert notification", "Historical reporting"],
      color: "from-emerald-600 to-teal-500",
      imagePattern: "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
      image: "/images/environment-monitoring.png",
      gradient: "from-[#10b981]/20 to-[#34d399]/20",
      accentColor: "#10b981",
    },
    {
      title: "Vibration Monitoring System",
      slug: "vibration-monitoring",
      description: "Implement predictive maintenance strategies by detecting machine anomalies before they cause costly downtime.",
      features: ["Wireless sensors", "Predictive maintenance", "AI anomaly detection", "Cloud analytics", "Alert system"],
      color: "from-purple-600 to-pink-500",
      imagePattern: "radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)",
      image: "/images/predictive-vibration.png",
      gradient: "from-[#8b5cf6]/20 to-[#ec4899]/20",
      accentColor: "#8b5cf6",
    }
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-[#0099FF]">Solutions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Deep dive into our core offerings that have transformed operations for industry leaders.</p>
        </div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${solution.color} bg-opacity-20 text-white`}>
                  Featured
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 text-lg mb-8">{solution.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 size={20} style={{ color: solution.accentColor }} />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:gap-3 hover:opacity-90"
                  style={{ background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColor}99)` }}
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div 
                  onClick={() => {
                    setZoomedImage(solution.image);
                    setZoomedTitle(solution.title);
                  }}
                  className="glass rounded-2xl p-1.5 border-white/10 relative overflow-hidden group shadow-[0_10px_50px_rgba(0,0,0,0.3)] cursor-zoom-in"
                >
                  <div className="rounded-xl overflow-hidden relative bg-[#0b1220]/50">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-103 block"
                    />
                  </div>
                  <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal Popup */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
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
                src={zoomedImage}
                alt={zoomedTitle}
                className="max-w-full max-h-[92vh] object-contain rounded-xl"
              />
              {/* Overlay Title */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white text-sm font-bold font-heading">
                {zoomedTitle}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
