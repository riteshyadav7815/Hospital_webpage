"use client";

import { CONTACT_DETAILS, NAV_LINKS, DEPARTMENTS } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart, Shield, Award, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/departments" },
    { name: "Doctors", href: "/doctors" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
  ];

  const departments = DEPARTMENTS.slice(0, 6);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-primary via-blue-500 to-teal-500" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital Info & Logo */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">P</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Prince Hospital</h2>
                <p className="text-gray-300 font-medium">Shekhawati, Rajasthan</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Advanced Multi-Specialty & Super-Specialty Care in Shekhawati region. 
              Providing compassionate healthcare with modern technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">{CONTACT_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">{CONTACT_DETAILS.appointmentPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">{CONTACT_DETAILS.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Departments</h3>
            <ul className="space-y-4">
              {departments.map((dept) => (
                <motion.li key={dept.id} whileHover={{ x: 5 }}>
                  <Link
                    href={`/departments#${dept.name.toLowerCase()}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{dept.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Button variant="outline" className="mt-6 border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/departments" className="flex items-center gap-2">
                View All Departments
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Working Hours & Emergency */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Working Hours</h3>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">OPD Timings</span>
                </div>
                <p className="text-gray-300">Mon - Sat: 9:00 AM - 9:00 PM</p>
                <p className="text-gray-300">Sunday: 10:00 AM - 4:00 PM</p>
              </div>

              <div className="bg-red-900/30 border border-red-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="font-semibold">Emergency</span>
                </div>
                <p className="text-gray-300">24/7 Emergency & Trauma Care</p>
                <p className="text-2xl font-bold text-white mt-2">{CONTACT_DETAILS.appointmentPhone}</p>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-4">Subscribe to Newsletter</h4>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-5 py-3">
                <Shield className="h-6 w-6 text-green-400" />
                <div>
                  <p className="font-semibold">NABH Accredited</p>
                  <p className="text-sm text-gray-400">Quality Healthcare</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-5 py-3">
                <Award className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">ISO 9001:2015</p>
                  <p className="text-sm text-gray-400">Certified Hospital</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-5 py-3">
                <Truck className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-semibold">24/7 Ambulance</p>
                  <p className="text-sm text-gray-400">Emergency Service</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">Accepted Payment Methods</p>
              <div className="flex gap-3 mt-2">
                <div className="h-8 w-12 bg-gray-800 rounded-md flex items-center justify-center">Visa</div>
                <div className="h-8 w-12 bg-gray-800 rounded-md flex items-center justify-center">MC</div>
                <div className="h-8 w-12 bg-gray-800 rounded-md flex items-center justify-center">UPI</div>
                <div className="h-8 w-12 bg-gray-800 rounded-md flex items-center justify-center">Cash</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Prince Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}