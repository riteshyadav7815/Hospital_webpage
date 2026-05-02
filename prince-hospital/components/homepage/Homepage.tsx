"use client";

import React from "react";
import { SnapScrollProvider } from "@/components/providers/SnapScrollProvider";
import { HeroSection } from "@/components/sections/HeroNew";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesNew";
import { DoctorsSection } from "@/components/sections/DoctorsNew";
import { TestimonialsSection } from "@/components/sections/TestimonialsNew";
import { CTASection } from "@/components/sections/CTANew";

export default function Homepage() {
  return (
    <SnapScrollProvider>
      <HeroSection />
      <SpecialtiesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
    </SnapScrollProvider>
  );
}