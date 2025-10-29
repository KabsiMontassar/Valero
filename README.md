# VoiceFlow - Real-Time Communication Platform

A modern, animated, responsive single-page website showcasing VoiceFlow, a real-time voice and messaging platform built with React 19, TypeScript, Chakra UI, Framer Motion, and GSAP.

## ✨ Features

- **Modern Tech Stack**: React 19 + TypeScript + Chakra UI
- **Smooth Animations**: Framer Motion for section transitions + GSAP for hero effects
- **Responsive Design**: Beautiful on desktop, tablet, and mobile
- **Real-time Communication Focus**: Voice chat, messaging, and collaboration
- **Professional Design**: Clean, innovative, and calming aesthetic

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **UI Library**: Chakra UI v3
- **Animations**: 
  - Framer Motion for section fade-ins and transitions
  - GSAP for hero parallax and floating effects
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: CSS custom properties + Chakra UI theming

## 🎨 Design System

The project uses a carefully crafted color palette optimized for dark themes:

- **Primary**: `#7AAFCF` (Gentle Sky Blue)
- **Secondary**: `#9BBED2` (Muted Mist Blue)
- **Text Primary**: `#E4E8EC` (Soft Cloud White)
- **Text Muted**: `#A3A9AF` (Gentle Gray-Blue)
- **Background**: Dark slate tones for depth and contrast

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VoiceFlowVitrine/SPA
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx           # Navigation and layout wrapper
│   └── sections/
│       ├── Hero.tsx         # Hero section with GSAP animations
│       ├── About.tsx        # About/idea section
│       ├── Features.tsx     # Features grid with cards
│       ├── Demo.tsx         # Demo showcase
│       ├── Vision.tsx       # Future vision section
│       └── Contact.tsx      # Contact and footer
├── theme/
│   └── index.ts            # Color palette and theme config
├── global.css              # Global styles and CSS variables
├── App.tsx                 # Main app component
└── main.tsx               # App entry point
```

## 🎯 Sections

1. **Hero**: Animated introduction with GSAP floating particles and text reveals
2. **About**: Two-column layout explaining VoiceFlow's purpose and vision  
3. **Features**: Grid of feature cards with hover animations and icons
4. **Demo**: Interactive mockup showcase with floating animations
5. **Vision**: Future roadmap and development plans
6. **Contact**: Developer information and project links

## 🎭 Animations

- **Scroll-triggered**: Framer Motion `useInView` for section reveals
- **Hero Effects**: GSAP timeline animations for floating particles
- **Hover States**: Smooth transitions on cards and buttons
- **Page Transitions**: Smooth scroll navigation between sections

## 👤 Developer

**Montassar Kebsi**
- Email: kebsimontassar@gmail.com
- GitHub: [@KabsiMontassar](https://github.com/KabsiMontassar)

## 📄 License

This project showcases VoiceFlow and serves as a portfolio piece demonstrating modern web development techniques.

---

Built with ❤️ using React, TypeScript, Chakra UI, Framer Motion & GSAP
