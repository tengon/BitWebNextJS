"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to <span className="text-[#00D4FF]">Automate?</span></h2>
            <p className="text-gray-400 text-lg mb-8">
              Get in touch with our experts to discuss how BIT Automation can transform your industrial operations.
            </p>

            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0099FF]/20 blur-[50px] rounded-full"></div>
              <form
                className="space-y-6 relative z-10"
                onSubmit={(e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get("firstName");
                  const lastName = formData.get("lastName");
                  const email = formData.get("email");
                  const message = formData.get("message");

                  const subject = encodeURIComponent(
                    `Website Contact - ${firstName} ${lastName}`
                  );
                  const body = encodeURIComponent(
                    `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
                  );

                  window.location.href = `mailto:info@bitautomation.id?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">First Name</label>
                    <input name="firstName" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0099FF] transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Last Name</label>
                    <input name="lastName" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0099FF] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0099FF] transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Message</label>
                  <textarea name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0099FF] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#0099FF] to-[#00D4FF] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,153,255,0.4)] transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            {/* Fake Google Map Placeholder */}
            <div className="flex-1 w-full min-h-[300px] glass rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#12284C]/50 flex items-center justify-center z-10 transition-colors group-hover:bg-[#12284C]/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0099FF]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#0099FF]/50 neon-border">
                    <span className="w-4 h-4 bg-[#00D4FF] rounded-full animate-ping"></span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">Jakarta Headquarters</h3>
                  <p className="text-sm text-gray-400 mt-2">Indonesia</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230099FF\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px' }}></div>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white mb-1">Fast Response?</h3>
                <p className="text-sm text-gray-400">Chat with us directly on WhatsApp</p>
              </div>
              <a href="https://wa.me/6285117272920" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-400 hover:scale-110 transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <MessageSquare size={24} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
