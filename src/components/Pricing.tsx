"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "per reel",
    desc: "Perfect for a single campaign or trying out the process.",
    features: [
      "1 short-form reel (60s)",
      "Script & concept included",
      "1 revision round",
      "Delivered in 5 days",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$799",
    period: "per month",
    desc: "Best for brands or creators who need consistent content.",
    features: [
      "4 reels per month",
      "Script, storyboard & editing",
      "Unlimited revisions",
      "Priority delivery (48h)",
      "Monthly strategy call",
    ],
    cta: "Start creating",
    highlight: true,
  },
  {
    name: "Campaign",
    price: "Custom",
    period: "project-based",
    desc: "Full campaign production for launches, events, or brand deals.",
    features: [
      "Unlimited reels",
      "Full creative direction",
      "Cross-platform adaptation",
      "Analytics & reporting",
      "Dedicated account manager",
    ],
    cta: "Let's talk",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl mt-3 leading-tight"
          >
            Simple, <span className="text-primary">honest</span> pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted mt-4 max-w-md mx-auto"
          >
            No hidden fees. No surprises. Just great content.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-primary border-2 border-primary"
                  : "bg-surface border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <div>
                <p className={`font-semibold text-sm mb-4 ${plan.highlight ? "text-white/70" : "text-muted"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`font-heading font-black text-5xl ${plan.highlight ? "text-white" : "text-fg"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-muted"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`}
                    />
                    <span className={plan.highlight ? "text-white/90" : "text-fg"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-surface2 text-fg hover:bg-primary hover:text-white border border-border hover:border-primary"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
