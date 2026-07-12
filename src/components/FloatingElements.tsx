"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function CameraSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="14" width="72" height="42" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M26 14V10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="35" r="13" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="35" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="35" r="3.5" fill="currentColor" opacity="0.4" />
      <rect x="58" y="20" width="8" height="5" rx="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="22" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function LensSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="30" r="27" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="30" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="30" cy="30" r="6" fill="currentColor" opacity="0.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle} x1="30" y1="3" x2="30" y2="10"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          transform={`rotate(${angle} 30 30)`} opacity="0.5" />
      ))}
    </svg>
  );
}

function FilmStripSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="0" width="200" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="0" y="0" width="200" height="60" rx="4" fill="currentColor" opacity="0.05" />
      {[8, 28, 48, 68, 88, 108, 128, 148, 168, 188].map((x) => (
        <g key={x}>
          <rect x={x} y="4" width="12" height="8" rx="1.5" fill="currentColor" opacity="0.4" />
          <rect x={x} y="48" width="12" height="8" rx="1.5" fill="currentColor" opacity="0.4" />
        </g>
      ))}
      {[22, 82, 142].map((x) => (
        <rect key={x} x={x} y="16" width="36" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      ))}
    </svg>
  );
}

function ApertureSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 30 + 10 * Math.cos(rad);
        const y1 = 30 + 10 * Math.sin(rad);
        const x2 = 30 + 26 * Math.cos(rad + 0.6);
        const y2 = 30 + 26 * Math.sin(rad + 0.6);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />;
      })}
      <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

export default function FloatingElements() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax: each element moves at a different rate on scroll
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);   // camera top-right — moves up fast
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);    // lens left — slower
  const y3 = useTransform(scrollY, [0, 600], [0, -90]);    // aperture bottom-right
  const y4 = useTransform(scrollY, [0, 600], [0, -40]);    // small camera bottom-left
  const y5 = useTransform(scrollY, [0, 600], [0, -80]);    // film strip
  const y6 = useTransform(scrollY, [0, 600], [0, -50]);    // small lens top-right area
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);  // all fade out as you scroll away

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large camera — top right */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-[8%] right-[4%] text-primary/20 w-36 md:w-48"
        animate={{ y: [0, -16, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <CameraSVG />
      </motion.div>

      {/* Lens — left mid */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-[35%] left-[2%] text-gold/15 w-24 md:w-32"
        animate={{ y: [0, -10, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <LensSVG />
      </motion.div>

      {/* Aperture — bottom right, always spinning */}
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute bottom-[15%] right-[8%] text-primary/15 w-20 md:w-28"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <ApertureSVG />
      </motion.div>

      {/* Small camera — bottom left */}
      <motion.div
        style={{ y: y4, opacity }}
        className="absolute bottom-[20%] left-[5%] text-gold/10 w-20 md:w-24"
        animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <CameraSVG />
      </motion.div>

      {/* Film strip — diagonal */}
      <motion.div
        style={{ y: y5, opacity }}
        className="absolute top-[12%] left-[15%] text-muted/10 w-40 md:w-56 -rotate-12"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <FilmStripSVG />
      </motion.div>

      {/* Small spinning lens — top right quadrant */}
      <motion.div
        style={{ y: y6, opacity }}
        className="absolute top-[25%] right-[12%] text-gold/10 w-14"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <LensSVG />
      </motion.div>
    </div>
  );
}
