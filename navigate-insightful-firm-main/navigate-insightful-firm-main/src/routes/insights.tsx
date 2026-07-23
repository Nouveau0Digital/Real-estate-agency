import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Vanguard & Co" },
      { name: "description", content: "Read the latest insights from Vanguard & Co on audit, tax, advisory, and technology trends." },
      { property: "og:title", content: "Insights — Vanguard & Co" },
      { property: "og:description", content: "Read the latest insights from Vanguard & Co on audit, tax, advisory, and technology trends." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              Perspectives
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-navy mb-8 max-w-3xl">
              Insights that inform better decisions.
            </h1>
            <p className="text-xl text-navy/70 max-w-2xl leading-relaxed">
              Analysis and commentary from our advisors on the trends shaping finance, regulation, and technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={i * 100}>
                <article className="group flex flex-col h-full">
                  <div className="bg-slate-surface aspect-[16/10] mb-6 flex items-center justify-center border border-navy/5 overflow-hidden">
                    <span className="text-xs font-bold uppercase tracking-widest text-navy/30 group-hover:text-gold transition-colors">
                      Article Image
                    </span>
                  </div>
                  <div className="text-navy/50 text-xs uppercase tracking-widest mb-4">
                    {article.date} &bull; {article.category}
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    to="/insights"
                    className="text-xs font-bold uppercase tracking-widest text-navy hover:text-gold transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-serif text-white mb-6">Stay informed</h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Subscribe to receive our latest insights, regulatory updates, and event invitations directly to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold text-white font-semibold hover:bg-gold/90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

const articles = [
  {
    title: "Navigating the shifts in digital tax regulation.",
    date: "Oct 24, 2024",
    category: "Tax",
    excerpt:
      "A comprehensive analysis of upcoming compliance requirements for multinational firms operating across digital economies.",
  },
  {
    title: "The role of AI in institutional risk mitigation.",
    date: "Oct 18, 2024",
    category: "Advisory",
    excerpt:
      "Why algorithmic governance is becoming a core pillar of modern internal audit procedures in the financial sector.",
  },
  {
    title: "Scaling cross-border infrastructure in 2025.",
    date: "Oct 12, 2024",
    category: "Technology",
    excerpt:
      "Essential considerations for mid-tier firms expanding their digital footprint into emerging markets.",
  },
  {
    title: "Audit quality in an era of automation.",
    date: "Oct 5, 2024",
    category: "Audit",
    excerpt:
      "Balancing technological efficiency with professional skepticism in the modern audit environment.",
  },
  {
    title: "ESG reporting: from compliance to competitive advantage.",
    date: "Sep 28, 2024",
    category: "Advisory",
    excerpt:
      "How leading organizations are turning sustainability disclosures into strategic differentiators.",
  },
  {
    title: "Preparing for the next wave of financial regulation.",
    date: "Sep 21, 2024",
    category: "Regulatory",
    excerpt:
      "Key regulatory themes on the horizon and what boards should be doing now to prepare.",
  },
];
