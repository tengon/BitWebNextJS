"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">About BIT Automation</h2>
            <div className="w-20 h-1 bg-[#0099FF] mb-8 rounded-full"></div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              BIT Automation is a technology company specializing in industrial automation, Internet of Things (IoT), electrical systems, instrumentation, control systems, and digital transformation solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We provide innovative, efficient, and sustainable technologies to help industries improve productivity, operational efficiency, and data-driven decision making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl glass p-2 overflow-hidden border-[#0099FF]/20 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0099FF]/20 to-transparent mix-blend-overlay z-10"></div>
              {/* About Image */}
              <div className="w-full h-full bg-[#12284C]/50 rounded-xl relative overflow-hidden">
                <img
                  src="/images/about.png"
                  alt="About BIT Automation"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#0099FF_2px,transparent_2px)] [background-size:12px_12px] opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#00D4FF_2px,transparent_2px)] [background-size:16px_16px] opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
