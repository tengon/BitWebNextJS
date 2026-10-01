"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logos/BIT-logo-white.png" alt="BIT" className="h-10 w-auto" />
            <span className="relative -bottom-3 font-bold text-xl text-white tracking-wider">AUTOMATION</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#home"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/#about"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/solutions"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Solution
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/#projects"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* DEMO Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative pb-0.5">
                Demo
                <svg
                  className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0a0f1e] border-l border-t border-white/10 z-10"></div>
                <div className="rounded-xl border border-white/10 bg-[#0a0f1e]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-[#00D4FF] uppercase tracking-widest">
                      Demo Applications
                    </p>
                    <Link href="/demo" className="text-[10px] text-gray-400 hover:text-[#00D4FF] transition-colors">
                      Lihat Semua →
                    </Link>
                  </div>
                  <div className="py-1">
                    {[
                      { label: "OEE & Machine Monitoring", href: "#", icon: "⚙️" },
                      { label: "HSE", href: "#", icon: "🦺" },
                      { label: "Tracking", href: "http://track.bitautomation.id", icon: "📍", external: true },
                      { label: "Environment Monitoring", href: "#", icon: "🌿" },
                      { label: "BMS (Building Monitoring System)", href: "#", icon: "🏢" },
                      { label: "CCTV & VMS", href: "#", icon: "📹" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        {...((item as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all group/item"
                      >
                        <span className="text-base leading-none w-5 shrink-0">{item.icon}</span>
                        <span className="leading-tight">{item.label}</span>
                        <svg
                          className="w-3 h-3 ml-auto opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#00D4FF] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="px-3 py-2 border-t border-white/10">
                    <Link
                      href="/demo"
                      className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 transition-colors"
                    >
                      Buka Halaman Demo
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-md bg-[#0099FF] text-white font-medium hover:bg-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,153,255,0.5)] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [demoOpen, setDemoOpen] = useState(false);

  const demoItems = [
    { label: "OEE & Machine Monitoring", href: "#", icon: "⚙️" },
    { label: "HSE", href: "#", icon: "🦺" },
    { label: "Tracking", href: "https://track.bitautomation.id", icon: "📍", external: true },
    { label: "Environment Monitoring", href: "#", icon: "🌿" },
    { label: "BMS (Building Monitoring System)", href: "#", icon: "🏢" },
    { label: "CCTV & VMS", href: "#", icon: "📹" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-4 flex flex-col gap-2 shadow-xl max-h-[85vh] overflow-y-auto"
    >
      <Link
        href="/#home"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        Home
      </Link>

      <Link
        href="/#about"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        About
      </Link>

      <Link
        href="/services"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        Services
      </Link>

      <Link
        href="/solutions"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        Solution
      </Link>

      <Link
        href="/#projects"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        Projects
      </Link>

      {/* DEMO — Mobile Accordion */}
      <div className="border-b border-white/5">
        <button
          className="w-full flex items-center justify-between text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors py-2"
          onClick={() => setDemoOpen(!demoOpen)}
        >
          <span>Demo</span>
          <svg
            className={cn("w-4 h-4 transition-transform duration-200", demoOpen && "rotate-180")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {demoOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="pl-3 pb-3 flex flex-col gap-1"
          >
            <p className="text-[10px] font-semibold text-[#00D4FF] uppercase tracking-widest mt-1 mb-1">
              Demo Applications
            </p>
            {demoItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                {...((item as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-2.5 py-2 text-sm text-gray-400 hover:text-[#00D4FF] transition-colors"
                onClick={onClose}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>

      <Link
        href="/#contact"
        className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
        onClick={onClose}
      >
        Contact
      </Link>
    </motion.div>
  );
}
