"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, Stethoscope, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DOCTORS } from "@/lib/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DoctorsPreview() {
  const displayedDoctors = DOCTORS.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-primary">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified and experienced doctors is dedicated to providing exceptional healthcare with compassion and expertise.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {displayedDoctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    {/* Doctor Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Experience Badge */}
                      <div className="absolute top-4 right-4 bg-white text-primary font-bold px-3 py-1 rounded-full text-sm">
                        {doctor.experience} Exp
                      </div>
                      
                      {/* Specialization */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{doctor.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Stethoscope className="h-4 w-4" />
                          <span className="font-medium">{doctor.specialization}</span>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">4.9</span>
                        </div>
                        <div className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">
                          Available Today
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {doctor.qualification} with {doctor.experience} of experience in {doctor.specialization}.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-gray-700">{doctor.availability}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-gray-700">NABH Accredited</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Link href={`/doctors/${doctor.id}`} className="flex items-center justify-center">
                            <span>Profile</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" className="swiper-button-prev-custom rounded-full p-3">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </Button>
            <Button variant="outline" className="swiper-button-next-custom rounded-full p-3">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
            <Link href="/doctors" className="flex items-center gap-2">
              View All Doctors
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: relative;
          margin-top: 0;
        }
        .swiper-pagination-bullet {
          background-color: #0d47a1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #0d47a1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}