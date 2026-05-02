"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Radhika Singh",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "The medical team at Prince Hospital provided exceptional care during my surgery. The facilities are world-class and the staff is incredibly supportive throughout my recovery journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Aditya Kumar",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "I've been treated here multiple times and every experience has been outstanding. The doctors are knowledgeable and the care is truly personalized to each patient's needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Referring Physician",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "I confidently refer my patients to Prince Hospital. Their equipment and surgical expertise are among the best in the region. The outcomes speak for themselves.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ms. Anjali Patel",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    text: "From booking the appointment to post-operative care, everything was seamless. Truly a next-generation healthcare experience that puts patients first.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassPanel
      variant="medium"
      glow="soft"
      className="h-full p-8 flex flex-col justify-between border-white/10"
    >
      {/* Quote icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-cyan-400/40" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-cyan-400 text-cyan-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-200/80 mb-8 leading-relaxed flex-grow text-sm md:text-base">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-900" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
          <p className="text-xs text-slate-400">{testimonial.role}</p>
        </div>
      </div>
    </GlassPanel>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrev = useCallback(() => {
    setAutoPlay(false);
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setAutoPlay(false);
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setAutoPlay(false);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

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
      className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden isolate"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 198, 255, 0.07), transparent 70%)",
            top: "20%",
            right: "-10%",
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 70%)",
            bottom: "10%",
            left: "-5%",
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
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
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <GlassPanel variant="light" glow="soft" className="px-5 py-2.5 rounded-full">
              <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                Testimonials
              </span>
            </GlassPanel>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              What Our Patients Say
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300/80 max-w-2xl mx-auto leading-relaxed font-light">
            Hear from our satisfied patients and healthcare professionals about their experience with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${activeIndex}-${testimonial.id}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </motion.button>

            {/* Dot indicators */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "bg-cyan-400 w-8 h-2"
                      : "bg-white/20 w-2 h-2 hover:bg-white/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          {autoPlay && (
            <motion.div
              className="mt-6 text-center"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs text-slate-500 tracking-wide uppercase">
                Auto-rotating • Click to pause
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
