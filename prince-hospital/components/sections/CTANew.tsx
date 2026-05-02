"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { Phone, MessageCircle, ArrowRight, Clock, Users, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

const infoCards = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with dedicated trauma teams always ready.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Doctors",
    description: "200+ experienced medical professionals across all major specialties.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment and robotic-assisted surgery suites.",
  },
];

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(content, { opacity: 0, y: 50 });

    const tween = gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-snap-section
      className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden isolate"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 198, 255, 0.1), transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06), transparent 70%)",
            top: "20%",
            left: "20%",
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <GlassPanel variant="light" glow="soft" className="inline-block px-5 py-2.5 rounded-full">
              <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                Get Started
              </span>
            </GlassPanel>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Ready to Experience Excellence?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Join thousands of patients who trust Prince Hospital for their healthcare
            needs. Our state-of-the-art facilities and compassionate team are ready to
            serve you.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <GlassButton
              size="lg"
              variant="primary"
              glow
              magnetic
              onClick={() => {
                window.location.href = "/contact";
              }}
              className="min-w-[220px] px-8 py-4 text-base group"
            >
              <Phone className="w-5 h-5 mr-2.5" />
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </GlassButton>

            <GlassButton
              size="lg"
              variant="secondary"
              onClick={() => {
                alert("Chat widget would open here");
              }}
              className="min-w-[220px] px-8 py-4 text-base hover:bg-white/15 hover:border-white/25 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2.5" />
              Chat with Us
            </GlassButton>
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GlassPanel
                  variant="medium"
                  glow="soft"
                  className="p-6 h-full border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-4 mx-auto">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">{card.title}</h3>
                  <p className="text-slate-300/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
