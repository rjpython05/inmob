# Premium Real Estate Application

Aplicación web moderna para inmobiliaria boutique con experiencia digital excepcional tipo Airbnb.

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Maps:** Mapbox GL JS (ready for integration)
- **Media:** Cloudinary (ready for integration)
- **Email:** Resend (ready for integration)
- **SMS:** Twilio (ready for integration)

## 📦 Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your actual values

# Setup database (when ready)
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
│   │   └── login/         # Login page
│   ├── (client)/          # Client portal
│   │   └── dashboard/     # Client dashboard
│   ├── (admin)/           # Admin panel
│   │   └── admin/         # Admin dashboard
│   ├── propiedades/       # Property catalog & details
│   │   ├── page.tsx      # Catalog with filters
│   │   └── [id]/         # Property detail page
│   ├── agendar/           # Appointment scheduling
│   ├── page.tsx           # Landing page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components (Button, Card, Input, Label)
│   ├── landing/          # Landing sections (8 sections)
│   │   ├── hero-section.tsx
│   │   ├── quick-search-bar.tsx
│   │   ├── about-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── latest-properties-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── social-feed-section.tsx
│   │   └── footer.tsx
│   ├── property/         # Property components
│   │   ├── property-card.tsx
│   │   ├── property-gallery.tsx (with lightbox)
│   │   ├── property-tabs.tsx
│   │   ├── property-sidebar.tsx
│   │   ├── mortgage-calculator.tsx
│   │   └── similar-properties.tsx
│   ├── filters/          # Filter components
│   │   └── property-filters.tsx
│   └── whatsapp-button.tsx
├── lib/                   # Utilities
│   ├── db.ts             # Prisma client
│   ├── auth.config.ts    # NextAuth config
│   └── utils.ts          # Helpers (formatCurrency, getWhatsAppLink, etc)
├── prisma/               # Database
│   └── schema.prisma     # Complete schema
└── public/               # Static assets
```

## ✅ Implemented Features

### 🏠 Landing Page (✓ Complete)
- ✅ **Hero Section** - Split screen with founder video/image + company info
  - Autoplay video with fallback
  - Trust badges (rating 4.9/5, 500+ familias, 15 años experiencia)
  - Primary/Secondary CTAs
  - Contact icons (Phone, Email, WhatsApp)
- ✅ **Quick Search Bar** - Ubicación, Tipo, Precio
- ✅ **About Us** - Team grid (4 members) + company philosophy
- ✅ **Stats Section** - Animated counters (850+ props, 15 años, 500+ clients, $125M+)
- ✅ **How It Works** - 4 steps visual (Explora, Visita, Negocia, Cierra)
- ✅ **Latest Properties** - Grid 2x3 with property cards
- ✅ **Testimonials** - Carousel with ratings & client reviews
- ✅ **Social Feed** - Instagram grid 2x3 with engagement
- ✅ **Footer** - 4 columns (company, links, contact, map) + legal links
- ✅ **WhatsApp Button** - Floating with context-aware messages

### 🏘️ Property Catalog (✓ Complete)
- ✅ Grid/Map view toggle
- ✅ **Advanced Filters Sidebar**:
  - Location search
  - Property type dropdown
  - Price range (min/max)
  - Bedrooms selector (1-5+)
  - Bathrooms selector (1-4+)
  - Square meters (min/max)
  - Status filter
  - 12 Amenities checkboxes
  - Clear filters button
- ✅ Property cards with:
  - Status badge (Disponible/Reservada/Vendida)
  - Favorite button
  - Price, location, specs
  - Agent avatar
  - Hover effects
- ✅ Pagination controls
- ✅ Results count
- ✅ Mobile responsive (collapsible filters)

### 🏡 Property Detail (✓ Complete)
- ✅ **Image Gallery**:
  - Grid layout (1 large + 4 small)
  - Full lightbox with navigation
  - Counter (1 de 25)
  - Keyboard navigation
  - Thumbnail strip
- ✅ **Tabbed Content** (4 tabs):
  - **Descripción**: Full text + amenities list
  - **Características**: 2-column table + mortgage calculator
  - **Ubicación**: Map + 6 nearby POIs with distances
  - **Multimedia**: Video tour, 360° tour, floor plans
- ✅ **Mortgage Calculator**:
  - Down payment slider
  - Loan term slider
  - Interest rate input
  - Real-time monthly payment
  - Loan summary
- ✅ **Sticky Sidebar**:
  - Agent card (photo, name, specialty)
  - Phone & email links
  - "Agendar Visita" CTA
  - "WhatsApp" CTA with pre-filled message
  - Save & Share buttons
  - Property info (code, published date, views, status)
  - Safety notice
- ✅ **Similar Properties** - Carousel with 3 visible cards

### 📅 Appointment System (✓ Complete)
- ✅ **Multi-step Form** (3 steps with progress indicator):
  - **Step 1**: Date & time selection
  - **Step 2**: Visit type (In-person / Video call)
  - **Step 3**: Client info (name, email, phone, message)
- ✅ Form validation
- ✅ Booking summary sidebar
- ✅ Success confirmation page
- ✅ Navigation (Back/Continue buttons)
- ✅ Suspense boundary for SSR compatibility

### 🔐 Authentication (✓ UI Complete)
- ✅ **Login Page**:
  - Email/password form
  - OAuth buttons (Google, Facebook)
  - "Forgot password" link
  - "Register" link
  - Loading states
- ✅ NextAuth configuration (auth.config.ts)
- ✅ Protected route setup
- ✅ Responsive design

### 👤 Client Portal (✓ Complete)
- ✅ **Dashboard**:
  - Quick stats cards (Favorites: 12, Appointments: 3, Documents: 5)
  - Upcoming appointments list with actions (Reagendar, Cancelar)
  - Saved properties grid (4 recent)
  - Profile card with edit button
  - Quick actions sidebar
  - Property recommendations
- ✅ Welcome message
- ✅ Notification bell icon
- ✅ Responsive layout

### 🎛️ Admin Panel (✓ Complete)
- ✅ **Dashboard**:
  - 4 Key metric cards (Properties: 42, Appointments: 18, Leads: 27, Revenue: $125K)
  - Monthly sales chart placeholder
  - Recent activity feed (4 activities)
  - Top properties by views
  - Team performance bars
  - Quick actions sidebar
- ✅ "Nueva Propiedad" CTA
- ✅ Responsive grid layout

## 🗄️ Database Schema (Prisma)

Complete schema with 8 models:

**User** - Clients, Agents, Coordinators, Admins
- Authentication fields
- Role-based access (CLIENT, AGENT, COORDINATOR, ADMIN)
- Profile info (specialty, bio for agents)
- Relations: properties managed, appointments, documents

**Property** - Real estate listings
- Full details (title, description, price, address, coordinates)
- Type: HOUSE, APARTMENT, LAND, COMMERCIAL, PENTHOUSE, VILLA
- Status: DRAFT, AVAILABLE, RESERVED, SOLD, PAUSED
- Specs (bedrooms, bathrooms, sqm, year built)
- Features JSON, amenities array
- Media (images, video, 360° tour, floor plans)
- Relations: agent, images, savedBy, appointments

**PropertyImage** - Gallery support
- URL, publicId, order, isPrimary flag
- Cascading delete with property

**SavedProperty** - Favorites
- User-Property many-to-many

**Appointment** - Scheduling
- Property, User, Agent relations
- Schedule (scheduledAt, endTime)
- Type: IN_PERSON, VIDEO_CALL
- Status: PENDING, CONFIRMED, COMPLETED, CANCELLED, NO_SHOW
- Client contact info
- Notes, cancel reason
- Timestamps (confirmed, completed, cancelled)

**Document** - Shared files
- Title, description, fileUrl, fileType
- User relation

**Lead** - Sales pipeline
- Contact info, source, status, budget
- Source: WEBSITE, WHATSAPP, FACEBOOK, INSTAGRAM, REFERRAL, OTHER
- Status: NEW, CONTACTED, INTERESTED, NEGOTIATING, CLOSED, LOST
- Assigned agent

**Testimonial** - Client reviews
- Client info, property bought, quote, rating
- Optional video URL
- Featured flag

## 🎨 Design System

### Color Palette (Navy & Gold)
```css
--primary: #1A365D (Navy Blue)
--secondary: #D4AF37 (Gold)
--accent: #FF6B6B (Coral)
--background: White
--foreground: Slate 900
```

### Typography
- **Headlines**: Montserrat (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600, 700)
- **Sizes**: 48px/36px/24px (headlines), 16px/14px (body)

### Components
- Border radius: 12px (cards), 8px (buttons)
- Button height: 44px (touch-friendly)
- Card padding: 24px
- Shadows: subtle (2px) → elevated (8px) on hover
- Animations: 300ms transitions, fade-in, slide-up

### Responsive Breakpoints
- Mobile: < 640px (1 column, full-width, hamburger menu)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3 columns, sidebar layouts)

## 📱 Mobile Optimization

- ✅ Mobile-first approach
- ✅ Touch targets: 44x44px minimum
- ✅ Hamburger menu
- ✅ Collapsible filters (bottom sheet)
- ✅ Stack columns vertically
- ✅ Full-width cards
- ✅ Swipeable carousels
- ✅ Responsive images

## 🚀 Performance

Current build results:
- ✅ **Compiled successfully**
- ✅ **9 routes** generated
- ✅ Static pages: 8/9
- ✅ Dynamic pages: 1 ([id])
- ✅ First Load JS: ~88-112 KB (excellent)
- ⚠️ Minor warnings: img tags (recommend next/image for production)

## 🔧 Ready for Integration

The following services are **architecturally ready** but need API keys:

1. **Cloudinary** - Image/video upload
2. **Resend** - Email notifications
3. **Twilio** - SMS notifications
4. **Mapbox** - Interactive maps
5. **Instagram API** - Social feed
6. **Google Calendar** - Appointment sync

## 📊 Metrics & Analytics (Planned)

Target KPIs:
- Page load: < 2 sec ⚡
- Core Web Vitals: All green 🟢
- Lighthouse score: > 90 📈
- Conversion rate (visitor → lead): 8-12%
- Conversion rate (lead → appointment): 20-30%

## 🚧 Next Steps

### Phase 3 (Production Ready)
- [ ] API routes implementation (properties, appointments, leads)
- [ ] Prisma client generation in production
- [ ] Image upload with Cloudinary
- [ ] Email notifications setup
- [ ] SMS notifications setup
- [ ] Mapbox integration
- [ ] Instagram Basic Display API
- [ ] Google Calendar sync

### Phase 4 (Advanced Features)
- [ ] Real-time chat system
- [ ] Lead management Kanban board
- [ ] Advanced analytics dashboard
- [ ] Document signing (DocuSign)
- [ ] Property comparison tool
- [ ] AR visualization
- [ ] Mobile app (React Native)

## 📝 Environment Variables

See `.env.example` for all required variables:
- Database connection (PostgreSQL)
- Authentication secret (NextAuth)
- Cloud services (Cloudinary, Resend, Twilio, Mapbox)
- Social integrations (Instagram, Google)

## 🎯 Key Differentiators

1. **Founder-Centric Branding** - Video hero section builds trust
2. **Airbnb-Quality UX** - Premium design and interactions
3. **Complete Transparency** - Clear process, visible agent info
4. **Instant Communication** - WhatsApp integration everywhere
5. **Comprehensive Tools** - Mortgage calculator, maps, virtual tours
6. **Mobile-First** - Perfect experience on all devices

## 📄 License

Proprietary - All rights reserved

## 👥 Support

For questions or issues, contact the development team.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
