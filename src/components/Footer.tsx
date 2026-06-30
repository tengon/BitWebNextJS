import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0099FF]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
              BIT <span className="text-[#0099FF]">Automation</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplifying Complexity, Delivering Innovation. We provide intelligent automation, industrial IoT, and digital transformation solutions for modern industries.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Industrial Automation</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Internet of Things (IoT)</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Smart Factory</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Energy Monitoring</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Fleet Management</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Surveillance Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-[#00D4FF] transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-[#00D4FF] transition-colors">Our Services</Link></li>
              <li><Link href="#projects" className="hover:text-[#00D4FF] transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#00D4FF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0099FF] shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia (Headquarters)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0099FF] shrink-0" />
                <span>0858-0302-9034</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#0099FF] shrink-0" />
                <a href="mailto:info@bitautomation.id" className="hover:text-[#00D4FF] transition-colors">info@bitautomation.id</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BIT Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
