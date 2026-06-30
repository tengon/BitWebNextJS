"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGallery() {
  const projects = [
    { title: "RFID Warehouse Management", category: "Logistics", color: "from-blue-600 to-cyan-500" },
    { title: "LoRaWAN Gateway", category: "IoT Networks", color: "from-emerald-600 to-teal-500" },
    { title: "Temperature Busbar Monitoring", category: "Energy", color: "from-orange-600 to-red-500" },
    { title: "Power Monitoring System", category: "Utilities", color: "from-purple-600 to-pink-500" },
    { title: "Smart Water Monitoring", category: "Utilities", color: "from-blue-500 to-indigo-600" },
    { title: "Automation System", category: "Manufacturing", color: "from-teal-500 to-cyan-600" },
    { title: "SCADA System", category: "Control Systems", color: "from-red-500 to-orange-600" },
    { title: "Industrial IoT Platform", category: "Software", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00D4FF]">Projects</span></h2>
            <p className="text-gray-400 text-lg">A selection of our recent industrial transformation projects demonstrating our technical capability and innovation.</p>
          </div>
          <button className="px-6 py-3 rounded-md glass hover:bg-white/10 transition-colors whitespace-nowrap self-start md:self-auto">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Abstract Project Image background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110 z-0`}></div>
              <div className="absolute inset-0 bg-[#12284C]/80 z-0 group-hover:bg-[#12284C]/60 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-semibold text-gray-300">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} className="text-[#00D4FF]" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#00D4FF] transition-colors">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
