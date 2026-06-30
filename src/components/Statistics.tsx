"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="text-center p-6 glass rounded-2xl">
      <div className="font-heading text-5xl font-bold text-[#0099FF] mb-2 neon-text">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
};

export default function Statistics() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-[#00D4FF]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <Counter end={50} suffix="+" label="Projects Done" />
          <Counter end={30} suffix="+" label="Active Clients" />
          <Counter end={15} suffix="+" label="Tech Partners" />
          <Counter end={10} suffix="+" label="Years Experience" />
        </motion.div>
      </div>
    </section>
  );
}
