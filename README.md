# Khandesh Youth Foundation (KYF) - NGO Web Application

A full-stack, production-ready web application built for **Khandesh Youth Foundation (KYF)**, a non-profit youth organization based in Dhule, Maharashtra.

---

## 🌟 Key Features

### Public Website
- **Logo-Inspired Theme**: Custom design system using Deep Warm Brown (`#5D3A1A`), Sky Blue/Teal (`#0EA5E9`), Leaf Green (`#16A34A`), and Warm Ivory White (`#FDFBF7`).
- **Scrolling Notice Bar**: Continuous horizontal marquee ticker for NGO announcements.
- **Dynamic Events Calendar**: Event grid with `Upcoming` and `Completed` status tags and volunteer registration modal.
- **Donation & UPI Portal**: Scan-to-pay QR code, one-click **Copy UPI ID** button, direct bank transfer details, and impact tiers.
- **Contact & Location**: Interactive contact form, WhatsApp button, and embedded Google Maps location frame.

---

## 📁 Project Directory Structure

```text
khandesh-youth-foundation/
├── app/                      # Next.js App Router routes
│   ├── about/                # About Us page
│   ├── contact/              # Contact Us page
│   ├── donate/               # Support & UPI Donation page
│   ├── events/               # Events calendar page
│   ├── initiatives/          # Social initiatives page
│   ├── globals.css           # Global CSS variables & marquee keyframes
│   ├── layout.tsx            # Root layout with ThemeProvider
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── ui/                   # Core UI components (Section, Container, Card, PrimaryButton, Modal, FormField, Badge)
│   ├── Navbar.tsx            # Navigation header & drawer
│   ├── NoticeBar.tsx         # Marquee notice ticker
│   ├── Hero.tsx              # Hero banner
│   ├── Stats.tsx             # Impact counters
│   ├── About.tsx             # About section
│   ├── Initiatives.tsx       # Initiatives grid & modal
│   ├── UpcomingEvents.tsx    # Events preview & registration modal
│   ├── Team.tsx              # Team members grid
│   ├── VolunteerCTA.tsx      # Call to action banner
│   ├── ThemeProvider.tsx     # Dynamic CSS variable injector
│   └── Footer.tsx            # Site footer
├── config/                   # Site default configuration (site.ts)
├── data/                     # Data models and datasets (events, initiatives, team)
├── lib/                      # Libraries & service layer
│   └── services/             # Clean data services (dataService.ts)
├── public/                   # Static images, branding logo, and media
├── types/                    # TypeScript interfaces (index.ts)
└── README.md                 # Project Overview & Setup Guide
```

---

## 💻 Technical Stack

- **Framework**: Next.js 16 (App Router with React 19)
- **Styling**: Tailwind CSS v4 & Custom CSS Variables (`:root`)
- **Icons**: Lucide React & Custom SVG Social Brand Icons
- **TypeScript**: Strict typing with 0 `any` types

---

## 🛠️ Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/organization/khandesh-youth-foundation.git
cd khandesh-youth-foundation
npm install
```

### 2. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Linting
Verify TypeScript compilation and linting:
```bash
npm run lint
npm run build
```
