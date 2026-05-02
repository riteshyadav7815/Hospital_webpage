"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { Star, MapPin, Briefcase } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: string;
  location: string;
  bio: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Anderson",
    specialization: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    location: "New Delhi",
    bio: "Expert cardiologist with specialized training in interventional cardiology",
  },
  {
    id: 2,
    name: "Dr. James Mitchell",
    specialization: "Neurology",
    experience: "12+ Years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    location: "Mumbai",
    bio: "Specialist in neurological disorders and surgical interventions",
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialization: "Orthopedics",
    experience: "18+ Years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    location: "Bangalore",
    bio: "Leading orthopedic surgeon with expertise in joint replacement",
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialization: "General Surgery",
    experience: "10+ Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    location: "Hyderabad",
    bio: "Experienced general surgeon with advanced laparoscopic techniques",
  },
];

/**
 * Doctor Card with hover reveal effect
 */
function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassPanel
        variant="medium"
        glow={isHovered ? "medium" : "soft"}
        className="h-full overflow-hidden"
      >
        {/* Image container */}
        <motion.div
          className="relative h-64 overflow-hidden rounded-lg mb-4"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />

          {/* Stats overlay */}
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full w-fit">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(doctor.rating)
                        ? "fill-cyan-400 text-cyan-400"
                        : "text-slate-400"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                {doctor.rating}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-2">
          <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>

          {/* Specialization badge */}
          <motion.div
            className="inline-block mb-3 px-3 py-1 bg-cyan-400/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-cyan-400">
              {doctor.specialization}
            </span>
          </motion.div>

          {/* Info grid */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-slate-300">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">{doctor.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">{doctor.location}</span>
            </div>
          </div>

          {/* Bio - show on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={
              isHovered
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
            className="mb-4 text-slate-300 text-sm leading-relaxed overflow-hidden"
          >
            {doctor.bio}
          </motion.div>

          {/* CTA Button */}
          <GlassButton
            size="sm"
            variant="primary"
            glow
            className="w-full"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Contact Us
          </GlassButton>
        </div>
      </GlassPanel>
    </motion.div>
  );
}

/**
 * Doctors Section
 * Grid of premium doctor profile cards with hover reveal
 */
export function DoctorsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 198, 255, 0.1), transparent 70%)",
            top: "10%",
            right: "5%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
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
              <span className="text-cyan-400 font-semibold">OUR DOCTORS</span>
            </GlassPanel>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expert Medical Professionals
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet our highly qualified and experienced doctors dedicated to your
            health
          </p>
        </motion.div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <GlassButton
            size="lg"
            variant="secondary"
            onClick={() => {
              window.location.href = "/doctors";
            }}
          >
            View All Doctors
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
}

export default DoctorsSection;
