"use client";

import { motion } from "framer-motion";
import { Network, MonitorSmartphone, Server, Activity, ArrowRightLeft } from "lucide-react";

export default function EcosystemDiagram() {
  const nodes = [
    { label: "Executive Dashboard", x: "50%", y: "15%", icon: <MonitorSmartphone size={20} /> },
    { label: "ERP Integration", x: "85%", y: "40%", icon: <Server size={20} /> },
    { label: "Production Monitoring", x: "15%", y: "40%", icon: <Activity size={20} /> },
    { label: "IoT Sensors", x: "30%", y: "85%", icon: <Network size={20} /> },
    { label: "Supply Chain", x: "70%", y: "85%", icon: <ArrowRightLeft size={20} /> },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-transparent relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0099FF]/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">Smart Manufacturing <span className="text-[#00D4FF]">Ecosystem</span></h2>
          <p className="text-gray-400">An interconnected environment where hardware and software work in perfect harmony.</p>
        </div>

        <div className="relative h-[500px] max-w-4xl mx-auto hidden md:block">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full glass flex items-center justify-center flex-col z-20 border-[#0099FF]/50 neon-border"
          >
            <span className="font-heading font-bold text-xl text-center">BIT<br/>Automation<br/>Core</span>
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
            {nodes.map((node, i) => (
              <motion.line
                key={`line-${i}`}
                x1="50%" y1="50%"
                x2={node.x} y2={node.y}
                stroke="url(#gradientLine)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            ))}
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0099FF" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbiting Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, type: "spring" }}
              className="absolute glass px-4 py-3 rounded-lg border-[#00D4FF]/30 flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap"
              style={{ left: node.x, top: node.y }}
            >
              <div className="text-[#00D4FF]">{node.icon}</div>
              <span className="font-medium text-sm">{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Mobile representation (List instead of complex diagram) */}
        <div className="md:hidden space-y-4">
          <div className="glass p-6 rounded-xl border-[#0099FF]/50 text-center mb-6">
            <h3 className="font-heading font-bold text-xl text-[#00D4FF]">BIT Automation Core</h3>
          </div>
          {nodes.map((node, i) => (
            <div key={i} className="glass p-4 rounded-lg flex items-center gap-4">
              <div className="p-2 bg-[#12284C] rounded-md text-[#0099FF]">{node.icon}</div>
              <span className="font-medium">{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
