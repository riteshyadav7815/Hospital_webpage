# Prince Hospital Website

A modern, responsive, ultra-fast hospital website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, premium, mobile-first design with soft shadows, rounded-2xl cards, and clean typography
- **Full Responsiveness**: Optimized for all screen sizes from mobile to desktop
- **Dark Mode**: Toggle between light and dark themes using next-themes
- **Performance**: Optimized for Lighthouse scores with minimal JavaScript and optimized images
- **SEO**: Metadata for all pages with OpenGraph and Twitter cards
- **Animations**: Smooth fade/slide animations using Framer Motion
- **Interactive Components**:
  - Sticky navbar with mobile menu
  - Floating chatbot widget with AI assistant simulation
  - Back-to-top button with smooth scrolling
  - Department filtering and doctor search
  - Appointment booking with multiple methods
- **6 Complete Pages**:
  1. Home - Hero, highlights, departments, facilities, testimonials, CTA
  2. About - Mission, vision, values, leadership, accreditation
  3. Departments - All medical departments with filtering
  4. Doctors - Expert doctors with profiles and availability
  5. Appointment - Multiple booking methods (chatbot, form, phone)
  6. Contact - Contact details, form, and map

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (customizable)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Font**: Inter (Google Fonts)

## Project Structure

```
prince-hospital/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── about/
│   ├── departments/
│   ├── doctors/
│   ├── appointment/
│   └── contact/
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   ├── sections/          # Page sections (Hero, Highlights, etc.)
│   ├── cards/             # Reusable card components
│   ├── shared/            # Shared components
│   └── ui/                # shadcn/ui components
├── lib/
│   └── constants.ts       # Constants (contact details, departments, etc.)
├── styles/
│   └── globals.css        # Global styles with CSS variables
├── public/                # Static assets
└── package.json           # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation
```bash
cd prince-hospital
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## Performance Optimization

- **Image Optimization**: Next.js Image component with optimized formats
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components loaded on demand
- **Minimal Dependencies**: Carefully selected lightweight libraries
- **CSS Purge**: Tailwind CSS purge for production

## Design System

- **Colors**: Primary (blue), Secondary (teal), Accent (purple)
- **Typography**: Inter font with consistent scale
- **Spacing**: 4px base unit with consistent spacing scale
- **Shadows**: Soft shadows with consistent elevation levels
- **Border Radius**: Rounded-2xl (1rem) for cards, rounded-xl for buttons

## SEO Features

- Metadata for each page
- OpenGraph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Prince Hospital demonstration purposes.

## Contact

For any questions or support, please contact:
- Email: contact@princehospital.in
- Phone: 72300 90108
- Address: Bajor, Sikar, Rajasthan, India