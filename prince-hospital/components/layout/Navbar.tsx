"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT_DETAILS } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Emergency:</span>
                <a href={`tel:${CONTACT_DETAILS.appointmentPhone}`} className="hover:underline">
                  {CONTACT_DETAILS.appointmentPhone}
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>OPD: 9:00 AM - 9:00 PM</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{CONTACT_DETAILS.address}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="/appointment" 
                className="bg-white text-primary hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Prince Hospital</h1>
                  <p className="text-sm text-gray-600">Shekhawati, Rajasthan</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex lg:hidden items-center space-x-4">
                <a
                  href="tel:7230090108"
                  className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency</span>
                </a>
              </div>
              
              <div className="md:hidden">
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-gray-700" />
                ) : (
                  <Menu className="h-7 w-7 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-6 animate-slide-down">
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Emergency</p>
                      <a href={`tel:${CONTACT_DETAILS.appointmentPhone}`} className="text-lg font-semibold text-primary">
                        {CONTACT_DETAILS.appointmentPhone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">OPD Timings</p>
                      <p className="text-base">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                  <a
                    href="/appointment"
                    className="flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white hover:bg-primary/90 transition-colors mt-4"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}