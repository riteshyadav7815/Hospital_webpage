"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import { DEPARTMENTS } from "@/lib/constants";
import { Heart, Brain, Bone, Baby, Microscope, Truck, Stethoscope, Eye, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart: Heart,
  Brain: Brain,
  Bone: Bone,
  Baby: Baby,
  Microscope: Microscope,
  Ambulance: Truck,
  Stomach: Stethoscope,
  Skin: Eye,
};

const departmentImages = [
  "/images/hero-slide1.jpg",
  "/images/hero-slide2.jpg",
  "/images/hero-slide3.jpg",
  "/images/facility1.jpg",
  "/images/facility2.jpg",
  "/images/facility3.jpg",
  "/images/facility4.jpg",
  "/images/doctor1.jpg",
];

export default function DepartmentsGrid() {
  const displayedDepartments = DEPARTMENTS.slice(0, 8);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base font-semibold mb-6 tracking-wide uppercase">
            Our Specialties
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Medical <span className="text-primary">Departments</span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare services across multiple specialties with expert medical teams and advanced technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {displayedDepartments.map((dept, index) => {
            const Icon = iconMap[dept.icon] || Heart;
            const imageSrc = departmentImages[index % departmentImages.length];
            
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group"
              >
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full rounded-3xl border border-gray-100/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={dept.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-2">Specialty</div>
                      <h3 className="text-2xl font-bold">{dept.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{dept.name}</h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed line-clamp-3">{dept.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/departments#${dept.name.toLowerCase()}`}
                        className="text-primary font-bold text-base flex items-center gap-2 hover:gap-3 transition-all group/link"
                      >
                        <span>Explore Department</span>
                        <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Badge variant="outline" className="px-4 py-2 bg-primary/15 text-primary border-primary/20 text-xs font-bold uppercase tracking-wider">
                        24/7 Available
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button size="lg" className="px-14 py-8 text-xl rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold">
            <Link href="/departments" className="flex items-center gap-3">
              View All Departments
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          <p className="text-gray-600 mt-8 text-lg">
            Explore our 50+ specialized departments with world‑class facilities
          </p>
        </motion.div>
      </div>
    </section>
  );
}