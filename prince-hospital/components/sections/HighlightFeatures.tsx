"use client";

import { motion } from "framer-motion";
import { Video, Pill, Beaker, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HighlightFeatures() {
  const features = [
    {
      title: "Instant Video Consultation",
      description: "Connect with expert doctors from the comfort of your home via secure video call. Get prescriptions and medical advice instantly.",
      icon: Video,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-teal-400",
      ctaText: "Book Video Consult",
      ctaLink: "/appointment?type=video",
    },
    {
      title: "24/7 Medicines",
      description: "Get all prescribed medicines delivered to your doorstep within 2 hours. Our in-house pharmacy is open 24/7 with genuine medicines.",
      icon: Pill,
      color: "bg-teal-500",
      gradient: "from-teal-500 to-emerald-400",
      ctaText: "Order Medicines",
      ctaLink: "/pharmacy",
    },
    {
      title: "Accurate Lab Tests",
      description: "Book diagnostic tests with home sample collection. Get accurate results within 6-24 hours through our NABL accredited laboratory.",
      icon: Beaker,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-indigo-400",
      ctaText: "Book Lab Test",
      ctaLink: "/lab-tests",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare <span className="text-primary">Made Easy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access premium healthcare services with convenience and reliability through our digital platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`border-0 shadow-xl overflow-hidden h-full bg-gradient-to-br ${feature.gradient} text-white`}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-white/20 backdrop-blur-sm`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <div className="text-5xl font-bold opacity-20">0{index + 1}</div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90 mb-6">{feature.description}</p>

                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 w-full justify-between group"
                  >
                    <span>{feature.ctaText}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All services are available through our mobile app. Download now for exclusive benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 rounded-xl">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.36 3.51 7.79 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download on iOS
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-xl">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.77-.84-1.35z" />
                <path d="M20.5 3H4.5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z" />
              </svg>
              Download on Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}