"use client";

import { Phone, Calendar, MessageCircle, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { CONTACT_DETAILS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Take the Next Step</span> Towards Better Health?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us today to get more information about our services or speak with our care team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Call Us Card */}
            <Card className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us Now</h3>
              <a
                href={`tel:${CONTACT_DETAILS.appointmentPhone}`}
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2"
              >
                {CONTACT_DETAILS.appointmentPhone}
              </a>
              <p className="text-gray-500 mb-6">Contact & General Enquiries</p>
              <a
                href={`tel:${CONTACT_DETAILS.appointmentPhone}`}
                className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-primary text-white hover:bg-primary/90 shadow-sm px-7 py-3.5 text-lg w-full"
              >
                Call Now
              </a>
            </Card>

            {/* Contact Online Card */}
            <Card className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/5 text-secondary mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Online</h3>
              <p className="text-gray-500 mb-4">Quick & Easy Contact Options</p>
              <p className="text-sm text-gray-400 mb-6">Available 24/7</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-secondary text-white hover:bg-secondary/90 shadow-sm px-7 py-3.5 text-lg w-full"
              >
                Contact Us
              </Link>
            </Card>

            {/* Chat with Us Card */}
            <Card className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chat with Us</h3>
              <p className="text-gray-500 mb-4">24/7 Medical Support Available</p>
              <p className="text-sm text-gray-400 mb-6">Get instant answers to your questions</p>
              <Button variant="outline" size="lg" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                Start Live Chat
              </Button>
            </Card>
          </div>

          {/* Additional Contact Information */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Other Contact Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">Doctors Queries</h4>
                </div>
                <a
                  href={`tel:${CONTACT_DETAILS.doctorsPhone}`}
                  className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors block mb-2"
                >
                  {CONTACT_DETAILS.doctorsPhone}
                </a>
                <p className="text-gray-500">For doctor consultations and medical advice</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-bold text-lg">General Queries</h4>
                </div>
                <a
                  href={`tel:${CONTACT_DETAILS.generalPhone}`}
                  className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors block mb-2"
                >
                  {CONTACT_DETAILS.generalPhone}
                </a>
                <p className="text-gray-500">For billing, admissions, and other non-medical queries</p>
              </div>
            </div>
          </div>

          {/* Address and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Hospital Address</h4>
                <p className="text-gray-600">{CONTACT_DETAILS.address}</p>
                <p className="text-sm text-gray-400 mt-2">Open 24/7 for emergencies</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email Us</h4>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {CONTACT_DETAILS.email}
                </a>
                <p className="text-sm text-gray-400 mt-2">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}