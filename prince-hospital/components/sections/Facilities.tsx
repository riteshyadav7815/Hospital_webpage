"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { CheckCircle, Building, Cpu, Shield, Truck, Pill, Heart, Scan, Scissors, Microscope, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FACILITY_SLIDES } from "@/lib/constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Scan,
  Scissors,
  Microscope,
  Ambulance: Truck,
  Pill,
  Building,
  Cpu,
  Shield,
  Truck,
};

export default function Facilities() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Advanced Medical Facilities"
            subtitle="State-of-the-Art Infrastructure"
            description="Our hospital is equipped with cutting-edge technology and infrastructure to provide comprehensive healthcare services."
            align="center"
          />
        </motion.div>

        {/* Facilities Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "swiper-pagination-bullet bg-gray-300 opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active bg-primary !opacity-100",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            className="pb-16"
          >
            {FACILITY_SLIDES.map((facility, index) => {
              const Icon = iconMap[facility.icon] || Building;
              return (
                <SwiperSlide key={facility.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-3xl transition-all duration-500 h-full">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={facility.image}
                          alt={facility.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-3xl font-bold mb-2">{facility.name}</h3>
                          <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                            <span>Advanced Technology</span>
                            <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                            <span>24/7 Available</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">{facility.description}</p>
                        <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                          <span className="text-base">Explore Facility</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-prev w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-next w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </motion.div>

        {/* Additional features - Premium Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-4xl p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold mb-8 tracking-tight">Advanced Medical Technology</h3>
                  <p className="text-white/90 mb-10 text-xl leading-relaxed">
                    We invest in the latest medical equipment and technology to ensure accurate diagnosis
                    and effective treatment for our patients.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: CheckCircle, label: "Robotic Surgery", color: "bg-emerald-500/20" },
                      { icon: CheckCircle, label: "3T MRI & CT Scan", color: "bg-blue-500/20" },
                      { icon: CheckCircle, label: "Digital X‑Ray", color: "bg-purple-500/20" },
                      { icon: CheckCircle, label: "Telemedicine", color: "bg-amber-500/20" },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        <div className={`${tech.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                          <tech.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-semibold text-lg">{tech.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
                      <div className="text-4xl">🏆</div>
                    </div>
                    <h4 className="text-3xl font-bold mb-6">Award Winning Hospital</h4>
                    <p className="text-white/80 mb-10 text-lg">
                      Recognized as "Best Multi‑Specialty Hospital" in Rajasthan for 2023 & 2024
                    </p>
                    <div className="flex justify-around">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-5xl font-black mb-2">99%</div>
                        <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Patient Satisfaction</div>
                      </motion.div>
                      <div className="h-20 w-px bg-white/30" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-5xl font-black mb-2">24/7</div>
                        <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Emergency Service</div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}