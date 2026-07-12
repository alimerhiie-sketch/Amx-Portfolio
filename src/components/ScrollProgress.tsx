"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[100]"
      aria-hidden
      aria-label="Page scroll progress"
    >
      <div className="h-full w-full" style={{ background: "linear-gradient(90deg, #DD4B24, #F2A93B)" }} />
    </motion.div>
  );
}
