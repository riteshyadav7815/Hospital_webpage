"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

/**
 * GlassButton - Animated glass button with hover effects
 * Supports magnetic hover effect and glow animations
 */
export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      glow = true,
      magnetic = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

    // Magnetic hover effect
    useEffect(() => {
      if (!magnetic) return;

      const button = buttonRef.current || (ref as React.RefObject<HTMLButtonElement>)?.current;
      if (!button) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = 100; // Range of magnetic effect
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

        if (distanceFromCenter < distance) {
          const angle = Math.atan2(dy, dx);
          const strength = 1 - distanceFromCenter / distance;
          setMagneticOffset({
            x: Math.cos(angle) * strength * 20,
            y: Math.sin(angle) * strength * 20,
          });
        }
      };

      const handleMouseLeave = () => {
        setMagneticOffset({ x: 0, y: 0 });
      };

      window.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [magnetic, ref]);

    // Variant styles
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-glow-lg",
      secondary:
        "bg-white/10 dark:bg-white/5 text-slate-900 dark:text-white border border-white/20 hover:bg-white/20 hover:border-white/40",
      ghost:
        "bg-transparent text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 border border-transparent",
      danger: "bg-red-500/90 text-white hover:bg-red-600 hover:shadow-lg",
    };

    // Size styles
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={buttonRef}
        animate={magnetic ? magneticOffset : { x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className={cn(
          // Base styles
          "relative font-semibold rounded-lg transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variant
          variantStyles[variant],
          // Size
          sizeStyles[size],
          // Glow
          glow && "shadow-glow",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {/* Glow effect background */}
        {glow && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-lg -z-10"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        )}

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;
