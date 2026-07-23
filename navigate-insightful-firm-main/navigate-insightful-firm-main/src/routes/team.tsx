import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import jonathanImg from "@/assets/team-jonathan.jpg";
import elenaImg from "@/assets/team-elena.jpg";
import marcusImg from "@/assets/team-marcus.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Vanguard & Co" },
      { name: "description", content: "Meet the leadership team behind Vanguard & Co's advisory, audit, tax, and technology services." },
      { property: "og:title", content: "Team — Vanguard & Co" },
      { property: "og:description", content: "Meet the leadership team behind Vanguard & Co's advisory, audit, tax, and technology services." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              Leadership
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-navy mb-6 max-w-3xl mx-auto">
              Guided by decades of collective experience.
            </h1>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
              Our leadership brings together expertise from the world's leading financial institutions, advisory firms, and technology companies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="group">
                <div className="overflow-hidden mb-6 bg-slate-surface">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-navy">{member.name}</h4>
                <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
                  {member.role}
                </p>
                <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-serif text-white mb-6">
              Join our team of advisors and technologists.
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              We're always looking for exceptional people who share our commitment to precision and client success.
            </p>
            <a
              href="mailto:careers@vanguardco.com"
              className="inline-block px-8 py-4 border border-gold text-gold font-semibold hover:bg-gold hover:text-white transition-all rounded-sm"
            >
              View Open Roles
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    name: "Jonathan V. Sterling",
    role: "Managing Partner",
    bio: "Specializing in international tax law and corporate restructuring with over 20 years of experience advising multinational clients.",
    image: jonathanImg,
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Advisory",
    bio: "Formerly at a Big Four firm, Elena leads our M&A and valuation practice with deep expertise in technology and healthcare sectors.",
    image: elenaImg,
  },
  {
    name: "Marcus Thorne",
    role: "Head of Software Solutions",
    bio: "Bridging the gap between legacy financial systems and modern cloud-native architectures for enterprise clients.",
    image: marcusImg,
  },
  {
    name: "Sarah Okonkwo",
    role: "Chief Audit Officer",
    bio: "A distinguished audit leader with a track record of building risk frameworks for regulated financial institutions.",
    image: marcusImg,
  },
  {
    name: "David Chen",
    role: "Tax Strategy Lead",
    bio: "Expert in cross-border tax planning, transfer pricing, and compliance for private equity and venture-backed companies.",
    image: jonathanImg,
  },
  {
    name: "Margaret Holloway",
    role: "Client Services Director",
    bio: "Ensures every engagement delivers partner-level attention and measurable outcomes for our global client base.",
    image: elenaImg,
  },
];
