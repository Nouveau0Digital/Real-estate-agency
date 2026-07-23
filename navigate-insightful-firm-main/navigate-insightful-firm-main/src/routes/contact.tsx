import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
  service: z.string().min(1, "Please select a service interest"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vanguard & Co" },
      { name: "description", content: "Get in touch with Vanguard & Co for audit, tax, advisory, and software solutions." },
      { property: "og:title", content: "Contact — Vanguard & Co" },
      { property: "og:description", content: "Get in touch with Vanguard & Co for audit, tax, advisory, and software solutions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-surface">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="inline-block py-1 px-3 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-navy mb-8 max-w-3xl">
              Let's discuss your growth.
            </h1>
            <p className="text-xl text-navy/70 max-w-2xl leading-relaxed">
              Schedule a consultation with our senior advisors to explore how we can optimize your financial operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <Reveal>
            <div>
              <h2 className="text-4xl font-serif text-navy mb-8">Get in touch</h2>
              <p className="text-navy/70 mb-12 max-w-md leading-relaxed">
                Our team is ready to understand your challenges and outline a path forward. Reach out by phone, email, or the form.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="size-10 border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin className="size-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">London Office</p>
                    <p className="text-navy/60 text-sm">12 Finsbury Square, London, EC2A 1AS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">General Inquiries</p>
                    <p className="text-navy/60 text-sm">+44 20 7946 0123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Mail className="size-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Client Support</p>
                    <p className="text-navy/60 text-sm">partners@vanguardco.com</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12 aspect-video bg-slate-surface border border-navy/5 flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-navy/30">
                  Embedded Map Placeholder
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white p-8 md:p-10 border border-navy/10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="size-12 text-gold mb-4" />
                  <h3 className="text-2xl font-serif text-navy mb-2">Thank you</h3>
                  <p className="text-navy/60">
                    Your message has been received. A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy text-xs font-bold uppercase tracking-widest mb-2">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className="w-full border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors bg-transparent"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-bold uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors bg-transparent"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-widest mb-2">
                      Service Interest
                    </label>
                    <select
                      {...register("service")}
                      className="w-full border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors bg-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="tax">Tax Strategy</option>
                      <option value="advisory">Financial Advisory</option>
                      <option value="software">Software & Tech Solutions</option>
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-xs text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-navy text-xs font-bold uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your project"
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold py-4 text-white font-bold uppercase tracking-widest hover:bg-navy transition-all"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
