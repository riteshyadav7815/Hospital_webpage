import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { GLASS_VARIANTS, GLOW_VARIANTS } from "@/lib/design-system";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof GLASS_VARIANTS;
  glow?: keyof typeof GLOW_VARIANTS;
  animated?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
  motionProps?: MotionProps;
}

/**
 * GlassPanel - Advanced glass panel with optional Framer Motion animations
 * Enhanced version with motion support and more customization
 */
export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      variant = "strong",
      glow = "soft",
      animated = false,
      interactive = false,
      className,
      children,
      motionProps = {},
      ...props
    },
    ref
  ) => {
    const glassStyle = GLASS_VARIANTS[variant];

    const motionConfig = animated
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          ...motionProps,
        }
      : {};

    const sharedProps = {
      ref,
      className: cn(
        // Base glass styling
        glassStyle.bg,
        glassStyle.border,
        glassStyle.backdrop,
        // Glow effect
        GLOW_VARIANTS[glow],
        // Interactive states
        interactive &&
          "hover:shadow-glass-hover hover:border-white/40 dark:hover:border-slate-400/40 transition-all duration-300 cursor-pointer",
        // Custom className
        className
      ),
    };

    if (animated) {
      return (
        <motion.div {...sharedProps} {...motionConfig} {...(props as any)}>
          {children}
        </motion.div>
      );
    }

    return (
      <div {...sharedProps} {...props}>
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export default GlassPanel;
