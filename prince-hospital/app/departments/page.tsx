"use client";

import { DEPARTMENTS, CONTACT_DETAILS } from "@/lib/constants";
import { Heart, Brain, Bone, Baby, Microscope, Truck, Utensils, Eye, Phone, Mail, Clock, MapPin, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Heart,
  Brain,
  Bone,
  Baby,
  Microscope,
  Ambulance: Truck,
  Stomach: Utensils,
  Skin: Eye,
};

export default function DepartmentsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const specialties = ["All", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Emergency", "Gastroenterology", "Dermatology"];

  const filteredDepartments = selectedSpecialty === "All"
    ? DEPARTMENTS
    : DEPARTMENTS.filter(dept => dept.name === selectedSpecialty);

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
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
                <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                  50+ Specialized Departments
                </span>
              </div>
            </GlassPanel>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] mb-8">
              Medical{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Departments & Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Prince Hospital offers comprehensive medical care across 50+ specialized departments. Our expert teams provide advanced diagnostics, treatment, and compassionate care.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "50+", label: "Medical Departments", color: "from-cyan-500/20 to-blue-500/20" },
                { value: "150+", label: "Expert Doctors", color: "from-green-500/20 to-emerald-500/20" },
                { value: "24/7", label: "Emergency Services", color: "from-red-500/20 to-pink-500/20" },
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
              Find Your Department
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <label className="block text-lg font-semibold mb-4 text-slate-200">Search by Specialty</label>
                <div className="flex flex-wrap gap-3">
                  {specialties.map((spec) => (
                    <motion.button
                      key={spec}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSpecialty(spec)}
                      className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialty === spec
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-glow-md"
                          : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {spec}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="lg:w-80">
                <label className="block text-lg font-semibold mb-4 text-slate-200">Quick Contact</label>
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

          {/* Departments Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredDepartments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Heart;
              return (
                <motion.div
                  key={dept.id}
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
                    <div className="flex items-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold ml-4">{dept.name}</h3>
                    </div>
                    <p className="text-slate-300/90 mb-6 leading-relaxed">{dept.description}</p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-sm text-slate-400">
                        <Phone size={18} className="mr-3" />
                        <span>Contact: {CONTACT_DETAILS.doctorsPhone}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <Clock size={18} className="mr-3" />
                        <span>OPD: 9AM‑9PM (Mon‑Sat)</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <GlassButton
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.location.href = "/contact"}
                      >
                        Contact Department
                      </GlassButton>
                      <GlassButton
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.location.href = "/doctors"}
                      >
                        View Doctors
                      </GlassButton>
                    </div>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Additional Hospital Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Diagnostic Center",
                  description: "Advanced imaging (CT, MRI, Ultrasound) and laboratory services with quick results.",
                  color: "from-cyan-500/20 to-blue-500/20",
                  icon: <Microscope className="h-8 w-8" />,
                },
                {
                  title: "Pharmacy",
                  description: "24‑hour in‑house pharmacy with wide range of medicines and healthcare products.",
                  color: "from-green-500/20 to-emerald-500/20",
                  icon: <Utensils className="h-8 w-8" />,
                },
                {
                  title: "Ambulance Service",
                  description: "Advanced life support ambulances with trained paramedics for emergency transport.",
                  color: "from-red-500/20 to-pink-500/20",
                  icon: <Truck className="h-8 w-8" />,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className={`p-8 rounded-3xl bg-gradient-to-br ${service.color}`}
                  >
                    <div className="p-4 rounded-2xl bg-white/10 w-fit mb-6 text-cyan-400">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-300/90">{service.description}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          >
            <GlassPanel variant="strong" glow="medium" className="p-10 rounded-3xl">
              <h2 className="text-4xl font-bold mb-12 text-center">Department Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Contact Helpline",
                    value: CONTACT_DETAILS.appointmentPhone,
                    icon: <Phone size={28} />,
                    color: "from-cyan-500/20 to-blue-500/20",
                  },
                  {
                    title: "Doctors Helpline",
                    value: CONTACT_DETAILS.doctorsPhone,
                    icon: <Phone size={28} />,
                    color: "from-green-500/20 to-emerald-500/20",
                  },
                  {
                    title: "Email",
                    value: CONTACT_DETAILS.email,
                    icon: <Mail size={28} />,
                    color: "from-purple-500/20 to-violet-500/20",
                  },
                  {
                    title: "Working Hours",
                    value: CONTACT_DETAILS.workingHours,
                    icon: <Clock size={28} />,
                    color: "from-amber-500/20 to-yellow-500/20",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassPanel
                      variant="medium"
                      glow="soft"
                      className={`p-6 rounded-2xl text-center bg-gradient-to-br ${item.color}`}
                    >
                      <div className="p-4 rounded-2xl bg-white/10 w-fit mx-auto mb-4">
                        <div className="text-cyan-400">{item.icon}</div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-300/90">{item.value}</p>
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-800/30 to-slate-900/30">
                <div className="flex items-center">
                  <MapPin size={32} className="text-cyan-400 mr-6" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Hospital Address</h3>
                    <p className="text-slate-300/90">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Need Help Choosing a Department?</h2>
            <p className="text-xl text-slate-300/80 mb-12 max-w-3xl mx-auto">
              Our medical coordinators can guide you to the right specialist based on your symptoms and medical history.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GlassButton
                size="lg"
                variant="primary"
                glow
                magnetic
                className="px-10 py-5 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Medical Coordinator
              </GlassButton>
              <GlassButton
                size="lg"
                variant="secondary"
                className="px-10 py-5 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule a Consultation
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}