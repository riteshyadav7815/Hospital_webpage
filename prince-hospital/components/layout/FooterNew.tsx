"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Heart } from "lucide-react";

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 text-slate-400 hover:text-cyan-400"
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
}

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Departments", href: "/departments" },
      { label: "Doctors", href: "/doctors" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Emergency", href: "#" },
      { label: "Cardiology", href: "#" },
      { label: "Neurology", href: "#" },
      { label: "Orthopedics", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black overflow-hidden isolate">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 198, 255, 0.05), transparent 70%)",
            bottom: "-20%",
            left: "-10%",
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main footer content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Prince Hospital
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Delivering excellence in healthcare with state-of-the-art facilities
              and compassionate care. Your health is our priority.
            </p>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={Facebook} href="#" label="Facebook" />
              <SocialIcon icon={Twitter} href="#" label="Twitter" />
              <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
              <SocialIcon icon={Instagram} href="#" label="Instagram" />
            </div>
          </motion.div>

          {/* Link sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-4">
              <h4 className="font-bold text-white text-sm tracking-wide uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@princehospital.com",
                  href: "mailto:info@princehospital.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "New Delhi, India",
                  href: "#",
                },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={i}
                    href={contact.href}
                    className="flex items-start gap-3 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 mb-0.5">{contact.label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Bottom footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-slate-500 text-center md:text-left flex items-center gap-1.5">
            © 2024 Prince Hospital. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            for better healthcare.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/30 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
