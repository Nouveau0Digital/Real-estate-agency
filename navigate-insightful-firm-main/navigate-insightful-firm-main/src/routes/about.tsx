import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Target, Shield, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vanguard & Co" },
      { name: "description", content: "Learn about Vanguard & Co's story, mission, values, and what makes us a trusted advisory partner." },
      { property: "og:title", content: "About — Vanguard & Co" },
      { property: "og:description", content: "Learn about Vanguard & Co's story, mission, values, and what makes us a trusted advisory partner." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              The Firm
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-navy mb-8 max-w-3xl">
              Built on a foundation of trust, expertise, and forward vision.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-4xl font-serif text-navy mb-6">Our Story</h2>
            <div className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                Founded in 1994, Vanguard & Co began as a small audit practice with a singular belief: that clarity in finance builds confidence in business. Over three decades, that belief has grown into a global advisory firm serving enterprises across industries and continents.
              </p>
              <p>
                Today, our team of certified accountants, tax strategists, and technology consultants work side-by-side with clients to navigate complexity, mitigate risk, and unlock sustainable growth.
              </p>
              <p>
                Whether guiding a multinational through regulatory change or helping a scaling business implement modern reporting infrastructure, we bring the same commitment: precision, integrity, and partnership.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-slate-surface aspect-[4/3] flex items-center justify-center border border-navy/5">
              <span className="text-xs font-bold uppercase tracking-widest text-navy/30">
                Firm History Image
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-navy mb-4">Mission & Values</h2>
              <p className="text-navy/60 max-w-2xl mx-auto">
                The principles that guide every engagement and every relationship we build.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="bg-white p-8 border border-navy/5 h-full card-hover">
                  <div className="size-12 border border-gold/30 flex items-center justify-center mb-6">
                    <value.icon className="size-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl font-serif text-navy mb-4">Why Choose Us</h2>
              <p className="text-navy/60 max-w-2xl">
                Four reasons leading organizations trust Vanguard & Co with their most complex challenges.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 bg-navy text-gold flex items-center justify-center font-serif text-xl font-bold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Integrity First",
    description: "We uphold the highest ethical standards, ensuring every recommendation is honest, transparent, and in our clients' best interests.",
    icon: Shield,
  },
  {
    title: "Client Partnership",
    description: "We don't just advise — we embed ourselves as an extension of your team, aligned with your long-term success.",
    icon: Users,
  },
  {
    title: "Excellence Always",
    description: "From audit deliverables to technology implementations, we pursue precision and quality in every detail.",
    icon: Award,
  },
  {
    title: "Forward Vision",
    description: "We anticipate regulatory, technological, and market shifts so our clients stay ahead of change.",
    icon: Target,
  },
];

const differentiators = [
  {
    number: "01",
    title: "Integrated Expertise",
    description: "Audit, tax, advisory, and technology specialists collaborate on every engagement, eliminating silos and delivering holistic solutions.",
  },
  {
    number: "02",
    title: "Global Reach, Local Insight",
    description: "Our advisors combine international experience with deep regional knowledge to navigate cross-border complexity.",
  },
  {
    number: "03",
    title: "Technology-Driven Approach",
    description: "We leverage modern platforms and automation to improve accuracy, accelerate reporting, and reduce operational burden.",
  },
  {
    number: "04",
    title: "Relationship-First Service",
    description: "Every client receives partner-level attention. We build lasting relationships grounded in trust and measurable outcomes.",
  },
];
