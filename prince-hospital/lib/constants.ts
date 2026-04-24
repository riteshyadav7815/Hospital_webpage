export const CONTACT_DETAILS = {
  address: "Bajor, Sikar, Rajasthan, India",
  appointmentPhone: "72300 90108",
  doctorsPhone: "72300 32018",
  generalPhone: "72300 44108",
  email: "contact@princehospital.in",
  workingHours: "24/7 Emergency, OPD: 9AM-9PM",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Doctors", href: "/doctors" },
  { name: "Appointment", href: "/appointment" },
  { name: "Contact", href: "/contact" },
] as const;

export const DEPARTMENTS = [
  { id: 1, name: "Cardiology", icon: "Heart", description: "Advanced heart care with state-of-the-art diagnostic and treatment facilities." },
  { id: 2, name: "Neurology", icon: "Brain", description: "Comprehensive neurological care for brain and nervous system disorders." },
  { id: 3, name: "Orthopedics", icon: "Bone", description: "Specialized care for bones, joints, and musculoskeletal system." },
  { id: 4, name: "Pediatrics", icon: "Baby", description: "Child-friendly care for infants, children, and adolescents." },
  { id: 5, name: "Oncology", icon: "Microscope", description: "Advanced cancer treatment with chemotherapy and radiation therapy." },
  { id: 6, name: "Emergency", icon: "Ambulance", description: "24/7 emergency care with trauma center and critical care units." },
  { id: 7, name: "Gastroenterology", icon: "Stomach", description: "Digestive system care with endoscopy and advanced diagnostics." },
  { id: 8, name: "Dermatology", icon: "Skin", description: "Skin care treatments for various dermatological conditions." },
] as const;

export const DOCTORS = [
  { id: 1, name: "Dr. Rajesh Kumar", specialization: "Cardiology", experience: "15 years", qualification: "MD, DM Cardiology", availability: "Mon-Fri, 10AM-6PM", image: "/images/doctor1.jpg" },
  { id: 2, name: "Dr. Priya Sharma", specialization: "Neurology", experience: "12 years", qualification: "MD, DM Neurology", availability: "Mon-Sat, 9AM-5PM", image: "/images/doctor2.jpg" },
  { id: 3, name: "Dr. Amit Patel", specialization: "Orthopedics", experience: "18 years", qualification: "MS Orthopedics", availability: "Mon-Fri, 11AM-7PM", image: "/images/doctor3.jpg" },
  { id: 4, name: "Dr. Sunita Reddy", specialization: "Pediatrics", experience: "10 years", qualification: "MD Pediatrics", availability: "Mon-Sat, 10AM-4PM", image: "/images/doctor4.jpg" },
  { id: 5, name: "Dr. Vikram Singh", specialization: "Oncology", experience: "14 years", qualification: "MD, DM Oncology", availability: "Mon-Fri, 9AM-5PM", image: "/images/doctor1.jpg" },
  { id: 6, name: "Dr. Anjali Mehta", specialization: "Emergency Medicine", experience: "8 years", qualification: "MD Emergency Medicine", availability: "24/7 on call", image: "/images/doctor2.jpg" },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh Gupta",
    text: "Excellent care during my heart surgery. The cardiology team was exceptional. The facilities are world-class and the staff was incredibly supportive throughout my recovery.",
    role: "Heart Surgery Patient",
    image: "/images/patient1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Sita Devi",
    text: "The pediatric department saved my child's life. Thank you for the compassionate care and modern treatment facilities. The doctors were always available to answer our questions.",
    role: "Parent",
    image: "/images/patient2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    text: "24/7 emergency service is a lifesaver. Quick response and professional treatment saved me during a critical situation. The emergency team is highly skilled and efficient.",
    role: "Emergency Patient",
    image: "/images/patient3.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Anita Sharma",
    text: "Modern facilities and caring staff. My orthopedic recovery was smooth and fast thanks to the advanced rehabilitation center. The physiotherapy team was excellent.",
    role: "Orthopedic Patient",
    image: "/images/patient1.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Rajesh Mehta",
    text: "The neurology department provided exceptional care for my father. The doctors explained everything clearly and the treatment was effective. Highly recommended!",
    role: "Family Member",
    image: "/images/patient2.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Priya Reddy",
    text: "From diagnosis to treatment, the oncology team was supportive and professional. The chemotherapy unit is well-equipped and the staff is very compassionate.",
    role: "Cancer Survivor",
    image: "/images/patient3.jpg",
    rating: 5
  },
] as const;

