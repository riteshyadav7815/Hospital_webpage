"use client";

import React, { useEffect, useState, Suspense, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Heart, Shield, Clock, Users, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Lazy-load UnicornStudio (NO SSR — WebGL must run in browser) ──
const UnicornScene = dynamic(
  () => import("unicornstudio-react").then((mod) => mod.default || mod),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950" />
    ),
  }
);

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch: only show WebGL after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Subtle parallax for decorative orbs on scroll
  useEffect(() => {
    const section = sectionRef.current;
    const orbs = orbsRef.current;
    if (!section || !orbs) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tween = gsap.to(orbs, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // ── Animation variants ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <Shield className="w-5 h-5" />, label: "700+ Beds", value: "Advanced Care" },
    { icon: <Clock className="w-5 h-5" />, label: "24/7 Emergency", value: "Always Open" },
    { icon: <Users className="w-5 h-5" />, label: "200+ Specialists", value: "Expert Team" },
  ];

  return (
    <section
      ref={sectionRef}
      data-snap-section
      className="relative min-h-[100dvh] w-full overflow-hidden isolate"
    >
      {/* ═══════════════════════════════════════════════════════════════
          BACKGROUND — UnicornStudio WebGL scene (full bleed)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {isMounted && (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950" />
            }
          >
            <div className="absolute inset-0">
            <UnicornScene
              projectId="jWwWl4VHYRnwUxVUN8Wq"
              width="100%"
              height="100%"
              scale={1}
              dpi={1}               // ← performance: 1x is crisp enough for backgrounds
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.11/dist/unicornStudio.umd.js"
            />
          </div>
          </Suspense>
        )}

        {/* ── Readability scrim: subtle dark gradient over the scene ── */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 50%, rgba(2,6,23,0.55) 0%, transparent 100%),
              radial-gradient(ellipse 60% 50% at 80% 50%, rgba(2,6,23,0.35) 0%, transparent 100%),
              linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.15) 50%, rgba(2,6,23,0.35) 100%)
            `,
          }}
        />

        {/* ── Fine noise texture for film-grain feel ── */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100dvh] w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* ── LEFT COLUMN: Text content ── */}
            <motion.div
              className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
                <GlassPanel
                  variant="light"
                  glow="medium"
                  className="w-fit px-4 py-2.5 rounded-full border-white/10"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                      Next-Gen Healthcare Excellence
                    </span>
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-heading font-bold leading-[1.08] tracking-tight mb-6 lg:mb-8"
                style={{
                  textShadow: "0 2px 40px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                <span className="text-white">
                  Welcome to the{" "}
                </span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                  Future of Healthcare
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-xl lg:max-w-2xl mb-8 lg:mb-10 leading-relaxed font-light"
                style={{
                  textShadow: "0 1px 12px rgba(0,0,0,0.4)",
                  textWrap: "pretty",
                }}
              >
                Experience cutting-edge medical technology combined with
                compassionate care. State-of-the-art diagnostics, robotic surgery,
                and personalized treatment plans — all under one roof.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 lg:mb-14"
              >
                <GlassButton
                  size="lg"
                  variant="primary"
                  glow
                  magnetic
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  className="px-8 py-4 text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 shadow-lg shadow-cyan-500/20 group"
                >
                  <Heart className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
                  Contact Us
                  <ChevronRight className="w-4 h-4 ml-1.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </GlassButton>

                <GlassButton
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-base sm:text-lg hover:bg-white/15 hover:border-white/25 transition-all duration-200"
                >
                  Explore Services
                </GlassButton>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.9 + idx * 0.12,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    className="group"
                  >
                    <GlassPanel
                      variant="strong"
                      glow="soft"
                      className="p-5 rounded-2xl border-white/10 hover:border-cyan-400/20 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 shadow-inner backdrop-blur-sm group-hover:from-cyan-500/35 group-hover:to-blue-500/35 transition-all duration-300">
                          <div className="text-cyan-300">{stat.icon}</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-white mb-0.5 tracking-tight">
                            {stat.label}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-300/80 font-medium">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    </GlassPanel>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: Visual accent (decorative, no 3D heart) ── */}
            <motion.div
              ref={orbsRef}
              className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center relative"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {/* Floating orbs as visual accents */}
              <motion.div
                className="absolute top-[15%] right-[20%] w-40 h-40 xl:w-56 xl:h-56 rounded-full bg-cyan-400/10 blur-3xl"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -24, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-[20%] right-[10%] w-48 h-48 xl:w-64 xl:h-64 rounded-full bg-blue-400/10 blur-3xl"
                animate={prefersReducedMotion ? {} : {
                  y: [0, 20, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-[40%] left-[10%] w-32 h-32 rounded-full bg-purple-400/10 blur-3xl"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -16, 0],
                  x: [0, 12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Optional: large subtle ring decoration */}
              <div className="relative w-[320px] h-[320px] xl:w-[420px] xl:h-[420px]">
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/[0.04]"
                  animate={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/30" />
                </motion.div>
                <motion.div
                  className="absolute inset-6 rounded-full border border-white/[0.04]"
                  animate={prefersReducedMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/30" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl xl:text-6xl font-heading font-bold bg-gradient-to-br from-white/90 to-white/40 bg-clip-text text-transparent mb-2">
                      25+
                    </div>
                    <div className="text-sm text-slate-300/70 tracking-wide uppercase">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SCROLL INDICATOR
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400/60 group-hover:text-cyan-300/80 transition-colors">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-500/30 flex justify-center bg-white/[0.03] backdrop-blur-sm group-hover:border-cyan-400/30 transition-colors">
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-cyan-400/80 to-blue-400/80 rounded-full mt-1.5"
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
