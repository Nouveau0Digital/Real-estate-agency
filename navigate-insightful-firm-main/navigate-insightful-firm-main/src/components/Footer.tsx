import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-12 border-t border-navy/10 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-6 bg-navy flex items-center justify-center text-gold font-bold text-sm font-serif">
            V
          </div>
          <span className="font-bold tracking-tight text-navy uppercase">
            Vanguard&Co
          </span>
        </Link>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-navy/40">
          <a href="#" className="hover:text-gold transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Reports
          </a>
        </div>
        <div className="text-xs text-navy/40">
          &copy; {new Date().getFullYear()} Vanguard & Co Advisory Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
