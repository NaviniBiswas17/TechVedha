# InnovaIT - IT Solutions Landing Page

A modern, clean, and conversion-focused landing page for IT solutions built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessible**: Semantic HTML and ARIA-compliant structure
- **Production Ready**: Clean, maintainable code with reusable components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Features.tsx         # Features/services section
│   ├── Stats.tsx            # Statistics section
│   ├── Process.tsx          # Process/workflow section
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer with links
└── public/                  # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Sections

1. **Navbar**: Sticky navigation with smooth scroll links
2. **Hero**: Eye-catching hero section with animated floating cards
3. **Features**: Key benefits and services offered
4. **Stats**: Company metrics and achievements
5. **Process**: Step-by-step workflow visualization
6. **CTA**: Conversion-focused call-to-action with growth chart
7. **Footer**: Contact information and site links

## Customization

### Colors

The primary color scheme uses green (`#22c55e`). To change:

1. Update Tailwind config in `tailwind.config.ts`
2. Replace color classes in components (e.g., `bg-green-500`, `text-green-500`)

### Content

Edit component files directly to update:
- Company name and logo
- Text content
- Images (replace Unsplash URLs)
- Contact information
- Navigation links

### Animations

Framer Motion animations can be customized in each component's `motion` props.

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal dependencies
- CSS purging with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for personal or commercial projects.
