import React from "react";
import { cn } from "@/lib/utils";
import { GLASS_VARIANTS, GLOW_VARIANTS } from "@/lib/design-system";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof GLASS_VARIANTS;
  glow?: keyof typeof GLOW_VARIANTS;
  interactive?: boolean;
  children: React.ReactNode;
}

/**
 * GlassCard - Base glass morphism card component
 * Provides elegant translucent glass effect with backdrop blur
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      variant = "medium",
      glow = "none",
      interactive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const glassStyle = GLASS_VARIANTS[variant];

    return (
      <div
        ref={ref}
        className={cn(
          // Base glass styling
          glassStyle.bg,
          glassStyle.border,
          glassStyle.backdrop,
          // Glow effect
          GLOW_VARIANTS[glow],
          // Interactive states
          interactive && "hover:shadow-glass-hover transition-all duration-300",
          // Custom className
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
