"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Play, Share2 } from "lucide-react";
import FloatingElements from "./FloatingElements";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gold/6 rounded-full blur-[100px]" />
        <div className="absolute top-10 left-10 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      {/* Floating camera & lens elements */}
      <FloatingElements />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 text-sm text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for collaborations
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight mb-6"
        >
          Creating reels
          <br />
          that{" "}
          <span
            className="relative inline-block"
            style={{ color: "#DD4B24" }}
          >
            stop
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" as const }}
              style={{ transformOrigin: "left" }}
            />
          </span>{" "}
          the
          <br />
          scroll.
        </motion.h1>

        {/* Sub */}
        <motion.p
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m <strong className="text-fg">AMX</strong> — a content creator turning ideas
          into short-form videos people can&apos;t ignore.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#reels"
            className="group inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ background: "#DD4B24" }}
          >
            <Play size={16} fill="white" />
            Watch my reels
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border hover:border-primary text-fg font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Work with me
          </a>
        </motion.div>

        {/* Instagram */}
        <motion.div
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.instagram.com/ali.mer3ii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 text-muted hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
          >
            <Share2 size={18} />
            <span>@ali.mer3ii</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" as const }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
