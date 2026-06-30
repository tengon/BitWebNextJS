"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/servicesData";
import * as LucideIcons from "lucide-react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#12284C]/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00D4FF]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Comprehensive technology solutions designed to digitize, monitor, and automate every aspect of your industrial operations.
          </motion.p>
        </div>

        <div className="space-y-32">
          {servicesData.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.iconName];

            // Set different gradient color borders for each service card/border
            const colorGradients = [
              "from-blue-600 to-cyan-500",
              "from-emerald-600 to-teal-500",
              "from-orange-600 to-red-500",
              "from-purple-600 to-pink-500",
              "from-blue-500 to-indigo-600",
              "from-teal-500 to-cyan-600"
            ];
            const currentGradient = colorGradients[index % colorGradients.length];

            return (
              <div
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
              >
                {/* Details Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:flex-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-[#12284C] rounded-lg border border-[#0099FF]/25 shadow-[0_0_15px_rgba(0,153,255,0.15)]">
                      {IconComponent && <IconComponent size={20} className="text-[#00D4FF]" />}
                    </div>
                    <span className="text-[#00D4FF] font-heading font-semibold uppercase tracking-wider text-xs">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Features list (grid of 4 features) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.slice(0, 4).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#00D4FF] mt-0.5 shrink-0" size={18} />
                        <div>
                          <h4 className="font-heading font-semibold text-white text-sm">{feature.title}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0099FF] text-white font-bold hover:bg-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,153,255,0.4)] transition-all duration-300"
                  >
                    Read More Details <ArrowRight size={18} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:flex-1"
                >
                  <div className="glass rounded-2xl p-1.5 border-white/10 relative overflow-hidden group shadow-[0_10px_50px_rgba(0,0,0,0.3)]">
                    {/* The Background/Service Image */}
                    <div className="rounded-xl overflow-hidden relative">
                      <img
                        src={service.bgImage}
                        /*className="w-full h-auto transition-transform duration-700 group-hover:scale-105 block"*/
                        alt={service.title}
                      />
                      {/* Dark overlay for futuristic tech feel */}
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none"></div>*/}
                      <div className="absolute inset-0 bg-[#0B1220]/10 mix-blend-overlay pointer-events-none"></div>
                    </div>

                    {/* Futuristic Tech Frame border glow */}
                    <div className={`absolute inset-0 rounded-1xl border border-transparent bg-gradient-to-br ${currentGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
