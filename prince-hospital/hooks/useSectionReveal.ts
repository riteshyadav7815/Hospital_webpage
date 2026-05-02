"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseSectionRevealOptions {
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Distance to translate Y (px) */
  y?: number;
  /** Duration of reveal animation (seconds) */
  duration?: number;
  /** Stagger between child elements (seconds) */
  stagger?: number;
  /** Child selector for staggered reveals */
  childSelector?: string;
  /** Start trigger position */
  start?: string;
  /** Whether to animate children separately */
  animateChildren?: boolean;
}

/**
 * useSectionReveal
 * GSAP ScrollTrigger hook for subtle section reveal animations.
 * 
 * Usage:
 * const sectionRef = useSectionReveal({ delay: 0.2, y: 40 });
 * return <section ref={sectionRef}>...</section>
 */
export function useSectionReveal(options: UseSectionRevealOptions = {}) {
  const {
    delay = 0,
    y = 40,
    duration = 0.8,
    stagger = 0.1,
    childSelector,
    start = "top 85%",
    animateChildren = false,
  } = options;

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Just make visible without animation
      gsap.set(element, { opacity: 1, y: 0 });
      if (animateChildren && childSelector) {
        gsap.set(element.querySelectorAll(childSelector), { opacity: 1, y: 0 });
      }
      return;
    }

    const targets = animateChildren && childSelector
      ? element.querySelectorAll(childSelector)
      : [element];

    // Set initial state
    gsap.set(targets, { opacity: 0, y });

    // Create reveal animation
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: animateChildren ? stagger : 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, duration, stagger, childSelector, start, animateChildren]);

  return ref;
}

export default useSectionReveal;
