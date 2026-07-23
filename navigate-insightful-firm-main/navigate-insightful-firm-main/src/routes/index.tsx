import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import heroImage from "@/assets/hero-lobby.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanguard & Co — Audit, Tax, Advisory & Software" },
      { name: "description", content: "Integrated audit, tax, advisory, and software solutions for the modern global economy." },
      { property: "og:title", content: "Vanguard & Co — Audit, Tax, Advisory & Software" },
      { property: "og:description", content: "Integrated audit, tax, advisory, and software solutions for the modern global economy." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              Established 1994
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-navy mb-8">
              Precision in <span className="italic">Strategy</span>, Excellence in Execution.
            </h1>
            <p className="text-xl text-navy/70 leading-relaxed mb-10 max-w-xl">
              We provide integrated audit, tax, and advisory solutions designed for the complexities of the modern global economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-navy text-white font-semibold hover:bg-navy/90 transition-all rounded-sm"
              >
                Our Expertise
              </Link>
              <Link
                to="/team"
                className="px-8 py-4 border border-navy/20 font-semibold text-navy hover:bg-navy/5 transition-all rounded-sm"
              >
                Meet the Team
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-navy/10 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-navy font-serif">
                  <Counter target={5} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-navy font-serif">
                  <Counter target={500} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">
                  Clients Served
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-navy font-serif">
                  <Counter target={1200} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">
                  Projects Completed
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern corporate headquarters lobby with marble and glass"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 hidden md:block max-w-sm">
              <p className="text-white font-serif text-2xl italic">
                "Driving value through local insight and global reach."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 bg-slate-surface px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-serif text-navy mb-4">Core Disciplines</h2>
                <p className="text-navy/60">
                  Navigating the financial landscape requires a multi-disciplinary approach. We deliver clarity across four strategic pillars.
                </p>
              </div>
              <Link
                to="/services"
                className="text-gold font-bold text-sm tracking-widest uppercase border-b-2 border-gold pb-1 hover:text-navy hover:border-navy transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="bg-white p-10 card-hover group cursor-pointer h-full">
                  <div className="size-12 border border-gold/30 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                    <service.icon className="size-5 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-navy">{service.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="text-gold text-xs font-bold tracking-widest uppercase">
                    Learn More &rarr;
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-navy mb-4">Client Perspectives</h2>
              <p className="text-navy/60 max-w-xl mx-auto">
                Trusted by institutions that demand precision and discretion.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Ready to elevate your financial strategy?
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our senior advisors and discover how we can optimize your operations.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gold text-white font-semibold hover:bg-gold/90 transition-all rounded-sm"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { Shield, CircleDollarSign, TrendingUp, Cpu } from "lucide-react";

const services = [
  {
    title: "Audit & Assurance",
    description: "Ensuring transparency and trust through rigorous independent reporting and risk assessment.",
    icon: Shield,
  },
  {
    title: "Tax Strategy",
    description: "Comprehensive compliance and optimization strategies for corporate and private wealth.",
    icon: CircleDollarSign,
  },
  {
    title: "Financial Advisory",
    description: "M&A support, valuation services, and restructuring guidance for high-growth enterprises.",
    icon: TrendingUp,
  },
  {
    title: "Tech Solutions",
    description: "Customized ERP implementations and automated reporting tools for digital transformation.",
    icon: Cpu,
  },
];
