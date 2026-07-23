import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-navy/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-navy flex items-center justify-center text-gold font-bold text-xl font-serif">
              V
            </div>
            <span className="font-bold tracking-tight text-xl text-navy uppercase">
              Vanguard&Co
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "active-nav-link" }}
                inactiveProps={{ className: "text-navy/60 hover:text-navy transition-colors" }}
                activeOptions={{ exact: true }}
                className="text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-all rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className="w-6 h-0.5 bg-navy" />
            <div className="w-6 h-0.5 bg-navy" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(320px,85vw)] bg-white shadow-2xl transform transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 flex items-center justify-between border-b border-navy/5">
            <span className="font-bold tracking-tight text-lg text-navy uppercase">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-navy"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-navy/80 hover:text-navy" }}
                activeOptions={{ exact: true }}
                className="text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center px-5 py-3 bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-all rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
