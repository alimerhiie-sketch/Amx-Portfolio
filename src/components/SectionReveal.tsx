"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  parallax?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  parallax = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const initial =
    direction === "left"  ? { opacity: 0, x: -50, filter: "blur(4px)" } :
    direction === "right" ? { opacity: 0, x: 50,  filter: "blur(4px)" } :
    direction === "scale" ? { opacity: 0, scale: 0.9, filter: "blur(4px)" } :
                            { opacity: 0, y: 40,  filter: "blur(4px)" };

  const animate =
    direction === "left"  ? { opacity: 1, x: 0, filter: "blur(0px)" } :
    direction === "right" ? { opacity: 1, x: 0, filter: "blur(0px)" } :
    direction === "scale" ? { opacity: 1, scale: 1, filter: "blur(0px)" } :
                            { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      style={parallax ? { y: parallaxY } : undefined}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
