# 🪐 Koppela Nirvan Reddy — Space Portfolio

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<br />

**A high-performance, immersive 3D Space Portfolio engineered with Three.js, Next.js, and TypeScript.**  
Built for software engineering and applied AI/ML placement drives, internships, and technical evaluations.

[Live Demo](http://localhost:4173) • [Explore Missions](#-featured-missions-projects) • [Academic Credentials](#-academic-trajectory--credentials) • [Quick Start](#-quick-start)

</div>

---

## 👨‍💻 Candidate Overview

| Parameter | Specification |
| :--- | :--- |
| **Full Name** | **Koppela Nirvan Reddy** |
| **Institution** | **Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)**, Hyderabad |
| **Degree & Major** | **B.Tech in Computer Science and Engineering** (2024 – 2028 Cohort) |
| **Academic Standing** | **CGPA: 8.01 / 10.0** |
| **Technical Focus** | **Full-Stack Systems, Computer Vision Kinematics, Applied Deep Learning** |
| **Contact** | `nirvanreddyk@gmail.com` • [LinkedIn Profile](https://www.linkedin.com/in/nirvan-reddy-koppela-3663a832a/) |

---

## ✨ Immersive Architectural Features

### 1. 🌌 Three.js Cosmic Environment (`StarBackgroundCanvas.tsx`)
- Procedural particle field of **3,600 starlight points** rendered with mathematical sinusoidal depth drift.
- **85 floating constellation nodes** interconnected by real-time dynamic line segments with distance-threshold geometry updates.
- Micro-parallax response to user mouse coordinates across a `[-1, 1]` viewport vector.

### 2. 🛸 Realistic 3D Photo Plaque (`Realistic3DPhotoCanvas.tsx`)
- Embeds real portrait photo on a high-specular chamfered 3D plane with dynamic specular point lighting tracking cursor kinematics.
- Dual gyroscopic orbital rings with independent counter-rotations.
- Concentric stardust particles and integrated placement telemetry HUD (*CGPA 8.01, 4 Systems, 5 Verified Certs*).

### 3. ⚡ SparkX Particle Trail & Burst Engine (`CursorParticles.tsx`)
- High-frequency neon stardust cursor particle trail with velocity decay and multi-color palette (`#00f3ff`, `#a855f7`, `#00ff99`).
- Radial explosive particle bursts on click events with custom gravitational drift.

### 4. 🎵 Transparent Glass Floating Music Player (`MusicPlayer.tsx`)
- Frosted glassmorphism capsule with backdrop blur and neon glow accents.
- **Curated 4-track cosmic vibe playlist**:
  1. `HYPNOTIC` — isq (*Dark Phonk / Ambient Slowed*)
  2. `HORIZON MONOLITH` — Aeris (*Cosmic Synthwave / Interstellar*)
  3. `AFTERGLOW (VAST)` — Aeris (*Dreamy Celestial Ambient*)
  4. `OUTLANDS` — Aeris (*Chill Lo-Fi Focus*)
- Interactive track playlist switcher, spinning vinyl disc animation, 4-bar dynamic audio equalizer visualizer, and volume slider popup.

### 5. 🛰️ Mission Deployments & Interactive Case Studies (`ProjectsSection.tsx`)
- 4 real-world systems with rich UI previews, architecture badges, problem statements, and system metrics:
  - **Smart Campus Automation System**: IoT + Full-Stack monitoring hub with edge sensor mesh and real-time alerts.
  - **Physiosis**: Real-time AI posture analysis and physical therapy kinematics tracker built with OpenCV and MediaPipe.
  - **Smart Study Planner**: Intelligent scheduling engine with Pomodoro cycles, workload balancing, and streak analytics.
  - **Pneumonia Detection from Chest X-Rays**: Deep learning CNN diagnostic pipeline with Grad-CAM heatmap explainability.
- Interactive **Case Study Modal** (`ProjectCaseStudyModal.tsx`) detailing system architecture, implementation highlights, and results.

### 6. 📄 Placement Resume Modal (`ResumeModal.tsx`)
- Built-in printable and downloadable placement resume modal displaying academic credentials, verified skills, and project summaries with a single click.

---

## 📁 Repository File Structure

```
c:/portfolio/
├── public/                               # Static assets served at web root
│   ├── assets/                           # Audio playlist tracks
│   │   ├── afterglow-vast.mp3            # Dreamy space ambient
│   │   ├── horizon-monolith.mp3          # Cosmic synthwave
│   │   ├── hypnotic.mp3                  # Dark phonk / slowed
│   │   └── outlands.mp3                  # Chill lo-fi focus
│   ├── favicon.svg                       # Space monogram favicon
│   ├── icons.svg                         # SVG icon sprite
│   ├── nirvan.jpg                        # User 3D plaque portrait
│   ├── portrait.jpg                      # Secondary portrait asset
│   ├── robots.txt                        # Search crawler instructions
│   └── sitemap.xml                       # Search engine sitemap
├── src/
│   ├── animations/
│   │   └── scrollAnimations.ts           # GSAP ScrollTrigger configuration
│   ├── app/                              # Next.js 16 App Router configuration
│   │   ├── globals.css                   # Global styles & Tailwind directives
│   │   ├── layout.tsx                    # Next.js root layout with metadata
│   │   └── page.tsx                      # Next.js page rendering root App
│   ├── assets/                           # Bundled media imports
│   │   ├── hero.png
│   │   ├── nirvan.jpg
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── audio/
│   │   └── soundEffects.ts               # Web Audio API sound synthesis
│   ├── components/                       # Modular UI & interactive widgets
│   │   ├── CursorParticles.tsx           # Neon cursor particle trail & click burst
│   │   ├── Footer.tsx                    # Space footer & orbit-to-top trigger
│   │   ├── MusicPlayer.tsx               # Transparent glass audio player capsule
│   │   ├── Navbar.tsx                    # Fixed glassmorphic navigation header
│   │   ├── ProjectCaseStudyModal.tsx     # Deep-dive system architecture modal
│   │   ├── ProjectMockup.tsx             # Interactive project UI preview mockup
│   │   └── ResumeModal.tsx               # Verified placement resume modal
│   ├── data/
│   │   └── portfolioData.ts              # Canonical candidate profile & project data
│   ├── hooks/                            # Custom React hooks
│   │   ├── useLenisScroll.ts             # Smooth inertial scroll integration
│   │   ├── useMousePosition.ts           # Real-time normalized mouse kinematics
│   │   └── useWindowSize.ts              # Viewport dimension observer
│   ├── sections/                         # Page section components
│   │   ├── ContactSection.tsx            # Mission Control & direct email dispatch
│   │   ├── EducationSection.tsx          # Academic timeline & verified credentials
│   │   ├── HeroSection.tsx               # Space hero with 3D realistic portrait
│   │   ├── ProjectsSection.tsx           # Mission deployments & case studies
│   │   └── SkillsSection.tsx             # Constellation skill pods & CS foundations
│   ├── three/                            # Three.js WebGL canvas implementations
│   │   ├── Realistic3DPhotoCanvas.tsx    # 3D interactive portrait plaque
│   │   └── StarBackgroundCanvas.tsx      # Stardust particles & dynamic constellation
│   ├── types/
│   │   └── index.ts                      # Strict TypeScript data types & interfaces
│   ├── App.css                           # App-level styling
│   ├── App.tsx                           # Root single-page application container
│   ├── index.css                         # Tailwind base, components, and utilities
│   └── main.tsx                          # Vite client entry point
├── .gitignore                            # Comprehensive git ignore rules
├── index.html                            # Vite HTML root template
├── next.config.mjs                       # Next.js production configuration
├── package.json                          # Scripts & dependencies
├── postcss.config.js                     # PostCSS plugins (Tailwind & Autoprefixer)
├── tailwind.config.js                    # Tailwind theme extension & color tokens
├── tsconfig.json                         # TypeScript configuration root
├── tsconfig.app.json                     # App TypeScript compiler options
├── tsconfig.node.json                    # Node scripts compiler options
├── vite.config.ts                        # Vite bundler configuration & code splitting
└── README.md                             # Project documentation
```

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technologies |
| :--- | :--- |
| **Frameworks** | **Next.js 16 (App Router)** & **Vite 8** (Dual Compatibility) |
| **UI Library** | **React 19** with strict TypeScript (`verbatimModuleSyntax`) |
| **3D & Graphics** | **Three.js (WebGL)**, Canvas 2D API |
| **Styling** | **Tailwind CSS**, Glassmorphism, CSS Backdrop Filters |
| **Animations** | **GSAP (ScrollTrigger)**, CSS Keyframe Animations |
| **Icons** | **Lucide React** |
| **Smooth Scroll** | **Lenis** (`@studio-freight/lenis`) |

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher

### 2. Clone & Install
```bash
# Clone the repository
git clone https://github.com/your-username/space-portfolio.git

# Navigate into the project directory
cd space-portfolio

# Install dependencies
npm install
```

### 3. Run Development Server

You can run the project using either Vite or Next.js:

```bash
# Option A: Vite Development Server (Instant HMR)
npm run dev

# Option B: Next.js Development Server
npm run next:dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite) or [http://localhost:3000](http://localhost:3000) (Next.js) in your browser.

### 4. Build for Production

```bash
# Vite Production Build
npm run build

# Next.js Production Build
npm run next:build
```

### 5. Preview Production Build
```bash
npm run preview
```

The production preview will run at [http://localhost:4173](http://localhost:4173).

---

## 🎯 Verification & Quality Checklist

- [x] **Placement-Ready Content**: Factual credentials, real CGPA (8.01), verified institution (GRIET), and 4 complete systems engineering projects.
- [x] **3D Realistic Photo**: Interactive 3D plaque with specular light tracking and dual orbital rings.
- [x] **Particle & Audio Atmosphere**: SparkX-inspired particle trails, click bursts, and transparent 4-track glass music player.
- [x] **TypeScript Strictness**: Clean compilation with `tsc --noEmit` and zero type errors.
- [x] **Performance**: Procedural stardust particles optimized with RAF loops and canvas cleanup to prevent memory leaks.
- [x] **Responsive Layout**: Fluid experience across mobile, tablet, and ultra-wide displays.
- [x] **Clean Repository Structure**: Canonical naming and zero redundant legacy files.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Crafted with passion for engineering excellence by <strong>Koppela Nirvan Reddy</strong></sub>
</div>
