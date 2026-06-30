"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Database, Handshake, TrendingUp } from "lucide-react";

export default function VisionMission() {
  const missions = [
    { icon: <Lightbulb className="text-[#00D4FF]" size={28} />, text: "Develop innovative automation and IoT solutions." },
    { icon: <ShieldCheck className="text-[#00D4FF]" size={28} />, text: "Provide reliable, secure, and integrated systems." },
    { icon: <Database className="text-[#00D4FF]" size={28} />, text: "Support data-driven decision making." },
    { icon: <Handshake className="text-[#00D4FF]" size={28} />, text: "Build strategic technology partnerships." },
    { icon: <TrendingUp className="text-[#00D4FF]" size={28} />, text: "Promote continuous improvement and human resource development." },
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        
        {/* Vision */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl font-bold mb-8 text-[#0099FF]">Our Vision</h2>
            <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0099FF] to-[#00D4FF]"></div>
              <p className="text-xl md:text-2xl text-white font-heading font-medium leading-relaxed italic">
                "Become a leading provider of innovative, efficient, and sustainable automation and IoT solutions that drive industrial digital transformation nationally and globally."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-[#00D4FF]">Our Mission</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border-t border-[#00D4FF]/20 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#12284C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neon-border">
                  {mission.icon}
                </div>
                <p className="text-gray-300 font-medium text-lg">{mission.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
