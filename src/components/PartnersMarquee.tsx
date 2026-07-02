"use client";

import { motion } from "framer-motion";

export default function PartnersMarquee() {
  const partners = [
    { name: "ABB", logo: "/images/logos/abb.png" },
    { name: "Acrel", logo: "/images/logos/acrel.png" },
    { name: "Advantech", logo: "/images/logos/advantech.png" },
    { name: "Beckhoff", logo: "/images/logos/l_beckhoff.png" },
    { name: "BIT", logo: "/images/logos/bit.png" },
    { name: "Delta", logo: "/images/logos/delta.png" },
    { name: "Festo", logo: "/images/logos/festo.png" },
    { name: "Haiwell", logo: "/images/logos/haiwell.png" },
    { name: "HikVision", logo: "/images/logos/HikVision.png" },
    { name: "IFM", logo: "/images/logos/ifm.png" },
    { name: "Itron", logo: "/images/logos/Itron.png" },
    { name: "Kerlink", logo: "/images/logos/kerlink.png" },
    { name: "Omron", logo: "/images/logos/omron_industrial_automation_logo-600x315.png" },
    { name: "Rujie", logo: "/images/logos/rujie.png" },
    { name: "Schneider", logo: "/images/logos/schneider.png" },
    { name: "Siemens", logo: "/images/logos/siemens.png" },
    { name: "SMC", logo: "/images/logos/smc.png" },
    { name: "Submea", logo: "/images/logos/submea.png" },
    { name: "Teltonika", logo: "/images/logos/teltonika.png" },
    { name: "Weidmuller", logo: "/images/logos/weidmuller.png" },
    { name: "Yaskawa", logo: "/images/logos/yaskawa.png" },
    { name: "Yokogawa", logo: "/images/logos/yokogawa.png" },
  ];

  // Each logo card has a width of 192px (w-48) and a gap of 64px (gap-16).
  // Total width of one item + gap = 256px.
  const itemWidth = 512;
  const translationDistance = partners.length * itemWidth;

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
          animate={{ x: [0, -translationDistance] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Double the list to create infinite loop effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-48 h-16 glass rounded-lg opacity-65 hover:opacity-100 transition-opacity duration-300 p-3"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[85%] object-contain filter brightness-95 contrast-105"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector(".fallback-text");
                    if (fallback) fallback.classList.remove("hidden");
                  }
                }}
              />
              <span className="fallback-text hidden font-heading font-bold text-sm text-gray-300">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
