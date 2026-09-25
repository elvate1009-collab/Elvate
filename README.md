# Elvate

Elvate is a professional, responsive static website for an IT Services and Hardware Sales company. Built with React 18, Vite, and CSS Modules.

## Getting Started

1. Install dependencies:
   `npm install`
2. Run development server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Content Management
All editable content is stored in `src/data/`.
- **Company Info:** Update `siteConfig.js` for phone, email, address, and social links.
- **Sections:** Modify `navLinks.js`, `services.js`, `products.js`, `stats.js`, `testimonials.js`, `brands.js`, and `features.js` to update the respective sections dynamically.

## Structure
- `src/components/layout/`: Includes Header, Footer, and Layout shell.
- `src/components/ui/`: Reusable UI components like Buttons, Cards, Inputs.
- `src/pages/`: Application routes (Home, About, Services, Products, Contact, NotFound).
- `src/styles/global.css`: Global design tokens (fonts, colors, spacing).
