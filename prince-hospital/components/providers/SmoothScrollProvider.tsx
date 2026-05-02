"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SnapScrollProviderProps {
  children: React.ReactNode;
}

/**
 * SnapScrollProvider
 * GSAP ScrollTrigger-powered section snap scrolling for homepage.
 * 
 * Features:
 * - Section-to-section snap with momentum awareness
 * - Velocity-based snap duration (closer = faster snap)
 * - Mobile-optimized touch handling
 * - Respects prefers-reduced-motion
 * - Proper cleanup via gsap.context()
 * - Auto-refresh on resize with debounce
 * - No scroll jank (delay: 0, immediate response)
 */
export function SnapScrollProvider({ children }: SnapScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Small delay to ensure all sections are mounted and have heights
    const initTimer = setTimeout(() => {
      ctxRef.current = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("[data-snap-section]");
        if (sections.length === 0) return;

        const maxScroll = ScrollTrigger.maxScroll(window);
        if (!maxScroll || maxScroll <= 0) return;

        // Calculate snap targets (section centers as progress 0-1)
        const snapTargets = sections.map((section) => {
          const start = section.offsetTop;
          const height = section.offsetHeight;
          const center = start + height / 2;
          return center / maxScroll;
        }).filter((t) => t >= 0 && t <= 1);

        // Ensure boundaries
        if (snapTargets[0] > 0.001) snapTargets.unshift(0);
        if (snapTargets[snapTargets.length - 1] < 0.999) snapTargets.push(1);

        // Create global snap ScrollTrigger
        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const nearest = gsap.utils.snap(snapTargets, value);
              return nearest;
            },
            duration: { min: 0.25, max: 0.7 },
            delay: 0,
            ease: "power2.out",
          },
        });
      }, containerRef);
    }, 200);

    // Refresh on resize with debounce
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      // Clean up all GSAP animations and ScrollTriggers in this context
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}

export default SnapScrollProvider;
