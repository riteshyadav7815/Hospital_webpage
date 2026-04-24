# Prince Hospital Website - Technical Specification

## Initialization Commands

### 1. Create Next.js 14 Project
```bash
npx create-next-app@latest prince-hospital --typescript --tailwind --app --no-eslint --import-alias "@/*"
cd prince-hospital
```

### 2. Install Core Dependencies
```bash
npm install framer-motion lucide-react next-themes
npm install -D @types/node
```

### 3. Set up shadcn/ui
```bash
npx shadcn@latest init
# Configure with: TypeScript, Tailwind, src directory: false, base color: slate
```

### 4. Add shadcn/ui Components
```bash
npx shadcn@latest add button card dialog dropdown-menu sheet avatar badge
```

## File Structure Creation

### Required Directories
```bash
mkdir -p components/{ui,layout,sections,shared,cards}
mkdir -p lib
mkdir -p public/{images,icons}
mkdir -p app/{about,departments,doctors,appointment,contact}
```

## Configuration Files

### 1. tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0d9488",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
```

### 2. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

## Component Specifications

### Navbar Component (`components/layout/Navbar.tsx`)
**Features:**
- Sticky positioning
- Logo with hospital name
- Navigation links (Home, About, Departments, Doctors, Contact)
- CTA button "Book Appointment"
- Mobile hamburger menu
- Theme toggle switch
- Responsive design

**Props:** None
**State:** Mobile menu open/close

### Footer Component (`components/layout/Footer.tsx`)
**Sections:**
1. Hospital info (logo, tagline, description)
2. Quick links (all pages)
3. Contact details (all numbers, email, address)
4. Social media icons
5. Copyright notice

### Theme Provider (`components/layout/ThemeProvider.tsx`)
- Uses `next-themes`
- System preference detection
- Toggle button with sun/moon icons
- Persists theme in localStorage

### Chatbot Widget (`components/shared/ChatbotWidget.tsx`)
**Features:**
- Floating button (bottom-right, fixed)
- Modal dialog with:
  - Welcome message
  - Quick action buttons
  - Simple text input
  - Close button
- Animation on open/close
- State management for open/close

### Back to Top Button (`components/shared/BackToTop.tsx`)
- Appears after scrolling 300px
- Smooth scroll to top
- Positioned above chatbot button
- Arrow icon animation

## Page Metadata

### Home Page SEO
```typescript
export const metadata = {
  title: "Prince Hospital | Advanced Multi-Specialty Care in Shekhawati",
  description: "Prince Hospital offers 700+ beds, advanced diagnostics, and 24/7 emergency services. Book appointment online or call 72300 90108.",
  keywords: ["hospital", "multi-specialty", "emergency", "Shekhawati", "Rajasthan"],
}
```

### Contact Details Constant (`lib/constants.ts`)
```typescript
export const CONTACT_DETAILS = {
  address: "Bajor, Sikar, Rajasthan, India",
  appointmentPhone: "72300 90108",
  doctorsPhone: "72300 32018",
  generalPhone: "72300 44108",
  email: "contact@princehospital.in",
  workingHours: "24/7 Emergency, OPD: 9AM-9PM",
}
```

## Animation Strategy

### 1. Scroll Animations
- Use `motion` with `whileInView`
- Stagger children with `staggerChildren`
- Fade up with opacity and y translation

### 2. Hover Effects
- Scale up cards on hover
- Color transitions
- Shadow elevation

### 3. Page Transitions
- Fade in on page load
- Smooth route transitions

## Performance Considerations

### 1. Image Optimization
- Use Next.js Image component
- Specify sizes and priority
- Lazy load below-fold images

### 2. Font Optimization
- Use `next/font` with Inter
- Preload critical fonts

### 3. Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic with App Router)

### 4. Bundle Size
- Tree-shake unused imports
- Analyze bundle with `@next/bundle-analyzer`

## Testing Checklist

### Responsive Testing
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1440px+)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance Testing
- [ ] Lighthouse audit
- [ ] Core Web Vitals
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.5s

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratio
- [ ] ARIA labels

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://princehospital.in
```

## Maintenance Plan

### 1. Content Updates
- CMS consideration for future
- Markdown files for easy editing
- Admin panel for staff

### 2. Analytics
- Google Analytics 4
- Hotjar for user behavior
- Performance monitoring

### 3. Security
- HTTPS enforcement
- Security headers
- Regular dependency updates

## Timeline Estimate

### Phase 1: Foundation (Day 1-2)
- Project setup
- Core components
- Basic layout

### Phase 2: Pages (Day 3-4)
- All 6 pages
- Content population
- Basic styling

### Phase 3: Features (Day 5)
- Chatbot widget
- Dark mode
- Animations
- SEO metadata

### Phase 4: Polish (Day 6)
- Responsive fixes
- Performance optimization
- Testing
- Deployment

## Success Criteria
1. Lighthouse score > 95
2. Fully responsive on all devices
3. All pages functional
4. Dark mode working
5. Chatbot interactive
6. SEO metadata present
7. Smooth animations
8. Accessible navigation