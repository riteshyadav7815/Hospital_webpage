"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Pill,
  Activity,
} from "lucide-react";

interface Specialty {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
}

const specialties: Specialty[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Cardiology",
    description: "Advanced heart care and cardiac surgeries",
    color: "from-red-400/20 to-pink-400/20",
    hoverColor: "from-red-400/30 to-pink-400/30",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neurology",
    description: "Brain and nervous system treatments",
    color: "from-purple-400/20 to-blue-400/20",
    hoverColor: "from-purple-400/30 to-blue-400/30",
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: "Orthopedics",
    description: "Bone and joint specialists",
    color: "from-blue-400/20 to-cyan-400/20",
    hoverColor: "from-blue-400/30 to-cyan-400/30",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Ophthalmology",
    description: "Complete eye care solutions",
    color: "from-cyan-400/20 to-teal-400/20",
    hoverColor: "from-cyan-400/30 to-teal-400/30",
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: "Pharmacy",
    description: "Comprehensive medication management",
    color: "from-green-400/20 to-emerald-400/20",
    hoverColor: "from-green-400/30 to-emerald-400/30",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "General Surgery",
    description: "Expert surgical procedures",
    color: "from-orange-400/20 to-red-400/20",
    hoverColor: "from-orange-400/30 to-red-400/30",
  },
];

/**
 * Specialty Card with 3D tilt and glow effects
 */
function SpecialtyCard({
  specialty,
  index,
}: {
  specialty: Specialty;
  index: number;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <motion.div
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ perspective: 1000 }}
      >
        <GlassPanel
          variant="medium"
          glow={isHovered ? "medium" : "soft"}
          className={`h-full p-8 cursor-pointer transition-all duration-300 group
            bg-gradient-to-br ${specialty.color} 
            hover:bg-gradient-to-br ${specialty.hoverColor}
          `}
        >
          {/* Icon container with glow */}
          <motion.div
            className="relative mb-6"
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400 relative z-10">
              {specialty.icon}
            </div>
            {isHovered && (
              <motion.div
                className="absolute inset-0 w-16 h-16 rounded-lg bg-cyan-400/20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white">
            {specialty.title}
          </h3>

          {/* Description */}
          <p className="text-slate-200 mb-6 leading-relaxed">
            {specialty.description}
          </p>

          {/* Learn more link */}
          <motion.div
            className="flex items-center gap-2 text-cyan-400 font-semibold"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn More</span>
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Border glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-cyan-400/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </GlassPanel>
      </motion.div>
    </motion.div>
  );
}

/**
 * Specialties Section
 * Grid of interactive specialty cards with 3D effects
 */
export function SpecialtiesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 rounded-full mix-blend-screen filter blur-3xl"
            style={{
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(0, 198, 255, 0.1), transparent 70%)"
                  : "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)",
              top: `${20 + i * 25}%`,
              left: `${15 + i * 25}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <GlassPanel variant="light" glow="soft" className="px-4 py-2">
              <span className="text-cyan-400 font-semibold">SPECIALTIES</span>
            </GlassPanel>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Medical Specialties
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive range of medical services delivered by
            expert specialists
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} specialty={specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
