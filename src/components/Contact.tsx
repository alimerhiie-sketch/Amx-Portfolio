"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Mail } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref} style={{ background: "#252525" }}>
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #F2A93B, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border"
          style={{ background: "#1C1C1C", borderColor: "#3A3A3A" }}
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-[80px] pointer-events-none" style={{ background: "rgba(221,75,36,0.12)" }} />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] blur-[60px] pointer-events-none" style={{ background: "rgba(242,169,59,0.08)" }} />

          {/* Corner film strip decoration */}
          <div className="absolute top-0 left-0 w-24 h-6 flex items-center px-1 gap-1 opacity-20">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="w-4 h-4 rounded-sm flex-shrink-0" style={{ background: "#F2A93B" }} />
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-6 flex items-center px-1 gap-1 opacity-20">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} className="w-4 h-4 rounded-sm flex-shrink-0" style={{ background: "#DD4B24" }} />
            ))}
          </div>

          <div className="relative z-10">
            <SectionReveal>
              <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DD4B24" }}>
                Let&apos;s collaborate
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-heading font-black text-4xl md:text-6xl mt-4 mb-6 leading-tight">
                Ready to go{" "}
                <span style={{ color: "#DD4B24" }}>viral?</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-muted text-lg max-w-md mx-auto mb-10 leading-relaxed">
                Whether it&apos;s a single reel or a full campaign, I&apos;d love to hear your idea.
                Let&apos;s create something people can&apos;t stop watching.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="mailto:ali.merhiiie@gmail.com"
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer hover:opacity-90"
                  style={{ background: "#DD4B24" }}
                >
                  <Mail size={18} />
                  Email me
                </a>
                <a
                  href="https://wa.me/96181936640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer border"
                  style={{ borderColor: "#3A3A3A", color: "#FAFAFA" }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="flex items-center justify-center">
                <a
                  href="https://instagram.com/Amx_editss"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer"
                  style={{ borderColor: "#3A3A3A", color: "#8A8A86" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#DD4B24";
                    (e.currentTarget as HTMLElement).style.color = "#DD4B24";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#3A3A3A";
                    (e.currentTarget as HTMLElement).style.color = "#8A8A86";
                  }}
                >
                  <Share2 size={18} />
                </a>
              </div>
            </SectionReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
