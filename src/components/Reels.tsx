"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Play, X } from "lucide-react";
import SectionReveal from "./SectionReveal";

const ALL_REELS = [
  // Opening: car & clothes
  { id: 1,  file: "car reel-1.mp4",                category: "Car" },
  { id: 2,  file: "car reel-2.mp4",                category: "Car" },
  { id: 3,  file: "clothes reel-1.mp4",            category: "Clothes" },
  // Promos (reel-7 first, reel-1 & reel-4 moved to remaining)
  { id: 4,  file: "promo reel-7.mp4",              category: "Promo" },
  { id: 5,  file: "promo reel-2.mp4",              category: "Promo" },
  { id: 6,  file: "promo reel-3.mp4",              category: "Promo" },
  { id: 7,  file: "promo reel-5.mp4",              category: "Promo" },
  { id: 8,  file: "promo reel-6.mp4",              category: "Promo" },
  // Continuation of featured
  { id: 9,  file: "car reel-3.mp4",                category: "Car" },
  { id: 10, file: "location scouting reel-2.mp4",  category: "Location Scouting" },
  // All talking head
  { id: 11, file: "talking head reel-1.mp4",       category: "Talking Head" },
  { id: 12, file: "talking head reel-2.mp4",       category: "Talking Head" },
  { id: 13, file: "talking head reel-3.mp4",       category: "Talking Head" },
  { id: 14, file: "talking head reel-4.mp4",       category: "Talking Head" },
  // Remaining
  { id: 15, file: "promo reel-1.mp4",              category: "Promo" },
  { id: 16, file: "promo reel-4.mp4",              category: "Promo" },
  { id: 17, file: "promo reel-8.mp4",              category: "Promo" },
  { id: 18, file: "car reel-4.mp4",                category: "Car" },
  { id: 19, file: "car reel-5.mp4",                category: "Car" },
  { id: 20, file: "construction reel-1.mp4",       category: "Construction" },
  { id: 21, file: "construction reel-2.mp4",       category: "Construction" },
  { id: 22, file: "food reel-1.mp4",               category: "Food" },
  { id: 23, file: "food reel-2.mp4",               category: "Food" },
  { id: 24, file: "food reel-3.mp4",               category: "Food" },
  { id: 25, file: "food reel-4.mp4",               category: "Food" },
  { id: 26, file: "furniture reel-2.mp4",          category: "Furniture" },
  { id: 27, file: "futniture reel-1.mp4",          category: "Furniture" },
  { id: 28, file: "gym reel-2.mp4",                category: "Gym" },
  { id: 29, file: "location scouting reel-1.mp4",  category: "Location Scouting" },
  { id: 30, file: "patesari reel-1.mp4",           category: "Patisserie" },
  { id: 31, file: "patesari reel-2.mp4",           category: "Patisserie" },
  { id: 32, file: "patesari reel-3.mp4",           category: "Patisserie" },
  { id: 33, file: "patesari reel-4.mp4",           category: "Patisserie" },
  { id: 34, file: "patesari reel-5.mp4",           category: "Patisserie" },
];

const ALL_CATEGORIES = ["All", ...Array.from(new Set(ALL_REELS.map((r) => r.category)))];
const STORJ_BASE = "https://link.storjshare.io/raw/jx6lbahru32fwoioansijmew2n3a/amxreels";

function ReelCard({
  reel,
  index,
  inView,
  onClick,
}: {
  reel: (typeof ALL_REELS)[0];
  index: number;
  inView: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const playTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const src = `${STORJ_BASE}/${encodeURIComponent(reel.file)}`;
  const poster = `/posters/${encodeURIComponent(reel.file.replace(".mp4", ".jpg"))}`;

  useEffect(() => {
    if (!videoRef.current) return;
    if (hovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
    setShowPlay(true);
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    playTimerRef.current = setTimeout(() => setShowPlay(false), 700);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowPlay(false);
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
  };

  useEffect(() => () => { if (playTimerRef.current) clearTimeout(playTimerRef.current); }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.05 * (index % 6), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border"
      style={{ background: "#1C1C1C", borderColor: "#3A3A3A" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Film strip top */}
      <div className="absolute top-0 left-0 right-0 h-5 flex items-center px-1 gap-1 opacity-20">
        {Array.from({ length: 8 }).map((_, j) => (
          <div key={j} className="w-4 h-3.5 rounded-sm flex-shrink-0" style={{ background: "#F2A93B" }} />
        ))}
      </div>

      {/* Category badge */}
      <div className="absolute top-7 left-4">
        <span className="text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
          {reel.category}
        </span>
      </div>

      {/* Play button — flashes briefly on hover then fades */}
      <AnimatePresence>
        {showPlay && (
          <motion.div
            key="play"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(221,75,36,0.85)" }}>
              <Play size={22} fill="white" className="text-white ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function LightboxPlayer({ reel, onClose }: { reel: (typeof ALL_REELS)[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.92)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-h-[90vh] aspect-[9/16] rounded-2xl overflow-hidden"
          style={{ maxWidth: "min(400px, 90vw)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={`${STORJ_BASE}/${encodeURIComponent(reel.file)}`}
            className="w-full h-full object-cover"
            autoPlay
            controls
            playsInline
            loop
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ background: "rgba(0,0,0,0.7)" }}
            aria-label="Close"
          >
            <X size={16} className="text-white" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Reels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof ALL_REELS)[0] | null>(null);

  const visible = activeCategory === "All" ? ALL_REELS : ALL_REELS.filter((r) => r.category === activeCategory);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  return (
    <section id="reels" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref} style={{ background: "#252525" }}>
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #F2A93B, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionReveal>
              <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#F2A93B" }}>My work</span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-heading font-black text-4xl md:text-5xl mt-3 leading-tight">
                Featured <span style={{ color: "#DD4B24" }}>reels</span>
              </h2>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border"
                  style={
                    activeCategory === cat
                      ? { background: "#DD4B24", color: "#FAFAFA", borderColor: "#DD4B24" }
                      : { background: "transparent", color: "#8A8A86", borderColor: "#3A3A3A" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {visible.map((reel, i) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={i}
              inView={inView}
              onClick={() => setLightbox(reel)}
            />
          ))}
        </div>

      </div>

      {lightbox && <LightboxPlayer reel={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
