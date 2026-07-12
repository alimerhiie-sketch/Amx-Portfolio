"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Eye, Heart } from "lucide-react";
import SectionReveal from "./SectionReveal";

const stats = [
  { value: "5M+", label: "Total Views" },
  { value: "12K+", label: "Followers" },
  { value: "200+", label: "Reels Made" },
  { value: "5+", label: "Years Creating" },
];

const traits = [
  { icon: Zap, title: "Fast turnaround", desc: "From concept to published reel in 48 hours." },
  { icon: Eye, title: "Eye for detail", desc: "Every frame, cut, and caption is intentional." },
  { icon: Heart, title: "Authentic storytelling", desc: "Content that connects because it's real." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #DD4B24, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionReveal direction="left">
              <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DD4B24" }}>
                About me
              </span>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.1}>
              <h2 className="font-heading font-black text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                I make short-form content
                <br />
                that{" "}
                <span style={{ color: "#DD4B24" }}>converts.</span>
              </h2>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2}>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Hey, I&apos;m AMX. I&apos;ve spent years studying what makes people stop scrolling —
                and I put that into every reel I create. Whether it&apos;s a brand story,
                a product showcase, or pure entertainment, I craft content built for the algorithm
                and designed for humans.
              </p>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.3}>
              <div className="flex flex-col gap-4">
                {traits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(221,75,36,0.1)" }}>
                      <Icon size={18} style={{ color: "#DD4B24" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{title}</p>
                      <p className="text-muted text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-6 md:p-8 border"
                style={{ background: "#252525", borderColor: "#3A3A3A" }}
              >
                <p className="font-heading font-black text-4xl md:text-5xl mb-2" style={{ color: "#DD4B24" }}>
                  {s.value}
                </p>
                <p className="text-muted text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
