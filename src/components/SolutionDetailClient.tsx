"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, PhoneCall, ArrowRight, TrendingUp } from "lucide-react";
import type { SolutionData } from "@/lib/solutionsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as LucideIcons from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const IconComponent = (LucideIcons as any)[solution.iconName];

  const accentStyle = { color: solution.accentColor };
  const accentBgStyle = { backgroundColor: `${solution.accentColor}18` };
  const accentBorderStyle = { borderColor: `${solution.accentColor}40` };
  const glowStyle = { boxShadow: `0 0 30px ${solution.accentColor}33` };

  return (
    <main className="min-h-screen bg-[#0B1220] flex flex-col relative">
      {/* ===== GLOBAL BACKGROUND ===== */}
      <div className="fixed inset-0 z-0 bg-[#0B1220]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ backgroundImage: `url('${solution.bgImage}')`, backgroundPosition: "center 80px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/75 to-[#0B1220]" />
        <div
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-20"
          style={{ backgroundColor: solution.accentColor }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
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
                href="/#solutions"
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
              >
                <p
                  className="font-medium tracking-widest uppercase text-sm mb-2"
                  style={accentStyle}
                >
                  {solution.tagline}
                </p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">{solution.title}</h1>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">{solution.shortDescription}</p>
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
              className="relative w-full max-w-[100%] mx-auto h-[250px] md:h-[100%] rounded-2xl md:rounded-3xl p-1.5 glass border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="w-full h-full relative rounded-xl md:rounded-2xl overflow-hidden bg-[#0b1220]/50">
                <img
                  src={solution.bgImage}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h2 className="font-heading text-5xl font-bold">
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
                    <div className="max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({ node, ...props }) => (
                            <div className="w-full overflow-x-auto my-10 rounded-2xl border shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
                              style={{ borderColor: `${solution.accentColor}30`, backgroundColor: `${solution.accentColor}05` }}>
                              <table className="w-full text-left border-collapse" {...props} />
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
                                <span className="block my-10 p-8 rounded-3xl border shadow-2xl relative overflow-hidden bg-[#0B1220]/80 backdrop-blur-md"
                                  style={{ borderColor: `${solution.accentColor}40` }}>
                                  <span className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-2xl pointer-events-none"></span>
                                  <span className="relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-3xl md:text-5xl font-heading font-black tracking-wider leading-relaxed">
                                    <span className="text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">OEE</span>
                                    <span className="text-gray-300 font-light">=</span>
                                    <span className="text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">Availability</span>
                                    <span className="text-gray-500 font-light text-2xl md:text-4xl">×</span>
                                    <span className="text-[#f59e0b] drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">Performance</span>
                                    <span className="text-gray-500 font-light text-2xl md:text-4xl">×</span>
                                    <span className="text-[#8b5cf6] drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">Quality</span>
                                  </span>
                                </span>
                              );
                            }

                            return <strong className="font-bold text-white tracking-wide" {...props} />;
                          },
                          h2: ({ node, ...props }) => (
                            <h2 className="text-3xl font-heading font-bold text-white mt-14 mb-8 flex items-center gap-4" {...props}>
                              <span className="w-2.5 h-8 rounded-full shadow-[0_0_15px_currentColor]" style={{ backgroundColor: solution.accentColor, color: solution.accentColor }}></span>
                              {props.children}
                            </h2>
                          ),
                          ul: ({ node, ...props }) => (
                            <ul className="space-y-4 my-8" {...props} />
                          ),
                          li: ({ node, ...props }) => (
                            <li className="flex items-start gap-4 text-gray-300 leading-relaxed text-lg group" {...props}>
                              <div className="mt-2.5 w-2 h-2 rounded-full shrink-0 shadow-[0_0_10px_currentColor] transition-transform duration-300 group-hover:scale-150"
                                style={{ backgroundColor: solution.accentColor, color: solution.accentColor }}></div>
                              <span className="flex-1">{props.children}</span>
                            </li>
                          ),
                          p: ({ node, ...props }) => {
                            return <p className="text-gray-300 text-lg leading-relaxed mb-6" {...props} />
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
              <div className="lg:col-span-1">
                <div className="glass p-8 rounded-2xl sticky top-32" style={accentBorderStyle}>
                  <h3 className="font-heading text-2xl font-bold mb-3">Need this solution?</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Our engineering team is ready to design and implement a custom{" "}
                    {solution.title.toLowerCase()} strategy tailored specifically for your facility.
                  </p>
                  <Link
                    href="/#contact"
                    className="w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mb-6"
                    style={{
                      background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})`,
                    }}
                  >
                    <PhoneCall size={18} /> Contact Our Experts
                  </Link>

                  {/* Key Stats */}
                  <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                    {solution.benefits.slice(0, 4).map((benefit, idx) => (
                      benefit.stat && (
                        <div key={idx} className="text-center">
                          <p className="font-heading font-bold text-2xl" style={accentStyle}>
                            {benefit.stat}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{benefit.title}</p>
                        </div>
                      )
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-white/10 pt-6 mt-6">
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
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                      style={accentBgStyle}
                    >
                      <CheckCircle2 size={20} style={accentStyle} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">{feature.title}</h3>
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
                Why Choose Our{" "}
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
                const BenefitIcon = (LucideIcons as any)[benefit.iconName];
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
                      {BenefitIcon && <BenefitIcon size={28} style={accentStyle} />}
                    </div>
                    {benefit.stat && (
                      <p
                        className="font-heading font-bold text-3xl mb-2"
                        style={accentStyle}
                      >
                        {benefit.stat}
                      </p>
                    )}
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
              className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
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
                    className="px-8 py-4 rounded-lg text-white font-bold transition-all flex items-center justify-center gap-2 hover:opacity-90"
                    style={{
                      background: `linear-gradient(to right, ${solution.accentColor}, ${solution.accentColorSecondary})`,
                      boxShadow: `0 0 30px ${solution.accentColor}44`,
                    }}
                  >
                    <PhoneCall size={18} /> Get a Free Consultation
                  </Link>
                  <Link
                    href="/#solutions"
                    className="px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
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
            <div className="flex justify-between items-center">
              {prevSolution ? (
                <Link
                  href={`/solutions/${prevSolution.slug}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Previous Solution</p>
                    <p className="font-heading font-bold">{prevSolution.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextSolution ? (
                <Link
                  href={`/solutions/${nextSolution.slug}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-right"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Next Solution</p>
                    <p className="font-heading font-bold">{nextSolution.title}</p>
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
