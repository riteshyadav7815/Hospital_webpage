import { DEPARTMENTS, CONTACT_DETAILS } from "@/lib/constants";
import { Heart, Brain, Bone, Baby, Microscope, Truck, Utensils, Eye, Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Departments & Services | Prince Hospital",
  description: "Explore our comprehensive medical departments and specialized healthcare services at Prince Hospital. From cardiology to emergency care, we provide expert treatment.",
  keywords: ["medical departments", "hospital services", "cardiology", "neurology", "orthopedics", "pediatrics", "oncology", "emergency care"],
};

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
  const specialties = ["All", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Emergency", "Gastroenterology", "Dermatology"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Departments & Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Prince Hospital offers comprehensive medical care across 50+ specialized departments. Our expert teams provide advanced diagnostics, treatment, and compassionate care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Medical Departments</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Expert Doctors</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Emergency Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Find Your Department</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Search by Specialty</label>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      className="px-4 py-2 rounded-full border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:w-64">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Quick Contact</label>
                <Link
                  href="/appointment"
                  className="block w-full bg-primary text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept) => {
              const Icon = iconMap[dept.icon] || Heart;
              return (
                <div
                  key={dept.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">{dept.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{dept.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Phone size={16} className="mr-2" />
                        <span>Contact: {CONTACT_DETAILS.doctorsPhone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={16} className="mr-2" />
                        <span>OPD: 9AM-9PM (Mon-Sat)</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Link
                        href={`/appointment?department=${dept.name}`}
                        className="flex-1 bg-primary text-white text-center font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Book Now
                      </Link>
                      <Link
                        href="/doctors"
                        className="flex-1 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-center font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        View Doctors
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Additional Hospital Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Diagnostic Center</h3>
                <p className="text-gray-600 dark:text-gray-300">Advanced imaging (CT, MRI, Ultrasound) and laboratory services with quick results.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Pharmacy</h3>
                <p className="text-gray-600 dark:text-gray-300">24-hour in-house pharmacy with wide range of medicines and healthcare products.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Ambulance Service</h3>
                <p className="text-gray-600 dark:text-gray-300">Advanced life support ambulances with trained paramedics for emergency transport.</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Department Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Appointment Helpline</h3>
                  <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.appointmentPhone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Doctors Helpline</h3>
                  <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.doctorsPhone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Working Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.workingHours}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="flex items-center">
                <MapPin size={24} className="text-gray-500 dark:text-gray-400 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Hospital Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Need Help Choosing a Department?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Our medical coordinators can guide you to the right specialist based on your symptoms and medical history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors"
              >
                Contact Medical Coordinator
              </Link>
              <Link
                href="/appointment"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Book Online Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}