"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GaugeCircle, Wind, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const solutionLinks = [
  {
    name: "OEE",
    href: "/solutions/oee",
    icon: GaugeCircle,
    description: "Overall Equipment Effectiveness",
    accent: "#0099FF",
  },
  {
    name: "Environment Monitoring",
    href: "/solutions/environment-monitoring",
    icon: Wind,
    description: "Temperature, Humidity & Compliance",
    accent: "#10b981",
  },
  {
    name: "Vibration Monitoring",
    href: "/solutions/vibration-monitoring",
    icon: Activity,
    description: "Predictive Maintenance & Anomaly Detection",
    accent: "#8b5cf6",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const regularLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

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
            <span className="font-heading font-bold text-2xl text-white tracking-tight">
              BIT <span className="text-[#0099FF]">Automation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home & About */}
            {regularLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services */}
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Solution Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionDropdownOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors relative group",
                  solutionDropdownOpen ? "text-[#00D4FF]" : "text-gray-300 hover:text-[#00D4FF]"
                )}
              >
                Solution
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    solutionDropdownOpen ? "rotate-180" : ""
                  )}
                />
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-[#00D4FF] transition-all duration-300",
                    solutionDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              <AnimatePresence>
                {solutionDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 glass rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    {/* Dropdown header */}
                    <div className="px-4 py-3 border-b border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Our Solutions
                      </p>
                    </div>

                    {solutionLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSolutionDropdownOpen(false)}
                          className="flex items-center gap-4 px-4 py-3.5 hover:bg-white/5 transition-colors group/item"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                            style={{ backgroundColor: `${item.accent}18` }}
                          >
                            <Icon size={18} style={{ color: item.accent }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover/item:text-white transition-colors">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}

                    {/* View all link */}
                    <div className="border-t border-white/5 px-4 py-3">
                      <Link
                        href="/#solutions"
                        onClick={() => setSolutionDropdownOpen(false)}
                        className="text-xs font-semibold text-[#0099FF] hover:text-[#00D4FF] transition-colors"
                      >
                        View all solutions →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Projects & Contact */}
            {regularLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-4 flex flex-col gap-2 shadow-xl"
        >
          {regularLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Solution accordion */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileSolutionOpen((v) => !v)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors"
            >
              <span>Solution</span>
              <ChevronDown
                size={16}
                className={cn("transition-transform", mobileSolutionOpen ? "rotate-180" : "")}
              />
            </button>
            <AnimatePresence>
              {mobileSolutionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-2 pl-4 flex flex-col gap-1">
                    {solutionLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => { setMobileMenuOpen(false); setMobileSolutionOpen(false); }}
                          className="flex items-center gap-3 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          <Icon size={16} style={{ color: item.accent }} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {regularLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="mt-2 px-5 py-3 rounded-md bg-[#0099FF] text-white font-medium hover:bg-[#00D4FF] text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
}
