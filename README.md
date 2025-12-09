# Premium Real Estate Application

Aplicación web moderna para inmobiliaria boutique con experiencia digital excepcional.

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Maps:** Mapbox GL JS
- **Media:** Cloudinary
- **Email:** Resend
- **SMS:** Twilio

## 📦 Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your actual values

# Setup database
npm run db:generate
npm run db:push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
inmob/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (client)/          # Client portal
│   ├── (admin)/           # Admin panel
│   ├── propiedades/       # Property catalog
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── landing/          # Landing page sections
│   ├── property/         # Property-related components
│   └── admin/            # Admin components
├── lib/                   # Utility functions
│   ├── db.ts             # Prisma client
│   ├── auth.ts           # Auth utilities
│   └── utils.ts          # General utilities
├── prisma/               # Database schema
│   └── schema.prisma
└── public/               # Static assets
```

## 🎯 Features - Phase 1 (MVP)

### Landing Page
- [x] Hero section with founder video
- [ ] Quick search bar
- [ ] About Us section
- [ ] Impressive numbers with counters
- [ ] How it Works section
- [ ] Latest properties grid
- [ ] Testimonials carousel
- [ ] Social media feed
- [ ] Contact footer

### Property Catalog
- [ ] Grid/Map view toggle
- [ ] Advanced filters
- [ ] Property cards with favorites
- [ ] Pagination

### Property Detail
- [ ] Image gallery with lightbox
- [ ] Tabbed content (description, features, location)
- [ ] Interactive map
- [ ] Mortgage calculator
- [ ] Agent sidebar with CTAs
- [ ] Similar properties

### Appointment System
- [ ] Calendar scheduling
- [ ] Form with validation
- [ ] Email/SMS notifications
- [ ] Admin calendar view

### Admin Panel
- [ ] Dashboard with metrics
- [ ] Property CRUD
- [ ] Appointment management
- [ ] Lead management
- [ ] Image upload (Cloudinary)

### Integrations
- [ ] WhatsApp floating button
- [ ] Instagram feed
- [ ] Email notifications (Resend)
- [ ] SMS notifications (Twilio)

## 🔐 Environment Variables

See `.env.example` for required environment variables.

## 📝 Database Schema

Key models:
- **User:** Clients, agents, admins
- **Property:** Real estate listings
- **Appointment:** Property visit scheduling
- **Lead:** Potential clients
- **Testimonial:** Client reviews

## 🚢 Deployment

The application is designed to be deployed on:
- **Frontend:** Vercel
- **Database:** Supabase/Railway
- **Media:** Cloudinary CDN

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design System

### Colors (Navy Blue & Gold)
- Primary: Navy Blue #1A365D
- Secondary: Gold #D4AF37
- Accent: Coral #FF6B6B

### Typography
- Headlines: Montserrat (Bold)
- Body: Inter (Regular)

### Components
- Border radius: 12px
- Button height: 44px
- Card padding: 24px

## 📊 Performance Goals

- Page load: < 2 sec
- Core Web Vitals: All green
- Lighthouse score: > 90

## 🔄 Development Workflow

1. Create feature branch
2. Implement feature
3. Test locally
4. Commit with clear message
5. Push to branch
6. Create PR for review

## 📄 License

Proprietary - All rights reserved

## 👥 Contact

For questions or support, contact the development team.
