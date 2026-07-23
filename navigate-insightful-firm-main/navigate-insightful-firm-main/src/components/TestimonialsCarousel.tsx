import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Their advisory team transformed our audit process, delivering clarity and confidence at every turn. A true strategic partner.",
    name: "Margaret Holloway",
    company: "CFO, Northbridge Industries",
  },
  {
    quote:
      "The tax strategy they architected saved us significant resources while keeping us fully compliant across three jurisdictions.",
    name: "David Chen",
    company: "General Counsel, Atlas Ventures",
  },
  {
    quote:
      "Professional, precise, and always ahead of the curve. Their software solutions modernized our reporting infrastructure.",
    name: "Sarah Okonkwo",
    company: "CTO, Meridian Financial",
  },
];

export function TestimonialsCarousel({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0 px-4 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <Quote className="mx-auto mb-6 size-8 text-gold/60" />
                <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-navy mb-8">
                  "{t.quote}"
                </blockquote>
                <div className="text-sm font-bold uppercase tracking-widest text-gold">
                  {t.name}
                </div>
                <div className="text-sm text-navy/60 mt-1">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="size-10 border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === index ? "bg-gold" : "bg-navy/20 hover:bg-navy/40"
              )}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="size-10 border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
