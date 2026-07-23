import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
