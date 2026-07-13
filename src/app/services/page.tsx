import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/lib/servicesData";

const lucideIconMap = LucideIcons as unknown as Record<string, LucideIcon | undefined>;

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative bg-[#0B1220]">
      <div className="fixed inset-0 z-0 bg-[#0B1220]">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat bg-fixed opacity-35" style={{ backgroundPosition: "center 80px" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/75 to-[#0B1220]/45"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-[#00D4FF] font-semibold tracking-[0.24em] uppercase text-sm mb-4">BIT Automation Services</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
                Industrial technology services for connected operations.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Explore automation, monitoring, tracking, surveillance, utilities, and smart industry services designed for real industrial environments.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">
              <aside className="lg:sticky lg:top-28">
                <div className="glass rounded-2xl border-[#0099FF]/20 overflow-hidden">
                  <div className="p-5 border-b border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] mb-2">Services</p>
                    <h2 className="font-heading text-2xl font-bold text-white">Choose a Service</h2>
                  </div>

                  <nav className="p-3 flex flex-col gap-1">
                    {servicesData.map((service) => {
                      const Icon = lucideIconMap[service.iconName];

                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 rounded-xl p-3 text-left transition-all border border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                        >
                          <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/5 text-[#00D4FF]">
                            {Icon && <Icon size={17} />}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-tight">{service.title}</span>
                            <span className="block text-xs text-gray-500 leading-snug mt-1">{service.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {servicesData.map((service) => {
                  const Icon = lucideIconMap[service.iconName];

                  return (
                    <article key={service.slug} className="glass rounded-2xl border-white/10 overflow-hidden group">
                      <div className="relative h-auto overflow-hidden bg-[#0B1220]">
                        <img
                          src={service.bgImage}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/30 to-transparent"></div>
                        <div className="absolute left-5 bottom-5 w-12 h-12 rounded-xl bg-[#0099FF]/15 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                          {Icon && <Icon size={24} />}
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-[#00D4FF] font-semibold tracking-wider uppercase text-xs mb-3">{service.tagline}</p>
                        <h3 className="font-heading text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">{service.shortDescription}</p>

                        <ul className="space-y-3 mb-6">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature.title} className="flex items-start gap-3 text-sm text-gray-300">
                              <CheckCircle2 size={16} className="text-[#00D4FF] mt-0.5 shrink-0" />
                              <span>{feature.title}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#00D4FF] hover:text-white transition-colors"
                        >
                          View Service Detail <ArrowRight size={16} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
