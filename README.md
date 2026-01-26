# EventHub - Event Landing Page

A modern event landing page built with React, Vite, and Tailwind CSS featuring a banner, speaker/guest agenda section, and registration page.

## Features

- **Landing Page** with eye-catching banner
- **Speakers & Guests Section** showcasing event participants
- **Registration Page** with comprehensive form
- **Red Primary Color Theme** throughout the design
- **Arial Font** for clean, professional typography
- **Responsive Design** that works on all devices

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- PostCSS & Autoprefixer

## Getting Started

### Prerequisites

- Node.js version 20.19+ or 22.12+ (required for Vite 7)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Banner.jsx       # Hero banner component
│   ├── Agenda.jsx       # Speakers and guests section
│   ├── Navbar.jsx       # Navigation bar
│   └── Footer.jsx       # Footer component
├── pages/
│   ├── Home.jsx         # Landing page
│   └── Register.jsx     # Registration page
├── App.jsx              # Main app component with routing
└── main.jsx             # App entry point
```

## Color Scheme

The project uses red as the primary color with various shades:
- Primary 500: #dc2626
- Primary 600: #b91c1c
- Primary 700: #991b1b

## Note

If you encounter Node.js version issues, please upgrade to Node.js 20.19+ or 22.12+ as required by Vite 7.
