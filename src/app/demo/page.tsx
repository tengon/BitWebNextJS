"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoApps = [
  {
    id: "oee",
    title: "OEE & Machine Monitoring",
    description:
      "Monitor Overall Equipment Effectiveness secara real-time. Pantau performa mesin, downtime, dan efisiensi produksi dalam satu dashboard terintegrasi.",
    href: "#",
    external: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-[#0099FF] to-[#00D4FF]",
    glowColor: "rgba(0, 153, 255, 0.3)",
    tag: "Manufacturing",
    available: false,
    bgImage: null,
  },
  {
    id: "hse",
    title: "HSE",
    description:
      "Health, Safety & Environment monitoring system. Kelola keselamatan kerja, deteksi risiko, dan pastikan kepatuhan HSE standar internasional secara otomatis.",
    href: "#",
    external: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-[#22C55E] to-[#16A34A]",
    glowColor: "rgba(34, 197, 94, 0.3)",
    tag: "Safety",
    available: false,
    bgImage: null,
  },
  {
    id: "tracking",
    title: "Tracking",
    description:
      "Sistem pelacakan aset dan kendaraan secara real-time dengan GPS terintegrasi. Optimalkan rute, monitor posisi, dan tingkatkan efisiensi operasional fleet Anda.",
    href: "http://track.bitautomation.id",
    external: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-[#F59E0B] to-[#EF4444]",
    glowColor: "rgba(245, 158, 11, 0.3)",
    tag: "Fleet & Asset",
    available: true,
    bgImage: "/images/demo/trackBack.jpg",
  },
  {
    id: "environment",
    title: "Environment Monitoring",
    description:
      "Monitor kondisi lingkungan secara komprehensif — kualitas udara, suhu, kelembaban, dan parameter lingkungan lainnya dengan sensor IoT presisi tinggi.",
    href: "#",
    external: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-[#10B981] to-[#06B6D4]",
    glowColor: "rgba(16, 185, 129, 0.3)",
    tag: "Environment",
    available: false,
    bgImage: null,
  },
  {
    id: "bms",
    title: "BMS",
    description:
      "Building Monitoring System untuk pengelolaan gedung cerdas. Kontrol HVAC, pencahayaan, keamanan, dan konsumsi energi dalam satu platform terpadu.",
    href: "#",
    external: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-[#8B5CF6] to-[#6366F1]",
    glowColor: "rgba(139, 92, 246, 0.3)",
    tag: "Smart Building",
    available: false,
    bgImage: null,
  },
  {
    id: "cctv",
    title: "CCTV & VMS",
    description:
      "Video Management System berbasis AI untuk pengawasan 24/7. Deteksi objek, analitik video cerdas, dan manajemen kamera terpusat untuk keamanan maksimal.",
    href: "#",
    external: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-[#EC4899] to-[#EF4444]",
    glowColor: "rgba(236, 72, 153, 0.3)",
    tag: "Security",
    available: false,
    bgImage: null,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B1220] relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0099FF]/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10B981]/4 rounded-full blur-[120px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Hero */}
        <section className="relative pt-36 pb-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              Live Demo Applications
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Coba Sistem Kami{" "}
            <span className="bg-gradient-to-r from-[#0099FF] to-[#00D4FF] bg-clip-text text-transparent">
              Secara Langsung
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Eksplorasi demo interaktif dari solusi industri BIT Automation. Rasakan
            sendiri bagaimana teknologi kami bekerja untuk meningkatkan efisiensi
            operasional bisnis Anda.
          </motion.p>
        </section>

        {/* Cards Grid */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-6 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {demoApps.map((app) => (
              <motion.div key={app.id} variants={cardVariants}>
                <DemoCard app={app} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center text-sm text-gray-500 mt-14"
          >
            Demo yang belum tersedia akan segera diluncurkan.{" "}
            <Link href="/#contact" className="text-[#00D4FF] hover:underline">
              Hubungi kami
            </Link>{" "}
            untuk informasi lebih lanjut.
          </motion.p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DemoCard({ app }: { app: (typeof demoApps)[number] }) {
  const CardWrapper = app.available
    ? ({ children, className }: { children: React.ReactNode; className: string }) => (
        <a
          href={app.href}
          target={app.external ? "_blank" : undefined}
          rel={app.external ? "noopener noreferrer" : undefined}
          className={className}
        >
          {children}
        </a>
      )
    : ({ children, className }: { children: React.ReactNode; className: string }) => (
        <div className={className}>{children}</div>
      );

  return (
    <CardWrapper
      className={`group relative flex flex-col h-full rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
        app.available
          ? "hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl cursor-pointer"
          : "opacity-85 cursor-default"
      }`}
    >
      {/* ── Background image or fallback dark ── */}
      {app.bgImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${app.bgImage})` }}
          />
          {/* Dark overlay — strong at bottom, lighter at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          {/* Colored tint overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#0d1a2d]" />
          {/* Subtle gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-[0.05]`}
          />
        </>
      )}

      {/* Glow border on hover */}
      {app.available && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{ boxShadow: `inset 0 0 80px ${app.glowColor}` }}
        />
      )}

      {/* Top gradient bar */}
      <div className={`relative z-10 h-1 w-full bg-gradient-to-r ${app.color}`} />

      {/* Card content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl p-0.5 bg-gradient-to-br ${app.color}`}
          >
            <div
              className={`flex items-center justify-center w-full h-full rounded-[10px] ${
                app.bgImage ? "bg-black/60 backdrop-blur-sm" : "bg-[#0d1a2d]"
              }`}
            >
              <span
                className={`bg-gradient-to-br ${app.color} bg-clip-text`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                {app.icon}
              </span>
            </div>
          </div>

          {/* Status badge */}
          {app.available ? (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#22C55E] text-xs font-semibold backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Live
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 border border-white/10 text-gray-400 text-xs font-medium backdrop-blur-sm">
              Coming Soon
            </span>
          )}
        </div>

        {/* Spacer — pushes content to bottom when bg image is used */}
        {app.bgImage && <div className="flex-1 min-h-[80px]" />}

        {/* Tag */}
        <span
          className={`inline-block text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r ${app.color} bg-clip-text text-transparent mb-2`}
        >
          {app.tag}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-white mb-3 leading-snug">
          {app.title}
        </h2>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            app.bgImage ? "text-gray-300" : "text-gray-400"
          }`}
        >
          {app.description}
        </p>

        {/* CTA */}
        <div className="mt-6">
          {app.available ? (
            <div
              className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${app.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
            >
              Buka Demo
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F59E0B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          ) : (
            <span className="text-sm text-gray-500">Demo segera tersedia &mdash;</span>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
