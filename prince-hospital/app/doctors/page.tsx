import { DOCTORS, CONTACT_DETAILS, DEPARTMENTS } from "@/lib/constants";
import { User, Phone, Mail, Calendar, Award, Clock, Stethoscope, Star } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Doctors & Specialists | Prince Hospital",
  description: "Meet our team of 150+ expert doctors and medical specialists at Prince Hospital. Highly qualified professionals with years of experience in various medical fields.",
  keywords: ["doctors", "specialists", "cardiologist", "neurologist", "orthopedic", "pediatrician", "oncologist", "medical team"],
};

export default function DoctorsPage() {
  const specializations = ["All", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Emergency Medicine"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Doctors & Specialists</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Prince Hospital is home to 150+ highly qualified doctors across 50+ specialties. Our medical team combines expertise, compassion, and cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Expert Doctors</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Medical Specialties</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Avg. Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Emergency Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Find Your Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Search by Specialization</label>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      className="px-4 py-2 rounded-full border border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors"
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Search by Department</label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                  <option>All Departments</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <Link
                  href="/appointment"
                  className="block w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  Book Appointment with Doctor
                </Link>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                      {doctor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{doctor.name}</h3>
                      <div className="flex items-center mt-1">
                        <Stethoscope size={16} className="text-teal-600 dark:text-teal-400 mr-2" />
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">{doctor.specialization}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} className="text-amber-500 fill-amber-500" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">5.0 (120 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Award size={18} className="text-gray-500 dark:text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Qualification</div>
                        <div className="font-medium text-gray-800 dark:text-white">{doctor.qualification}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-gray-500 dark:text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                        <div className="font-medium text-gray-800 dark:text-white">{doctor.experience}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-gray-500 dark:text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Availability</div>
                        <div className="font-medium text-gray-800 dark:text-white">{doctor.availability}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex gap-3">
                      <Link
                        href={`/appointment?doctor=${doctor.name}`}
                        className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center font-semibold py-3 rounded-lg hover:shadow-md transition-shadow"
                      >
                        Book Appointment
                      </Link>
                      <button className="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Phone size={20} className="text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Why Choose Our Doctors?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Board Certified Specialists</h3>
                    <p className="text-gray-600 dark:text-gray-300">All our doctors are certified by relevant medical boards with continuous education.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Multidisciplinary Approach</h3>
                    <p className="text-gray-600 dark:text-gray-300">Complex cases are handled by teams of specialists collaborating for best outcomes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Patient-Centered Care</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our doctors prioritize patient comfort, communication, and personalized treatment plans.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Doctor Appointment Guidelines</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Choose Your Doctor</h3>
                    <p className="text-gray-600 dark:text-gray-300">Browse profiles and select the specialist matching your health needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Check Availability</h3>
                    <p className="text-gray-600 dark:text-gray-300">View doctor schedules and select a convenient time slot.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Book Appointment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Book online or via phone for instant confirmation and personalized assistance.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex items-center">
                  <Phone size={20} className="text-teal-600 dark:text-teal-400 mr-3" />
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white">Need Help Choosing?</div>
                    <div className="text-gray-600 dark:text-gray-300">Call our medical coordinator at {CONTACT_DETAILS.doctorsPhone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Can't Find Your Specialist?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We have 150+ doctors across all specialties. Contact our medical coordination team for personalized doctor recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-xl transition-shadow"
              >
                Contact Medical Coordinator
              </Link>
              <a
                href={`tel:${CONTACT_DETAILS.doctorsPhone}`}
                className="border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-bold py-4 px-8 rounded-xl text-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
              >
                Call Doctor Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}