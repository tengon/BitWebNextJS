"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import type { ServiceData } from "@/lib/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as LucideIcons from "lucide-react";

type Props = {
  service: ServiceData;
  prevService: ServiceData | null;
  nextService: ServiceData | null;
};

export default function ServiceDetailClient({ service, prevService, nextService }: Props) {
  const IconComponent = (LucideIcons as any)[service.iconName];

  return (
    <main className="min-h-screen bg-[#0B1220] flex flex-col relative">
      {/* Global Background for Service Page */}
      <div className="fixed inset-0 z-0 bg-[#0B1220]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40" style={{ backgroundImage: `url('${service.bgImage}')`, backgroundPosition: 'center 80px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/60 via-[#0B1220]/70 to-[#0B1220]"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0099FF]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* ===== HERO BANNER ===== */}
        <section className="relative pt-32 pb-5 overflow-hidden bg-transparent">
          <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/#services" className="inline-flex items-center gap-2 text-white-400 hover:text-[#00D4FF] transition-colors mb-10 text-sm font-medium group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#12284C] to-[#0B1220] border border-[#0099FF]/40 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,153,255,0.2)]"
            >
              {IconComponent && <IconComponent size={44} className="text-[#00D4FF]" />}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-[#00D4FF] font-medium tracking-widest uppercase text-sm mb-2">{service.tagline}</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE IMAGE SHOWCASE ===== */}
      <section className="pb-5 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10   }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[100%] mx-auto h-[250px] md:h-[100%] rounded-2xl md:rounded-3xl p-1.5 glass border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="w-full h-full relative rounded-xl md:rounded-2xl overflow-hidden bg-[#0b1220]/50">
              <img
                src={service.bgImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0099FF]/10 to-[#00D4FF]/10 rounded-[36px] blur-2xl pointer-events-none -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* ===== OVERVIEW SECTION ===== */}
      <section className="py-5 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 1, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-5xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00D4FF]">Overview</span>
                </h2>
                <div className="space-y-6">
                  {service.detailedParagraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-2xl border-[#0099FF]/20 sticky top-32">
                <h3 className="font-heading text-2xl font-bold mb-3">Need this solution?</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Our engineering team is ready to design and implement a custom {service.title.toLowerCase()} strategy tailored specifically for your facility.
                </p>
                <Link
                  href="/#contact"
                  className="w-full py-4 bg-gradient-to-r from-[#0099FF] to-[#00D4FF] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,153,255,0.4)] transition-all flex items-center justify-center gap-2 mb-6"
                >
                  <PhoneCall size={18} /> Contact Our Experts
                </Link>

                {/* Technologies */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-wider mb-4">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-[#12284C] text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Key Features & Capabilities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive capabilities designed to transform your operations from the ground up.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass p-8 rounded-2xl border-[#00D4FF]/10 hover:border-[#0099FF]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0099FF]/10 flex items-center justify-center group-hover:bg-[#0099FF]/20 transition-colors">
                    <CheckCircle2 size={20} className="text-[#00D4FF]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00D4FF]">{service.title}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Measurable results that impact your bottom line.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => {
              const BenefitIcon = (LucideIcons as any)[benefit.iconName];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#12284C]/50 to-transparent border border-white/5 hover:border-[#0099FF]/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0099FF]/10 flex items-center justify-center mx-auto mb-6">
                    {BenefitIcon && <BenefitIcon size={28} className="text-[#00D4FF]" />}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== USE CASES SECTION ===== */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Real-World Use Cases</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Proven implementations across industries that deliver tangible results.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 flex flex-col"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full mb-4 self-start">
                  {useCase.industry}
                </span>
                <h3 className="font-heading font-bold text-xl mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0099FF]/20 to-[#00D4FF]/20"></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${service.bgImage}')` }}></div>
            <div className="absolute inset-0 border border-[#0099FF]/20 rounded-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our {service.title.toLowerCase()} solutions can help your business achieve measurable improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#0099FF] to-[#00D4FF] text-white font-bold hover:shadow-[0_0_30px_rgba(0,153,255,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall size={18} /> Get a Free Consultation
                </Link>
                <Link
                  href="/#services"
                  className="px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Explore Other Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PREV / NEXT NAVIGATION ===== */}
      <section className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link href={`/services/${prevService.slug}`} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Previous Service</p>
                  <p className="font-heading font-bold">{prevService.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextService ? (
              <Link href={`/services/${nextService.slug}`} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-right">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Next Service</p>
                  <p className="font-heading font-bold">{nextService.title}</p>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  );
}
