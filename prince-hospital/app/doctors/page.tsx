"use client";

import { DOCTORS, CONTACT_DETAILS, DEPARTMENTS } from "@/lib/constants";
import { User, Phone, Mail, Calendar, Award, Clock, Stethoscope, Star, ChevronRight, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { useState } from "react";

export default function DoctorsPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  
  const specializations = ["All", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Emergency Medicine"];
  
  const filteredDoctors = DOCTORS.filter(doctor => {
    const matchesSpecialization = selectedSpecialization === "All" || doctor.specialization === selectedSpecialization;
    const matchesDepartment = selectedDepartment === "All" || doctor.specialization.toLowerCase().includes(selectedDepartment.toLowerCase());
    return matchesSpecialization && matchesDepartment;
  });

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
            className="max-w-5xl mx-auto text-center"
          >
            <GlassPanel
              variant="light"
              glow="medium"
              className="w-fit px-5 py-2.5 rounded-full border-white/10 mb-8 mx-auto"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                  World‑Class Medical Team
                </span>
              </div>
            </GlassPanel>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] mb-8">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Expert Doctors
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Prince Hospital is home to 150+ highly qualified doctors across 50+ specialties. Our medical team combines expertise, compassion, and cutting‑edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "150+", label: "Expert Doctors", color: "from-cyan-500/20 to-blue-500/20" },
                { value: "50+", label: "Medical Specialties", color: "from-green-500/20 to-emerald-500/20" },
                { value: "15+", label: "Years Avg. Experience", color: "from-purple-500/20 to-pink-500/20" },
                { value: "24/7", label: "Emergency Doctors", color: "from-red-500/20 to-orange-500/20" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className={`p-6 rounded-2xl text-center bg-gradient-to-br ${stat.color}`}
                  >
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-slate-300/80 text-sm mt-2">{stat.label}</div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <GlassPanel
            variant="strong"
            glow="medium"
            className="p-8 rounded-3xl mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Search className="h-8 w-8 text-cyan-400" />
              Find Your Doctor
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-4 text-slate-200">Search by Specialization</label>
                <div className="flex flex-wrap gap-3">
                  {specializations.map((spec) => (
                    <motion.button
                      key={spec}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSpecialization(spec)}
                      className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialization === spec
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-glow-md"
                          : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {spec}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-4 text-slate-200">Search by Department</label>
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="All">All Departments</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name}>{dept.name}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-slate-400" />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <GlassButton
                  size="lg"
                  variant="primary"
                  glow
                  magnetic
                  className="w-full py-4 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Medical Coordinator
                  <ChevronRight className="ml-2 h-5 w-5" />
                </GlassButton>
              </div>
            </div>
          </GlassPanel>

          {/* Doctors Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <GlassPanel
                  variant="medium"
                  glow="soft"
                  className="h-full p-6 rounded-3xl cursor-pointer group"
                >
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                        {doctor.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <Star size={14} className="text-white" />
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                      <div className="flex items-center mt-1">
                        <Stethoscope size={16} className="text-cyan-400 mr-2" />
                        <span className="text-cyan-400 font-semibold">{doctor.specialization}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} className="text-amber-500 fill-amber-500" />
                        ))}
                        <span className="ml-2 text-sm text-slate-400">5.0 (120 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Award size={18} className="text-cyan-400 mr-3" />
                      <div>
                        <div className="text-sm text-slate-400">Qualification</div>
                        <div className="font-medium text-white">{doctor.qualification}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-cyan-400 mr-3" />
                      <div>
                        <div className="text-sm text-slate-400">Experience</div>
                        <div className="font-medium text-white">{doctor.experience}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-cyan-400 mr-3" />
                      <div>
                        <div className="text-sm text-slate-400">Availability</div>
                        <div className="font-medium text-white">{doctor.availability}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex gap-3">
                      <GlassButton
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.location.href = "/contact"}
                      >
                        Book Appointment
                      </GlassButton>
                      <GlassButton
                        variant="secondary"
                        size="sm"
                        className="w-12"
                        onClick={() => window.location.href = `tel:${CONTACT_DETAILS.doctorsPhone}`}
                      >
                        <Phone size={20} />
                      </GlassButton>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <GlassPanel
              variant="strong"
              glow="medium"
              className="p-10 rounded-3xl text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Can't Find Your Doctor?</h2>
              <p className="text-xl text-slate-300/90 max-w-3xl mx-auto mb-8">
                Our medical coordinators can help you find the right specialist for your needs. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlassButton
                  size="lg"
                  variant="primary"
                  glow
                  magnetic
                  className="px-8 py-4 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Medical Coordinator
                  <ChevronRight className="ml-2 h-5 w-5" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg"
                  onClick={() => window.location.href = `tel:${CONTACT_DETAILS.appointmentPhone}`}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Appointment
                </GlassButton>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>
    </div>
  );
}