import Hero from "@/components/sections/Hero";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import HighlightFeatures from "@/components/sections/HighlightFeatures";
import AppointmentForm from "@/components/sections/AppointmentForm";
import DoctorsPreview from "@/components/sections/DoctorsPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogSection from "@/components/sections/BlogSection";
import Facilities from "@/components/sections/Facilities";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Quick Info Cards are included within the Hero component */}
      
      {/* "We Provide Finest Patient Care" section - Using Facilities component which shows our care approach */}
      <Facilities />
      
      <DepartmentsGrid />
      <HighlightFeatures />
      <AppointmentForm />
      <DoctorsPreview />
      <Testimonials />
      <BlogSection />
      <CTA />
    </>
  );
}