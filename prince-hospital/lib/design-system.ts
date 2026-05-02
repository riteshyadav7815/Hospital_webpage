/**
 * DESIGN SYSTEM - Futuristic Healthcare UI
 * Glassmorphism + Neumorphism + Medical-tech aesthetic
 */

export const DESIGN = {
  // Color Palette
  colors: {
    // Primary gradient
    gradient: {
      primary: "from-slate-900 via-blue-900 to-cyan-900",
      secondary: "from-blue-950 to-cyan-900",
      accent: "from-cyan-400 to-blue-500",
      glow: "from-cyan-400/20 to-blue-500/20",
    },

    // Brand colors
    primary: {
      dark: "#0f172a", // Deep slate
      light: "#1e293b", // Lighter slate
      accent: "#00c6ff", // Neon cyan
      accentDim: "#00a8d8",
    },

    // Glass effects
    glass: {
      light: "rgba(15, 23, 42, 0.1)",
      medium: "rgba(15, 23, 42, 0.2)",
      strong: "rgba(15, 23, 42, 0.3)",
      darkLight: "rgba(255, 255, 255, 0.05)",
      darkMedium: "rgba(255, 255, 255, 0.1)",
      darkStrong: "rgba(255, 255, 255, 0.15)",
    },

    // Status colors
    status: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },
  },

  // Backdrop blur values
  blur: {
    sm: "blur(10px)",
    md: "blur(20px)",
    lg: "blur(30px)",
    xl: "blur(40px)",
  },

  // Shadows
  shadows: {
    glow: "0 0 30px rgba(0, 198, 255, 0.3)",
    glowStrong: "0 0 50px rgba(0, 198, 255, 0.5)",
    glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
    glassHover: "0 8px 48px rgba(0, 0, 0, 0.2)",
    neon: "0 0 20px rgba(0, 198, 255, 0.4), inset 0 0 20px rgba(0, 198, 255, 0.1)",
  },

  // Animation timings
  animation: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },

  // Easing functions
  easing: {
    ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeIn: "cubic-bezier(0.42, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.58, 1)",
    easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  // Spacing grid
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
  },

  // Border radius
  radius: {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    full: "9999px",
  },

  // Typography
  typography: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      satoshi: "'Satoshi', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    backdrop: 1040,
    offcanvas: 1050,
    modal: 1060,
    popover: 1070,
    tooltip: 1080,
  },
} as const;

/**
 * Glass Panel variants
 */
export const GLASS_VARIANTS = {
  light: {
    bg: "bg-white/10 dark:bg-slate-900/20",
    border: "border border-white/20 dark:border-slate-700/30",
    backdrop: "backdrop-blur-md",
  },
  medium: {
    bg: "bg-white/15 dark:bg-slate-900/30",
    border: "border border-white/25 dark:border-slate-600/40",
    backdrop: "backdrop-blur-lg",
  },
  strong: {
    bg: "bg-white/20 dark:bg-slate-900/40",
    border: "border border-white/30 dark:border-slate-500/50",
    backdrop: "backdrop-blur-xl",
  },
  dark: {
    bg: "bg-slate-950/40 dark:bg-black/20",
    border: "border border-white/10 dark:border-white/5",
    backdrop: "backdrop-blur-md",
  },
};

/**
 * Glow effect variants
 */
export const GLOW_VARIANTS = {
  none: "",
  soft: "shadow-[0_0_20px_rgba(0,198,255,0.2)]",
  medium: "shadow-[0_0_30px_rgba(0,198,255,0.3)]",
  strong: "shadow-[0_0_50px_rgba(0,198,255,0.4)]",
  neon: "shadow-[0_0_30px_rgba(0,198,255,0.4),inset_0_0_20px_rgba(0,198,255,0.1)]",
};

/**
 * Animation presets for Framer Motion
 */
export const MOTION = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },

  // Slide animations
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  slideInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },

  // Stagger container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Glow pulse animation
  glowPulse: {
    animate: {
      boxShadow: [
        "0 0 20px rgba(0, 198, 255, 0.3)",
        "0 0 40px rgba(0, 198, 255, 0.5)",
        "0 0 20px rgba(0, 198, 255, 0.3)",
      ],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },

  // Float animation
  float: {
    animate: {
      y: [0, -10, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  // Rotate animation
  rotate: {
    animate: {
      rotate: 360,
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default DESIGN;