export const FACILITIES = [
  { id: 1, name: "700+ Beds", description: "Spacious patient rooms with modern amenities" },
  { id: 2, name: "Advanced Diagnostics", description: "CT, MRI, Ultrasound, and Laboratory services" },
  { id: 3, name: "24/7 Emergency", description: "Fully equipped emergency and trauma center" },
  { id: 4, name: "ICU & NICU", description: "Advanced intensive care units for critical patients" },
  { id: 5, name: "Pharmacy", description: "24-hour in-house pharmacy with all medicines" },
  { id: 6, name: "Ambulance Service", description: "Fleet of advanced life support ambulances" },
] as const;

export const HOSPITAL_STATS = [
  { value: "700+", label: "Hospital Beds" },
  { value: "150+", label: "Expert Doctors" },
  { value: "24/7", label: "Emergency Service" },
  { value: "50+", label: "Medical Departments" },
] as const;

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Advanced Healthcare with Compassion",
    subtitle: "World-class multi-specialty hospital in Shekhawati region",
    image: "/images/hero-slide1.jpg",
    ctaText: "Book Appointment",
    ctaLink: "/appointment",
  },
  {
    id: 2,
    title: "Expert Doctors & Modern Technology",
    subtitle: "150+ experienced doctors with state-of-the-art diagnostics",
    image: "/images/hero-slide2.jpg",
    ctaText: "Meet Our Doctors",
    ctaLink: "/doctors",
  },
  {
    id: 3,
    title: "24/7 Emergency & Trauma Care",
    subtitle: "Fully equipped emergency department with ambulance service",
    image: "/images/hero-slide3.jpg",
    ctaText: "Emergency Contact",
    ctaLink: "tel:7230090108",
  },
] as const;

export const FACILITY_SLIDES = [
  {
    id: 1,
    name: "ICU & Critical Care",
    description: "Advanced Intensive Care Units with 24/7 monitoring",
    image: "/images/facility1.jpg",
    icon: "Heart",
  },
  {
    id: 2,
    name: "MRI & CT Scan",
    description: "High‑precision imaging for accurate diagnosis",
    image: "/images/facility2.jpg",
    icon: "Scan",
  },
  {
    id: 3,
    name: "Operation Theatres",
    description: "Modular OTs with laminar airflow & robotic assistance",
    image: "/images/facility3.jpg",
    icon: "Scissors",
  },
  {
    id: 4,
    name: "Laboratory",
    description: "Fully automated lab with rapid test results",
    image: "/images/facility4.jpg",
    icon: "Microscope",
  },
  {
    id: 5,
    name: "Emergency & Trauma",
    description: "Fully equipped emergency department with ambulance service",
    image: "/images/facility1.jpg",
    icon: "Ambulance",
  },
  {
    id: 6,
    name: "Pharmacy",
    description: "24‑hour in‑house pharmacy with all essential medicines",
    image: "/images/facility2.jpg",
    icon: "Pill",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Hospital Reception",
    description: "Modern reception area with comfortable seating",
    image: "/images/hero-slide1.jpg",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Doctor Consultation",
    description: "Expert doctors providing personalized care",
    image: "/images/hero-slide2.jpg",
    category: "Doctors",
  },
  {
    id: 3,
    title: "Emergency Department",
    description: "Fully equipped emergency and trauma center",
    image: "/images/hero-slide3.jpg",
    category: "Emergency",
  },
  {
    id: 4,
    title: "ICU Facilities",
    description: "Advanced Intensive Care Units with monitoring",
    image: "/images/facility1.jpg",
    category: "Facilities",
  },
  {
    id: 5,
    title: "MRI & CT Scan Center",
    description: "High-precision diagnostic imaging",
    image: "/images/facility2.jpg",
    category: "Diagnostics",
  },
  {
    id: 6,
    title: "Operation Theatre",
    description: "Modern surgical suites with advanced equipment",
    image: "/images/facility3.jpg",
    category: "Surgery",
  },
  {
    id: 7,
    title: "Laboratory",
    description: "Fully automated pathology lab",
    image: "/images/facility4.jpg",
    category: "Diagnostics",
  },
  {
    id: 8,
    title: "Cardiology Department",
    description: "Advanced heart care with modern equipment",
    image: "/images/doctor1.jpg",
    category: "Departments",
  },
  {
    id: 9,
    title: "Pediatric Care",
    description: "Child-friendly environment for young patients",
    image: "/images/doctor4.jpg",
    category: "Pediatrics",
  },
  {
    id: 10,
    title: "Patient Room",
    description: "Comfortable patient rooms with amenities",
    image: "/images/patient1.jpg",
    category: "Patient Care",
  },
  {
    id: 11,
    title: "Pharmacy",
    description: "24-hour in-house pharmacy service",
    image: "/images/facility2.jpg",
    category: "Services",
  },
  {
    id: 12,
    title: "Waiting Area",
    description: "Spacious waiting area for patients and visitors",
    image: "/images/patient2.jpg",
    category: "Infrastructure",
  },
] as const;