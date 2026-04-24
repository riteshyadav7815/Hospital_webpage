"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Calendar, Phone, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Modern gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-slide1.jpg"
          alt="Modern Hospital Interior"
          fill
          priority
          className="object-cover brightness-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 mb-8 border border-white/20 shadow-lg"
            >
              <CheckCircle className="h-5 w-5 text-emerald-300" />
              <span className="text-base font-semibold tracking-wide">Trusted by 50,000+ Patients</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
              Advanced
              <span className="block text-white mt-2">Healthcare</span>
              <span className="block text-blue-100/90 text-4xl md:text-5xl lg:text-6xl font-bold mt-4">With Compassion</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-light">
              World-class multi‑specialty hospital providing comprehensive medical care with state‑of‑the‑art technology and expert doctors.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 px-10 py-7 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold">
                <Calendar className="mr-3 h-6 w-6" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/20 px-10 py-7 text-xl rounded-2xl backdrop-blur-sm font-semibold">
                <Phone className="mr-3 h-6 w-6" />
                Emergency Call
              </Button>
            </div>

            {/* Stats - Premium Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "700+", label: "Hospital Beds", icon: Users, color: "bg-blue-500/20" },
                { value: "150+", label: "Expert Doctors", icon: Users, color: "bg-emerald-500/20" },
                { value: "24/7", label: "Emergency", icon: Clock, color: "bg-amber-500/20" },
                { value: "50+", label: "Departments", icon: CheckCircle, color: "bg-purple-500/20" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Appointment Widget - Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:mt-0"
          >
            <Card className="bg-white/98 backdrop-blur-xl border-0 shadow-2xl rounded-3xl p-10 max-w-md mx-auto lg:mx-0 lg:ml-auto border border-white/30">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Book Appointment</h3>
                <p className="text-gray-600 text-lg">Get instant consultation with our expert doctors</p>
              </div>

              <form className="space-y-7">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Full Name</label>
                  <Input
                    type="text"
                    className="w-full px-5 py-4 border border-gray-300/80 rounded-2xl focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 shadow-sm text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Phone Number</label>
                  <Input
                    type="tel"
                    className="w-full px-5 py-4 border border-gray-300/80 rounded-2xl focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 shadow-sm text-base"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Department</label>
                  <select className="w-full px-5 py-4 border border-gray-300/80 rounded-2xl focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 shadow-sm appearance-none bg-white text-base">
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Preferred Date</label>
                  <Input
                    type="date"
                    className="w-full px-5 py-4 border border-gray-300/80 rounded-2xl focus:ring-3 focus:ring-primary/30 focus:border-primary transition-all duration-300 shadow-sm text-base"
                  />
                </div>

                <Button type="submit" className="w-full py-5 text-xl rounded-2xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Now
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t border-gray-200/60">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-3 bg-primary/5 rounded-2xl px-5 py-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-gray-600">Emergency</div>
                      <div className="text-lg font-bold text-gray-900">72300 90108</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Quick Info Cards (Positioned below hero) - Premium Design */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Visitor Information",
                description: "Visiting hours & guidelines",
                icon: Users,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                border: "border-blue-100",
              },
              {
                title: "Find a Doctor",
                description: "Search by specialty",
                icon: Users,
                color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                border: "border-emerald-100",
              },
              {
                title: "Find a Location",
                description: "Maps & directions",
                icon: MapPin,
                color: "bg-gradient-to-br from-purple-500 to-purple-600",
                border: "border-purple-100",
              },
              {
                title: "Contact Hotline",
                description: "24/7 emergency support",
                icon: Phone,
                color: "bg-gradient-to-br from-rose-500 to-rose-600",
                border: "border-rose-100",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <Card className="bg-white border-0 shadow-2xl rounded-3xl p-8 text-center hover:shadow-3xl transition-all duration-500 border border-gray-100/50 group-hover:border-gray-200">
                  <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{card.title}</h4>
                  <p className="text-gray-600 text-base mb-6">{card.description}</p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                    <span>Explore</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}