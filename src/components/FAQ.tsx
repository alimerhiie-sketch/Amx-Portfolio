"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "./SectionReveal";

const faqs = [
  { q: "How does the process work?", a: "We start with a brief call to understand your brand, goals, and audience. I then develop a concept, script, and storyboard for your approval before production begins." },
  { q: "Do you provide videography, or is it editing only?", a: "Both. I shoot and edit — that's how I get the best results. When I control the camera, I know exactly what I need in the edit. That said, I can work with footage you provide and handle full post-production. I just prefer to be behind the lens too." },
  { q: "What platforms do you create content for?", a: "Primarily Instagram Reels, TikTok, and YouTube Shorts. All content is optimized for vertical format (9:16) with platform-specific hooks and captions." },
  { q: "How long does delivery take?", a: "Standard delivery is 5 business days per reel. Priority clients receive 48-hour turnaround." },
  { q: "Can I request revisions?", a: "Yes. I offer revision rounds until you're completely happy with the result." },
  { q: "Do you sign NDAs?", a: "Absolutely. For brand deals and commercial campaigns, I'm happy to sign an NDA before any project details are shared." },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #DD4B24, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <SectionReveal>
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DD4B24" }}>FAQ</span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl mt-3">
              Got <span style={{ color: "#DD4B24" }}>questions?</span>
            </h2>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border"
              style={{ background: "#252525", borderColor: "#3A3A3A" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors duration-200"
                style={{ background: open === i ? "#2E2E2E" : "transparent" }}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-fg">{faq.q}</span>
                {open === i
                  ? <Minus size={18} style={{ color: "#DD4B24" }} className="shrink-0" />
                  : <Plus size={18} className="text-muted shrink-0" />
                }
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" as const }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
