"use client";

import { CONTACT_DETAILS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Shield, Zap, Users, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form
    alert("Form submitted! This is a demo.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  24/7 Emergency Support
                </span>
              </div>
            </GlassPanel>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] mb-8">
              Contact{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Prince Hospital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed mb-12">
              We're here to help you 24/7. Reach out through any channel below for medical inquiries, appointments, or emergencies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "24/7", label: "Emergency Helpline", color: "from-red-500/20 to-pink-500/20" },
                { value: "30 min", label: "Average Response Time", color: "from-green-500/20 to-emerald-500/20" },
                { value: "100%", label: "Confidential", color: "from-purple-500/20 to-indigo-500/20" },
                { value: "700+", label: "Hospital Beds", color: "from-cyan-500/20 to-blue-500/20" },
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

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8"
              >
                Get In Touch
              </motion.h2>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className="p-6 rounded-3xl cursor-pointer group hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center mr-5">
                        <Phone className="h-7 w-7 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Emergency & Contact</h3>
                        <a
                          href={`tel:${CONTACT_DETAILS.appointmentPhone}`}
                          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors block"
                        >
                          {CONTACT_DETAILS.appointmentPhone}
                        </a>
                        <p className="text-slate-400 mt-1">24/7 Emergency Helpline</p>
                        <p className="text-slate-500 text-sm mt-2">For life‑threatening emergencies, call immediately</p>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className="p-6 rounded-3xl cursor-pointer group hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-5">
                        <Mail className="h-7 w-7 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <a
                          href={`mailto:${CONTACT_DETAILS.email}`}
                          className="text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors block"
                        >
                          {CONTACT_DETAILS.email}
                        </a>
                        <p className="text-slate-400 mt-1">General Inquiries & Medical Records</p>
                        <p className="text-slate-500 text-sm mt-2">Response within 24 hours</p>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className="p-6 rounded-3xl cursor-pointer group hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mr-5">
                        <MapPin className="h-7 w-7 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Visit Our Hospital</h3>
                        <p className="text-slate-300">{CONTACT_DETAILS.address}</p>
                        <p className="text-slate-500 text-sm mt-2">Open 24/7 for emergencies</p>
                        <GlassButton
                          variant="secondary"
                          size="sm"
                          className="mt-4"
                          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT_DETAILS.address)}`, '_blank')}
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </GlassButton>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className="p-6 rounded-3xl cursor-pointer group hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mr-5">
                        <Clock className="h-7 w-7 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Emergency Department</span>
                            <span className="font-semibold text-green-400">24/7</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">OPD</span>
                            <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Pharmacy</span>
                            <span className="font-semibold text-green-400">24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassPanel
                  variant="strong"
                  glow="medium"
                  className="p-8 rounded-3xl"
                >
                  <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                  <p className="text-slate-300/90 mb-8">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Department</label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select Department</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Neurology">Neurology</option>
                          <option value="Orthopedics">Orthopedics</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Emergency">Emergency</option>
                          <option value="General">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                        placeholder="Describe your medical inquiry or appointment request..."
                        required
                      />
                    </div>

                    <GlassButton
                      type="submit"
                      size="lg"
                      variant="primary"
                      glow
                      magnetic
                      className="w-full py-4 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </GlassButton>
                  </form>
                </GlassPanel>
              </motion.div>

              {/* Additional Contact Options */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <GlassPanel
                  variant="medium"
                  glow="soft"
                  className="p-8 rounded-3xl"
                >
                  <h3 className="text-xl font-bold mb-6">Other Ways to Connect</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <GlassButton
                      variant="secondary"
                      className="py-3"
                      onClick={() => window.open(`https://wa.me/${CONTACT_DETAILS.appointmentPhone.replace(/\D/g, '')}`, '_blank')}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp
                    </GlassButton>
                    <GlassButton
                      variant="secondary"
                      className="py-3"
                      onClick={() => window.location.href = "/departments"}
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Departments
                    </GlassButton>
                  </div>
                </GlassPanel>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}