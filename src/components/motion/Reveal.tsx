import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  threshold?: number;
  once?: boolean;
};

export default function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null) as React.MutableRefObject<any>;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
