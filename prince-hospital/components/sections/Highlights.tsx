"use client";

import { Bed, Stethoscope, Clock, Shield, Users, Award, Heart, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Bed,
    title: "700+ Beds",
    description: "Spacious, well-equipped patient rooms with modern amenities and comfortable stay",
    color: "primary",
  },
  {
    icon: Stethoscope,
    title: "Advanced Diagnostics",
    description: "State-of-the-art CT, MRI, Ultrasound, and Laboratory services with accurate results",
    color: "secondary",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Fully equipped emergency and trauma center with rapid response team",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Quality Care",
    description: "NABH accredited hospital following international healthcare standards",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "150+ highly qualified doctors and 500+ trained nursing staff",
    color: "primary",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as best multi-specialty hospital in Rajasthan 2023",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Patient Centric",
    description: "Personalized care plans and compassionate approach for every patient",
    color: "primary",
  },
  {
    icon: Truck,
    title: "Ambulance Service",
    description: "Fleet of advanced life support ambulances with trained paramedics",
    color: "secondary",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Prince Hospital"
          subtitle="Our Strengths"
          description="We combine medical excellence with compassionate care to deliver the best healthcare experience for our patients."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colorClass = item.color === "primary" 
              ? "bg-primary/10 text-primary" 
              : "bg-secondary/10 text-secondary";
            
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl ${colorClass} mb-5`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-white/90">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/90">Medical Departments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-white/90">Surgeries Per Year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-white/90">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}