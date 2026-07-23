import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Shield, CircleDollarSign, TrendingUp, Cpu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vanguard & Co" },
      { name: "description", content: "Explore Vanguard & Co's audit, tax, advisory, and software solutions for modern enterprises." },
      { property: "og:title", content: "Services — Vanguard & Co" },
      { property: "og:description", content: "Explore Vanguard & Co's audit, tax, advisory, and software solutions for modern enterprises." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-navy mb-8 max-w-3xl">
              Clarity across every discipline that drives your business.
            </h1>
            <p className="text-xl text-navy/70 max-w-2xl leading-relaxed">
              From assurance to technology, our services are designed to reduce risk, optimize performance, and prepare your organization for what's next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="bg-white border border-navy/10 p-10 card-hover">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="size-12 border border-gold/30 flex items-center justify-center shrink-0">
                      <service.icon className="size-5 text-gold" />
                    </div>
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={openIndex === i}
                      aria-controls={`service-panel-${i}`}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-navy transition-colors"
                    >
                      {openIndex === i ? "Collapse" : "Expand"}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-300",
                          openIndex === i && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                  <h3 className="text-2xl font-serif text-navy mb-4">{service.title}</h3>
                  <p className="text-navy/60 leading-relaxed mb-6">{service.description}</p>
                  <div
                    id={`service-panel-${i}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="space-y-3 pt-2 border-t border-navy/5">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-navy/70">
                          <span className="size-1.5 bg-gold rounded-full mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-white mb-4">How We Work</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A proven engagement model that delivers measurable outcomes from day one.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="text-gold font-serif text-4xl mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Ensuring transparency and trust through rigorous independent reporting, internal controls review, and risk assessment tailored to your industry.",
    icon: Shield,
    details: [
      "Statutory and voluntary financial statement audits",
      "Internal audit and controls optimization",
      "Risk assessment and fraud prevention",
      "Regulatory compliance reporting",
    ],
  },
  {
    title: "Tax Strategy",
    description:
      "Comprehensive compliance and optimization strategies for corporate entities, private wealth, and cross-border operations.",
    icon: CircleDollarSign,
    details: [
      "Corporate tax planning and compliance",
      "International tax structuring",
      "Transfer pricing documentation",
      "Private wealth and estate planning",
    ],
  },
  {
    title: "Financial Advisory",
    description:
      "Strategic guidance for M&A, valuation, restructuring, and capital raising — designed to support confident decision-making at every stage.",
    icon: TrendingUp,
    details: [
      "M&A due diligence and transaction support",
      "Business and asset valuation",
      "Debt and capital advisory",
      "Restructuring and turnaround planning",
    ],
  },
  {
    title: "Software & Tech Solutions",
    description:
      "Customized ERP implementations, automated reporting tools, and digital transformation roadmaps for finance and operations teams.",
    icon: Cpu,
    details: [
      "ERP selection and implementation",
      "Financial reporting automation",
      "Data analytics dashboards",
      "Cloud migration and integration",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We begin by understanding your business, risks, and strategic objectives in depth.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team develops a tailored approach aligned to your regulatory and operational needs.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "We execute with precision, keeping you informed and engaged at every milestone.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "We continuously refine our work to drive long-term value and efficiency.",
  },
];
