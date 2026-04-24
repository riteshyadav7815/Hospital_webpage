"use client";

import { CONTACT_DETAILS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form
    alert("Form submitted! This is a demo.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Prince Hospital</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We're here to help you 24/7. Reach out through any channel below for medical inquiries, appointments, or emergencies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Emergency Helpline</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">30 min</div>
                <div className="text-sm">Average Response Time</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Confidential</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
                
                {/* Contact Cards */}
                <div className="space-y-6 mb-10">
                  <Card className="p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Emergency & Appointments</h3>
                        <a href={`tel:${CONTACT_DETAILS.appointmentPhone}`} className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block">
                          {CONTACT_DETAILS.appointmentPhone}
                        </a>
                        <p className="text-gray-600 mt-1">24/7 Emergency Helpline</p>
                        <p className="text-gray-500 text-sm mt-2">For life-threatening emergencies, call immediately</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors block">
                          {CONTACT_DETAILS.email}
                        </a>
                        <p className="text-gray-600 mt-1">General Inquiries & Medical Records</p>
                        <p className="text-gray-500 text-sm mt-2">Response within 24 hours</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Visit Our Hospital</h3>
                        <p className="text-gray-700">{CONTACT_DETAILS.address}</p>
                        <p className="text-gray-500 text-sm mt-2">Open 24/7 for emergencies</p>
                        <Button variant="outline" className="mt-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Emergency Department</span>
                            <span className="font-semibold">24/7</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">OPD</span>
                            <span className="font-semibold">8:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pharmacy</span>
                            <span className="font-semibold">24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Send a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800">
                        <option>General Inquiry</option>
                        <option>Appointment Booking</option>
                        <option>Emergency</option>
                        <option>Billing & Insurance</option>
                        <option>Medical Records</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 h-40"
                        placeholder="Type your message here..."
                        required
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full">
                      <Send size={24} className="mr-3" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </div>
                </Card>

                {/* Quick Links */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Link
                    href="/appointment"
                    className="bg-primary text-white p-4 rounded-xl text-center font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <div className="flex items-center justify-center">
                      <MessageSquare size={20} className="mr-2" />
                      Book Appointment
                    </div>
                  </Link>
                  <Link
                    href="/departments"
                    className="bg-secondary text-white p-4 rounded-xl text-center font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <div className="flex items-center justify-center">
                      <Users size={20} className="mr-2" />
                      View Departments
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Find Us on Map</h2>
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700">Prince Hospital Location</h3>
                  <p className="text-gray-600 mt-2">{CONTACT_DETAILS.address}</p>
                  <Button variant="default" className="mt-6">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600 mr-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Quick Response</h3>
                </div>
                <p className="text-gray-600">
                  Our team responds to all inquiries within 30 minutes during business hours.
                </p>
              </Card>
              <Card className="p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-green-100 text-green-600 mr-4">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Confidential</h3>
                </div>
                <p className="text-gray-600">
                  All medical inquiries are handled with strict confidentiality and privacy.
                </p>
              </Card>
              <Card className="p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600 mr-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Multilingual Support</h3>
                </div>
                <p className="text-gray-600">
                  Our staff speaks English, Hindi, and regional languages for better communication.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}