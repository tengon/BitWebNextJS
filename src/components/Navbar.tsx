"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesItems = [
    { name: "Industrial Automation", href: "/services/industrial-automation", desc: "PLC programming & SCADA system integration" },
    { name: "Manufacturing Solutions", href: "/services/manufacture-solution", desc: "OEE monitoring & smart warehouse systems" },
    { name: "Utilities", href: "/services/utilities", desc: "Smart resource & utility management" },
    { name: "Surveillance", href: "/services/surveillance", desc: "CCTV, AI-powered security & video analytics" },
    { name: "Tracking Solutions", href: "/services/tracking-solution", desc: "GPS tracking & fleet management" },
    { name: "Smart Industry", href: "/services/smart-industry", desc: "Digital transformation for Industry 4.0" },
  ];

  const solutionsItems = [
    { name: "OEE Monitoring", href: "/#solutions", desc: "Maximize equipment productivity" },
    { name: "Environment Monitoring", href: "/#solutions", desc: "Ensure optimal process conditions" },
    { name: "Vibration Monitoring", href: "/#solutions", desc: "Predictive machine maintenance" },
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

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors cursor-pointer">
                Services
                <ChevronDown size={14} className={cn("transition-transform duration-300", servicesHovered && "rotate-180")} />
              </button>

              <AnimatePresence>
                {servicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] p-4 glass rounded-xl shadow-2xl border border-white/10 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200 group/item flex flex-col gap-0.5"
                        >
                          <span className="text-sm font-semibold text-white group-hover/item:text-[#00D4FF] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 text-center">
                      <Link href="/#services" className="text-xs font-semibold text-[#0099FF] hover:text-[#00D4FF] transition-colors">
                        View All Services &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setSolutionsHovered(true)}
              onMouseLeave={() => setSolutionsHovered(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors cursor-pointer">
                Solution
                <ChevronDown size={14} className={cn("transition-transform duration-300", solutionsHovered && "rotate-180")} />
              </button>

              <AnimatePresence>
                {solutionsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[280px] p-3 glass rounded-xl shadow-2xl border border-white/10 z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/item flex flex-col gap-0.5"
                        >
                          <span className="text-sm font-semibold text-white group-hover/item:text-[#00D4FF] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5 text-center">
                      <Link href="/#solutions" className="text-xs font-semibold text-[#0099FF] hover:text-[#00D4FF] transition-colors">
                        View All Solutions &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#projects"
              className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

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
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-4 flex flex-col gap-2 shadow-xl max-h-[85vh] overflow-y-auto"
        >
          <Link
            href="/#home"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Services Mobile */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-base font-medium text-gray-300 hover:text-[#00D4FF] py-2 border-b border-white/5 cursor-pointer text-left font-body"
            >
              <span>Services</span>
              <ChevronDown size={18} className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4 flex flex-col gap-1.5 py-2 bg-white/5 rounded-lg mt-1"
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-[#00D4FF] py-1.5 transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/#services"
                    className="text-xs font-semibold text-[#0099FF] py-1.5 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services &rarr;
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solution Mobile */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between text-base font-medium text-gray-300 hover:text-[#00D4FF] py-2 border-b border-white/5 cursor-pointer text-left font-body"
            >
              <span>Solution</span>
              <ChevronDown size={18} className={cn("transition-transform duration-200", mobileSolutionsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {mobileSolutionsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4 flex flex-col gap-1.5 py-2 bg-white/5 rounded-lg mt-1"
                >
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-[#00D4FF] py-1.5 transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/#solutions"
                    className="text-xs font-semibold text-[#0099FF] py-1.5 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Solutions &rarr;
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#projects"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className="mt-4 px-5 py-3 rounded-md bg-[#0099FF] text-white font-medium hover:bg-[#00D4FF] text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
}
