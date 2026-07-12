"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Marketing Director, StyleCo",
    text: "AMX delivered beyond our expectations. The reels drove actual sales — not just views. We saw a 40% spike in store traffic the week we posted.",
  },
  {
    name: "Marcus R.",
    role: "Independent Artist",
    text: "Honestly the best decision for my EP launch. AMX understood my vision immediately and turned it into content that felt authentic. My streams doubled.",
  },
  {
    name: "Lena T.",
    role: "Founder, Bloom Restaurant",
    text: "We went from zero online presence to fully booked within a week. The storytelling in those reels made people feel like they had to come in.",
  },
];

const clientLogos = [
  "448878177_825410169539774_6151617780773537053_n.jpg",
  "469194951_1124120772710767_6197634152651150671_n.jpg",
  "494621693_17922581580079166_8039106028002695599_n.jpg",
  "497448969_17987145362814543_6970421245676333600_n (2).jpg",
  "522681551_17857641798464312_860785369297211623_n.jpg",
  "542921870_17849972937552305_7785024337438695023_n.jpg",
  "583529177_17988961631883821_729689489106093068_n (1).jpg",
  "589618335_17843401890623074_4030228731701023386_n.jpg",
  "597869722_18033560189730447_8239247303991504893_n.jpg",
  "601430512_17853223074596605_8680931947577250483_n.jpg",
  "619103396_18085877468115136_198388018656406962_n.jpg",
  "669974502_18177476401391344_128039884042414412_n.jpg",
  "727158742_18597191458000572_6528329429385307584_n.jpg",
];

const VISIBLE_LOGOS = 12;

function LogoCircle({ logo, i, inView }: { logo: string; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shrink-0 transition-all duration-300 hover:scale-110"
      style={{ borderColor: "#3A3A3A" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#DD4B24")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3A3A3A")}
    >
      <Image src={`/clients/${encodeURIComponent(logo)}`} alt="client" fill className="object-cover" />
    </motion.div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref} style={{ background: "#252525" }}>
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #F2A93B, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Client logos */}
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-muted text-sm uppercase tracking-widest mb-2">Trusted by brands & creators</p>
            <p className="font-heading font-black text-3xl md:text-4xl mb-10">
              Worked with <span style={{ color: "#DD4B24" }}>100+</span> clients
            </p>
            <div className="flex flex-col items-center gap-4">
              {/* Row 1 — first 6 */}
              <div className="flex items-center justify-center gap-4 md:gap-5">
                {clientLogos.slice(0, 6).map((logo, i) => (
                  <LogoCircle key={logo} logo={logo} i={i} inView={inView} />
                ))}
              </div>
              {/* Row 2 — next 6 */}
              <div className="flex items-center justify-center gap-4 md:gap-5">
                {clientLogos.slice(6, 12).map((logo, i) => (
                  <LogoCircle key={logo} logo={logo} i={i + 6} inView={inView} />
                ))}
              </div>
              {/* More clients indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center shrink-0 font-heading font-black text-2xl"
                style={{ borderColor: "#DD4B24", color: "#DD4B24", borderStyle: "dashed" }}
              >
                +
              </motion.div>
            </div>
          </div>
        </SectionReveal>

        <div className="border-t mb-16" style={{ borderColor: "#3A3A3A" }} />

        <div className="mb-10">
          <SectionReveal>
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DD4B24" }}>Testimonials</span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl mt-3">
              What clients <span style={{ color: "#DD4B24" }}>say</span>
            </h2>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 flex flex-col gap-4 border"
              style={{ background: "#1C1C1C", borderColor: "#3A3A3A" }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="#F2A93B" style={{ color: "#F2A93B" }} />
                ))}
              </div>
              <p className="text-fg leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-fg">{t.name}</p>
                <p className="text-muted text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
