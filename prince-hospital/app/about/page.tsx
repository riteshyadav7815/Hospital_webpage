"use client";

import { Heart, Target, Users, Award, Shield, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { DESIGN } from "@/lib/design-system";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <GlassPanel
              variant="light"
              glow="medium"
              className="w-fit px-5 py-2.5 rounded-full border-white/10 mb-8"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
                <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                  Since 2010
                </span>
              </div>
            </GlassPanel>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Prince Hospital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/90 max-w-3xl leading-relaxed">
              A premier multi‑specialty hospital in Shekhawati region, providing compassionate healthcare with cutting‑edge technology since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <GlassButton
                size="lg"
                variant="primary"
                glow
                magnetic
                className="px-8 py-4 text-lg hover:scale-[1.03]"
                onClick={() => window.location.href = "/contact"}
              >
                <Heart className="w-5 h-5 mr-3" />
                Contact Us
              </GlassButton>
              <GlassButton
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
                onClick={() => window.location.href = "/departments"}
              >
                Explore Departments
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="space-y-12">
              <GlassPanel
                variant="medium"
                glow="soft"
                className="p-8 rounded-3xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-200/90 leading-relaxed">
                  To provide accessible, affordable, and high‑quality healthcare services to all sections of society with compassion, dignity, and respect.
                </p>
              </GlassPanel>
              <GlassPanel
                variant="medium"
                glow="soft"
                className="p-8 rounded-3xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400 mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-slate-200/90 leading-relaxed">
                  To be the most trusted healthcare institution in Rajasthan, recognized for clinical excellence, patient‑centric care, and medical innovation.
                </p>
              </GlassPanel>
            </div>
            <GlassPanel
              variant="strong"
              glow="medium"
              className="p-8 rounded-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Values</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Patient First",
                    description: "Every decision is made with the patient's best interest in mind.",
                    color: "from-cyan-500/20 to-blue-500/20",
                  },
                  {
                    title: "Clinical Excellence",
                    description: "Maintaining the highest standards of medical care and safety.",
                    color: "from-green-500/20 to-emerald-500/20",
                  },
                  {
                    title: "Integrity & Ethics",
                    description: "Upholding honesty, transparency, and ethical practices.",
                    color: "from-purple-500/20 to-violet-500/20",
                  },
                  {
                    title: "Compassionate Care",
                    description: "Treating every patient with empathy, kindness, and respect.",
                    color: "from-pink-500/20 to-rose-500/20",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r hover:bg-gradient-to-r hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                      <p className="text-slate-300/80">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              By The <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-slate-300/80 max-w-3xl mx-auto">
              Our commitment to healthcare excellence reflected in numbers.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "700+", label: "Hospital Beds", icon: "🛏️", color: "from-cyan-500/20 to-blue-500/20" },
              { value: "150+", label: "Expert Doctors", icon: "👨‍⚕️", color: "from-green-500/20 to-emerald-500/20" },
              { value: "50+", label: "Departments", icon: "🏥", color: "from-purple-500/20 to-violet-500/20" },
              { value: "24/7", label: "Emergency Service", icon: "🚑", color: "from-red-500/20 to-pink-500/20" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <GlassPanel
                  variant="medium"
                  glow="soft"
                  className={`p-8 rounded-3xl text-center bg-gradient-to-br ${stat.color}`}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-slate-300/80">{stat.label}</div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-slate-300/80 max-w-3xl mx-auto">
              Guided by experienced medical professionals and administrators.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Medical Director",
                experience: "25+ years in healthcare administration",
                color: "from-cyan-500/20 to-blue-500/20",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Chief of Medical Services",
                experience: "20+ years in clinical leadership",
                color: "from-purple-500/20 to-violet-500/20",
              },
              {
                name: "Mr. Vikram Singh",
                role: "Hospital Administrator",
                experience: "15+ years in hospital management",
                color: "from-green-500/20 to-emerald-500/20",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <GlassPanel
                  variant="medium"
                  glow="soft"
                  className="p-8 rounded-3xl text-center"
                >
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${leader.color} flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6`}>
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{leader.role}</p>
                  <p className="text-slate-300/80">{leader.experience}</p>
                  <div className="mt-6">
                    <GlassButton
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact
                    </GlassButton>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 text-amber-400 mb-6">
              <Award className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Accreditation & <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Quality</span>
            </h2>
            <p className="text-xl text-slate-300/80 mb-12 max-w-3xl mx-auto">
              Prince Hospital is committed to maintaining the highest standards of healthcare quality and patient safety.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["NABH", "ISO 9001", "NABL", "Green OT"].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <GlassPanel
                    variant="strong"
                    glow="soft"
                    className="p-6 rounded-2xl text-center"
                  >
                    <div className="text-2xl font-bold text-cyan-400">{cert}</div>
                    <div className="text-sm text-slate-300/80 mt-2">Certified</div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
            <div className="mt-16">
              <GlassButton
                size="lg"
                variant="primary"
                glow
                className="px-10 py-4 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                <Shield className="w-5 h-5 mr-3" />
                Request Quality Report
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}