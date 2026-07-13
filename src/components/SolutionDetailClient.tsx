"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, PhoneCall, ArrowRight, type LucideIcon } from "lucide-react";
import { solutionsData, type SolutionData } from "@/lib/solutionsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as LucideIcons from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

const lucideIconMap = LucideIcons as unknown as Record<string, LucideIcon | undefined>;

type Props = {
  solution: SolutionData;
  prevSolution: SolutionData | null;
  nextSolution: SolutionData | null;
  contentEng?: string;
  contentInd?: string;
};

export default function SolutionDetailClient({ solution, prevSolution, nextSolution, contentEng, contentInd }: Props) {
  const [lang, setLang] = useState<"eng" | "ind">("eng");
  const hasMarkdown = !!(contentEng || contentInd);
  const currentMarkdown = lang === "eng" ? contentEng : contentInd;
  const IconComponent = lucideIconMap[solution.iconName];

  const accentStyle = { color: solution.accentColor };
  const accentBgStyle = { backgroundColor: `${solution.accentColor}18` };
  const accentBorderStyle = { borderColor: `${solution.accentColor}40` };

  return (
    <main className="min-h-screen bg-[#0B1220] flex flex-col relative overflow-hidden">
      {/* ===== GLOBAL BACKGROUND ===== */}
      <div className="fixed inset-0 z-0 bg-[#0B1220]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-30"
          style={{ backgroundImage: `url('${solution.bgImage}')`, backgroundPosition: "center 80px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/75 to-[#0B1220]" />
        <div
          className="absolute top-1/3 left-1/2 md:left-1/3 -translate-x-1/2 -translate-y-1/2 w-[min(700px,120vw)] h-[min(700px,120vw)] rounded-full blur-[120px] md:blur-[180px] opacity-20"
          style={{ backgroundColor: solution.accentColor }}
        />
        <div
          className="absolute bottom-0 right-0 md:right-1/4 w-[min(400px,90vw)] h-[min(400px,90vw)] rounded-full blur-[90px] md:blur-[120px] opacity-10"
          style={{ backgroundColor: solution.accentColorSecondary }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* ===== HERO BANNER ===== */}
        <section className="relative pt-32 pb-5 overflow-hidden bg-transparent">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 text-sm font-medium group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to All Solutions
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 rounded-2xl border flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, #12284C, #0B1220)`,
                  borderColor: `${solution.accentColor}40`,
                  boxShadow: `0 0 30px ${solution.accentColor}22`,
                }}
              >
                {IconComponent && <IconComponent size={44} style={accentStyle} />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="min-w-0"
              >
                <p
                  className="font-medium tracking-widest uppercase text-sm mb-2"
                  style={accentStyle}
                >
                  {solution.tagline}
                </p>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-4 break-words">{solution.title}</h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{solution.shortDescription}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SOLUTION IMAGE SHOWCASE ===== */}
        <section className="pb-5 bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full mx-auto h-[220px] sm:h-[300px] md:h-auto md:aspect-[6/4] rounded-2xl md:rounded-3xl p-1.5 glass border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="w-full h-full relative rounded-xl md:rounded-2xl overflow-hidden bg-[#0b1220]/50">
                <img
                  src={solution.bgImage}
                  alt={solution.title}
                  className="h-full relative object-cover transition-transform duration-1000 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent" />
              </div>
              <div
                className="absolute -inset-4 rounded-[36px] blur-2xl pointer-events-none -z-10 animate-pulse opacity-30"
                style={{ background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})` }}
              />
            </motion.div>
          </div>
        </section>

        {/* ===== OVERVIEW SECTION ===== */}
        <section className="py-5 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">

              {/* Main Content */}
              <div className="lg:col-start-2 min-w-0">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
                      <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})` }}
                      >
                        Overview
                      </span>
                    </h2>

                    {hasMarkdown && contentEng && contentInd && (
                      <div className="flex bg-[#12284C]/50 rounded-lg p-1 border border-white/10 w-fit">
                        <button
                          onClick={() => setLang("eng")}
                          className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${lang === "eng" ? "bg-white/10 text-white shadow-sm" : "text-gray-400 hover:text-gray-200"}`}
                        >
                          English
                        </button>
                        <button
                          onClick={() => setLang("ind")}
                          className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${lang === "ind" ? "bg-white/10 text-white shadow-sm" : "text-gray-400 hover:text-gray-200"}`}
                        >
                          Bahasa Indonesia
                        </button>
                      </div>
                    )}
                  </div>

                  {hasMarkdown && currentMarkdown ? (
                    <div className="max-w-none overflow-hidden break-words">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({ node, ...props }) => (
                            <div className="w-full overflow-x-auto my-10 rounded-2xl border shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
                              style={{ borderColor: `${solution.accentColor}30`, backgroundColor: `${solution.accentColor}05` }}>
                              <table className="min-w-[640px] w-full text-left border-collapse" {...props} />
                            </div>
                          ),
                          th: ({ node, ...props }) => (
                            <th className="px-6 py-5 text-sm font-heading font-bold uppercase tracking-wider text-white border-b"
                              style={{ backgroundColor: `${solution.accentColor}25`, borderColor: `${solution.accentColor}40` }} {...props} />
                          ),
                          td: ({ node, ...props }) => (
                            <td className="px-6 py-4 border-b text-gray-300 transition-colors hover:bg-white/5 text-base leading-relaxed"
                              style={{ borderColor: `${solution.accentColor}15` }} {...props} />
                          ),
                          strong: ({ node, ...props }) => {
                            const text = props.children?.toString() || "";

                            // Check if this bold text is the OEE formula
                            if (text.includes("OEE = ") && text.includes("Availability")) {
                              return (
                                <span className="block my-8 md:my-10 p-5 sm:p-8 rounded-2xl md:rounded-3xl border shadow-2xl relative overflow-hidden bg-[#0B1220]/80 backdrop-blur-md"
                                  style={{ borderColor: `${solution.accentColor}40` }}>
                                  <span className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-2xl pointer-events-none"></span>
                                  <span className="relative z-10 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-3 sm:gap-y-4 text-xl sm:text-3xl md:text-5xl font-heading font-black tracking-normal leading-relaxed">
                                    <span className="text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">OEE</span>
                                    <span className="text-gray-300 font-light">=</span>
                                    <span className="text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">Availability</span>
                                    <span className="text-gray-500 font-light text-lg sm:text-2xl md:text-4xl">{"\u00d7"}</span>
                                    <span className="text-[#f59e0b] drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">Performance</span>
                                    <span className="text-gray-500 font-light text-lg sm:text-2xl md:text-4xl">{"\u00d7"}</span>
                                    <span className="text-[#8b5cf6] drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">Quality</span>
                                  </span>
                                </span>
                              );
                            }

                            return <strong className="font-bold text-white tracking-wide" {...props} />;
                          },
                          h2: ({ node, ...props }) => (
                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-12 md:mt-14 mb-6 md:mb-8 flex items-start sm:items-center gap-3 sm:gap-4 break-words" {...props}>
                              <span className="w-2.5 h-7 sm:h-8 rounded-full shrink-0 shadow-[0_0_15px_currentColor]" style={{ backgroundColor: solution.accentColor, color: solution.accentColor }}></span>
                              {props.children}
                            </h2>
                          ),
                          ul: ({ node, ...props }) => (
                            <ul className="space-y-4 my-8" {...props} />
                          ),
                          li: ({ node, ...props }) => (
                            <li className="flex items-start gap-3 sm:gap-4 text-gray-300 leading-relaxed text-base sm:text-lg group min-w-0" {...props}>
                              <div className="mt-2.5 w-2 h-2 rounded-full shrink-0 shadow-[0_0_10px_currentColor] transition-transform duration-300 group-hover:scale-150"
                                style={{ backgroundColor: solution.accentColor, color: solution.accentColor }}></div>
                              <span className="flex-1">{props.children}</span>
                            </li>
                          ),
                          p: ({ node, ...props }) => {
                            return <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6" {...props} />
                          }
                        }}
                      >
                        {currentMarkdown}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {solution.detailedParagraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-300 text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-start-1 lg:row-start-1">
                <div className="glass rounded-2xl sticky top-32 overflow-hidden" style={accentBorderStyle}>
                  <div className="p-5 border-b border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={accentStyle}>Solutions</p>
                    <h3 className="font-heading text-2xl font-bold">Choose a Solution</h3>
                  </div>

                  <nav className="p-3 flex flex-col gap-1">
                    {solutionsData.map((item) => {
                      const SolutionIcon = lucideIconMap[item.iconName];
                      const isActive = item.slug === solution.slug;

                      return (
                        <Link
                          key={item.slug}
                          href={`/solutions/${item.slug}`}
                          className={cn(
                            "flex items-center gap-3 rounded-xl p-3 text-left transition-all border",
                            isActive ? "text-white shadow-[0_0_20px_rgba(0,153,255,0.12)]" : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                          )}
                          style={isActive ? { backgroundColor: `${solution.accentColor}18`, borderColor: `${solution.accentColor}55` } : undefined}
                        >
                          <span
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: isActive ? `${solution.accentColor}18` : "rgba(255,255,255,0.05)",
                              color: isActive ? solution.accentColor : "#9ca3af",
                            }}
                          >
                            {SolutionIcon && <SolutionIcon size={17} />}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-tight">{item.title}</span>
                            <span className="block text-xs text-gray-500 leading-snug mt-1">{item.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="p-5 border-t border-white/10">
                    <h3 className="font-heading text-xl font-bold mb-3">Need this solution?</h3>
                    <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                      Our engineering team is ready to design and implement a custom{" "}
                      <strong>{solution.title}</strong> strategy for your facility.
                    </p>
                    <Link
                      href="/#contact"
                      className="w-full py-3 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                      style={{
                        background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})`,
                      }}
                    >
                      <PhoneCall size={18} /> Contact Our Experts
                    </Link>
                  </div>

                  {/* Key Stats */}
                  {/*<div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                    {solution.benefits.slice(0, 4).map((benefit, idx) => (
                      
                      benefit.iconName && (
                        <div key={idx} className="text-center">
                          <p className="font-heading font-bold text-2xl" style={accentStyle}>
                            {benefit.stat}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{benefit.title}</p>
                        </div>
                      )
                    ))}
                  </div>*/}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 px-5 pt-5">
                    {solution.benefits.map((benefit, idx) => {
                      const BenefitIcon = lucideIconMap[benefit.iconName];
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-center p-4 rounded-2xl bg-gradient-to-b from-[#12284C]/50 to-transparent border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                          <div
                            className="w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            style={accentBgStyle}
                          >
                            {BenefitIcon && <BenefitIcon className="w-9 h-9 sm:w-12 sm:h-12 xl:w-16 xl:h-16" style={accentStyle} />}
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-400 mb-3 break-words">{benefit.title}</h3>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-white/10 p-5 mt-6">
                    <h4 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-wider mb-4">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#12284C] text-gray-300 border border-white/5"
                        >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Key Features &amp; Capabilities</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive capabilities designed to transform your operations from the ground up.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {solution.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass p-8 rounded-2xl border-transparent hover:border-white/20 transition-all duration-300 group"
                  style={{ borderColor: "transparent" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${solution.accentColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                    <div
                      className="w-24 h-24 rounded-xl flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105"
                      style={accentBgStyle}
                    >
                      {feature.icon ? (
                        <Image
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          width={1000}
                          height={1000}
                          className="w-20 h-20 object-contain"
                        />
                      ) : (
                        <CheckCircle2
                          size={240}
                          style={accentStyle}
                        />
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white break-words">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFITS SECTION ===== */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                With{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})` }}
                >
                  {solution.title}
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Measurable results that impact your bottom line.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.benefits.map((benefit, idx) => {
                const BenefitIcon = lucideIconMap[benefit.iconName];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#12284C]/50 to-transparent border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={accentBgStyle}
                    >
                      {BenefitIcon && <BenefitIcon size={40} style={accentStyle} />}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Real-World Use Cases</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Proven implementations across industries that deliver tangible results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solution.useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col"
                >
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start"
                    style={{ color: solution.accentColor, backgroundColor: `${solution.accentColor}18` }}
                  >
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
              className="relative rounded-3xl overflow-hidden p-6 sm:p-10 md:p-16 text-center"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})` }}
              />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url('${solution.bgImage}')` }}
              />
              <div
                className="absolute inset-0 border rounded-3xl"
                style={{ borderColor: `${solution.accentColor}30` }}
              />

              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss how our {solution.title.toLowerCase()} solution can help your business achieve
                  measurable improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="px-5 sm:px-8 py-4 rounded-lg text-white font-bold transition-all flex items-center justify-center gap-2 hover:opacity-90"
                    style={{
                      background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})`,
                      boxShadow: `0 0 30px ${solution.accentColor}44`,
                    }}
                  >
                    <PhoneCall size={18} /> Get a Free Consultation
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-5 sm:px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    Explore Other Solutions
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== PREV / NEXT NAVIGATION ===== */}
        <section className="py-12 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6">
              {prevSolution ? (
                <Link
                  href={`/solutions/${prevSolution.slug}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors min-w-0"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Previous Solution</p>
                    <p className="font-heading font-bold break-words">{prevSolution.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextSolution ? (
                <Link
                  href={`/solutions/${nextSolution.slug}`}
                  className="group flex items-center justify-end gap-3 text-gray-400 hover:text-white transition-colors text-right min-w-0"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Next Solution</p>
                    <p className="font-heading font-bold break-words">{nextSolution.title}</p>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
