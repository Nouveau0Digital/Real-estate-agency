import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function Counter({ target, suffix = "", prefix = "", duration = 1500 }: CounterProps) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let raf: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
