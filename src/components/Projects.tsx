"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "Nike x AMX Campaign",
    description: "Created a 6-part reel series for Nike's summer drop. Focused on movement, culture, and raw energy.",
    tags: ["Brand Deal", "Series", "Lifestyle"],
    result: "2.1M impressions",
    borderColor: "#DD4B24",
    resultColor: "#DD4B24",
  },
  {
    title: "Local Restaurant Launch",
    description: "Produced launch content for a new restaurant. Behind-the-scenes, menu reels, and chef stories.",
    tags: ["Food", "Local Brand", "Storytelling"],
    result: "Fully booked in 3 days",
    borderColor: "#F2A93B",
    resultColor: "#F2A93B",
  },
  {
    title: "Music Artist Promo",
    description: "Visual storytelling for an independent artist's EP release. Aesthetic short-form across platforms.",
    tags: ["Music", "Creative", "Collab"],
    result: "50K streams in week 1",
    borderColor: "#DD4B24",
    resultColor: "#DD4B24",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #DD4B24, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionReveal direction="left">
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DD4B24" }}>
              Case studies
            </span>
          </SectionReveal>
          <SectionReveal direction="left" delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl mt-3 leading-tight">
              Projects that <span style={{ color: "#DD4B24" }}>delivered</span>
            </h2>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              style={{ background: "#252525", borderColor: "#3A3A3A", borderLeftColor: project.borderColor, borderLeftWidth: "3px" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading font-bold text-xl md:text-2xl">{project.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                  <p className="text-muted leading-relaxed mb-4 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#2E2E2E", color: "#8A8A86" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Result</p>
                  <p className="font-heading font-black text-2xl" style={{ color: project.resultColor }}>
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
