import { CONTACT_DETAILS, DOCTORS, DEPARTMENTS } from "@/lib/constants";
import { Calendar, Clock, User, Phone, MessageSquare, Video, CheckCircle, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Prince Hospital",
  description: "Book your medical appointment online with Prince Hospital. Choose from 150+ expert doctors, multiple departments, and convenient time slots.",
  keywords: ["book appointment", "online appointment", "doctor appointment", "hospital appointment", "medical consultation"],
};

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Fast, easy, and secure appointment booking with 150+ expert doctors across 50+ specialties. Choose your preferred method below.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Booking Available</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">15 min</div>
              <div className="text-sm">Average Response Time</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Secure & Confidential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Choose Your Booking Method</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the most convenient way to book your appointment with Prince Hospital.
            </p>
          </div>

          {/* Booking Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Quick Appointment Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl p-8 text-white transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm mr-4">
                  <Calendar size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Quick Appointment</h3>
                  <div className="text-primary-100">Fast & Simple</div>
                </div>
              </div>
              <p className="mb-8 text-primary-100">
                Book your appointment quickly with our simple form or call us directly for immediate assistance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Simple 2‑step process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="mr-3" />
                  <span>Direct doctor matching</span>
                </div>
              </div>
              <div className="space-y-4">
                <Link
                  href="#online-form"
                  className="block w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-xl text-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  <Calendar size={24} className="mr-3" />
                  Book Appointment Online
                </Link>
                <a
                  href={`tel:${CONTACT_DETAILS.appointmentPhone}`}
                  className="block w-full border-2 border-white text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Phone size={24} className="mr-3" />
                  Call Now: {CONTACT_DETAILS.appointmentPhone}
                </a>
              </div>
            </div>

            {/* Online Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Online Form</h3>
              </div>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Fill out our detailed appointment form and our team will contact you within 30 minutes to confirm.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Detailed medical history capture</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Insurance information collection</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Preferred time slot selection</span>
                </div>
              </div>
              <Link
                href="#online-form"
                className="block w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center font-bold py-4 px-6 rounded-xl text-lg hover:shadow-lg transition-shadow"
              >
                Fill Online Form
              </Link>
            </div>

            {/* Phone Booking */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Phone Booking</h3>
              </div>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Speak directly with our appointment coordinators for personalized assistance and immediate confirmation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Immediate confirmation</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Personalized guidance</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="mr-3 text-green-500" />
                  <span>Emergency priority booking</span>
                </div>
              </div>
              <a
                href={`tel:${CONTACT_DETAILS.appointmentPhone}`}
                className="block w-full border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 text-center font-bold py-4 px-6 rounded-xl text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                Call {CONTACT_DETAILS.appointmentPhone}
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                <div className="text-gray-600 dark:text-gray-300">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Emergency Booking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Online Form Section */}
          <div id="online-form" className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Online Appointment Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Select Department</label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                  <option>Choose a department</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Preferred Doctor</label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                  <option>Any available doctor</option>
                  {DOCTORS.map((doctor) => (
                    <option key={doctor.id}>{doctor.name} - {doctor.specialization}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Medical Concern</label>
                <textarea
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white h-32"
                  placeholder="Briefly describe your medical concern"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-4 px-6 rounded-xl text-lg hover:shadow-xl transition-shadow"
                >
                  Submit Appointment Request
                </button>
              </div>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Why Book With Prince Hospital?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Instant Confirmation</h3>
                <p className="text-gray-600 dark:text-gray-300">Receive appointment confirmation within minutes via SMS and email.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">100% Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">Your medical information is protected with hospital-grade security.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Flexible Rescheduling</h3>
                <p className="text-gray-600 dark:text-gray-300">Easily reschedule or cancel appointments up to 24 hours in advance.</p>
              </div>
            </div>
          </div>

          {/* Emergency Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Emergency Medical Assistance</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  For critical emergencies, do not wait for an appointment. Call our emergency helpline immediately or visit our 24/7 emergency department.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${CONTACT_DETAILS.generalPhone}`}
                    className="bg-red-600 text-white font-bold py-3 px-6 rounded-xl text-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <Phone size={24} className="mr-3" />
                    Emergency: {CONTACT_DETAILS.generalPhone}
                  </a>
                  <Link
                    href="/departments#emergency"
                    className="border-2 border-red-600 text-red-600 dark:text-red-400 dark:border-red-400 font-bold py-3 px-6 rounded-xl text-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-center"
                  >
                    Emergency Department Info
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 text-center">
                <div className="text-5xl font-bold text-red-600 dark:text-red-400">24/7</div>
                <div className="text-gray-700 dark:text-gray-300">Emergency Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}