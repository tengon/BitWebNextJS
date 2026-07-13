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

          <Link
            href="/services"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/solutions"
            className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors block py-2 border-b border-white/5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solution
          </Link>

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

          {/* <Link
            href="/#contact"
            className="mt-4 px-5 py-3 rounded-md bg-[#0099FF] text-white font-medium hover:bg-[#00D4FF] text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link> */}
        </motion.div>
      )}
    </header>
  );
}
