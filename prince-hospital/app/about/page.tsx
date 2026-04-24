import { Metadata } from "next";
import { Heart, Target, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Prince Hospital | Our Mission, Vision & Values",
  description: "Learn about Prince Hospital's history, mission, and commitment to providing advanced healthcare in Shekhawati region.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Prince Hospital</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A premier multi-specialty hospital in Shekhawati region, providing 
              compassionate healthcare with cutting-edge technology since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To provide accessible, affordable, and high-quality healthcare services 
                  to all sections of society with compassion, dignity, and respect.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-4">
                  <Heart className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted healthcare institution in Rajasthan, recognized 
                  for clinical excellence, patient-centric care, and medical innovation.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Patient First",
                    description: "Every decision is made with the patient's best interest in mind.",
                  },
                  {
                    title: "Clinical Excellence",
                    description: "Maintaining the highest standards of medical care and safety.",
                  },
                  {
                    title: "Integrity & Ethics",
                    description: "Upholding honesty, transparency, and ethical practices.",
                  },
                  {
                    title: "Compassionate Care",
                    description: "Treating every patient with empathy, kindness, and respect.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-background rounded-xl p-3">
                      <div className="text-primary font-bold">{index + 1}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By The <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to healthcare excellence reflected in numbers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "700+", label: "Hospital Beds", icon: "🛏️" },
              { value: "150+", label: "Expert Doctors", icon: "👨‍⚕️" },
              { value: "50+", label: "Departments", icon: "🏥" },
              { value: "24/7", label: "Emergency Service", icon: "🚑" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center shadow-lg border"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
              <Users className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by experienced medical professionals and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Medical Director",
                experience: "25+ years in healthcare administration",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Chief of Medical Services",
                experience: "20+ years in clinical leadership",
              },
              {
                name: "Mr. Vikram Singh",
                role: "Hospital Administrator",
                experience: "15+ years in hospital management",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-muted-foreground">{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
              <Award className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accreditation & <span className="text-primary">Quality</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Prince Hospital is committed to maintaining the highest standards of 
              healthcare quality and patient safety.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["NABH", "ISO 9001", "NABL", "Green OT"].map((cert, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-lg border"
                >
                  <div className="text-2xl font-bold text-primary">{cert}</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}