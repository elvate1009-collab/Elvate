const fs = require('fs');
const path = require('path');

const files = {
  'package.json': `{
  "name": "elvate",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}`,

  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`,

  'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Elvate - IT Services & Hardware Solutions" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Elvate</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,

  'README.md': `# Elvate

Elvate is a professional, responsive static website for an IT Services and Hardware Sales company. Built with React 18, Vite, and CSS Modules.

## Getting Started

1. Install dependencies:
   \`npm install\`
2. Run development server:
   \`npm run dev\`
3. Build for production:
   \`npm run build\`

## Content Management
All editable content is stored in \`src/data/\`.
- **Company Info:** Update \`siteConfig.js\` for phone, email, address, and social links.
- **Sections:** Modify \`navLinks.js\`, \`services.js\`, \`products.js\`, \`stats.js\`, \`testimonials.js\`, \`brands.js\`, and \`features.js\` to update the respective sections dynamically.

## Structure
- \`src/components/layout/\`: Includes Header, Footer, and Layout shell.
- \`src/components/ui/\`: Reusable UI components like Buttons, Cards, Inputs.
- \`src/pages/\`: Application routes (Home, About, Services, Products, Contact, NotFound).
- \`src/styles/global.css\`: Global design tokens (fonts, colors, spacing).
`,

  'public/favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#0052cc"/><path d="M30 70 L50 30 L70 70 Z" fill="#ffffff"/></svg>`,

  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`,

  'src/App.jsx': `import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Products = React.lazy(() => import('./pages/Products/Products'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

// Loading fallback component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;`,

  'src/styles/global.css': `
:root {
  /* Colors */
  --clr-primary: #0A192F;
  --clr-primary-light: #112240;
  --clr-accent: #00D8FF;
  --clr-accent-hover: #00b5d6;
  
  --clr-text-main: #333333;
  --clr-text-light: #555555;
  --clr-text-muted: #888888;
  
  --clr-bg-main: #FFFFFF;
  --clr-bg-alt: #F8F9FA;
  --clr-bg-footer: #081221;
  
  --clr-border: #E5E7EB;
  --clr-error: #EF4444;

  /* Typography */
  --ff-primary: 'Inter', sans-serif;
  --fs-base: 16px;
  
  /* Fluid type scale */
  --fs-h1: clamp(2.5rem, 5vw, 4rem);
  --fs-h2: clamp(2rem, 4vw, 3rem);
  --fs-h3: clamp(1.5rem, 3vw, 2rem);
  --fs-h4: clamp(1.25rem, 2vw, 1.5rem);

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-xxl: 5rem;

  /* Borders / Shadows / Transitions */
  --br-sm: 4px;
  --br-md: 8px;
  --br-lg: 16px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  --transition: 0.3s ease-in-out;
}

/* Resets */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--fs-base);
  scroll-behavior: smooth;
}

body {
  font-family: var(--ff-primary);
  color: var(--clr-text-main);
  background-color: var(--clr-bg-main);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

/* Utilities for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`,

  'src/data/siteConfig.js': `export const siteConfig = {
  companyName: "Elvate",
  phone: "+1 (555) 123-4567",
  email: "contact@elvate.com",
  address: "123 Tech Avenue, Suite 400, Silicon Valley, CA 94025",
  businessHours: "Mon - Fri: 9:00 AM - 6:00 PM",
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};`,

  'src/data/navLinks.js': `export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact Us" }
];`,

  'src/data/services.js': `import { FaNetworkWired, FaServer, FaShieldAlt, FaCloud, FaCamera, FaHeadset } from 'react-icons/fa';

export const services = [
  {
    id: 'amc-support',
    icon: FaHeadset,
    title: 'IT Support & AMC',
    description: 'Reliable Annual Maintenance Contracts (AMC) and on-demand IT support for your business.',
    points: ['24/7 Helpdesk Support', 'Proactive Maintenance', 'Hardware & Software Troubleshooting']
  },
  {
    id: 'network-design',
    icon: FaNetworkWired,
    title: 'Network & Structured Cabling',
    description: 'Expert network design, installation, and optimization to keep your operations connected.',
    points: ['Fiber & Copper Cabling', 'Switches & Routers Setup', 'Wi-Fi & Access Points']
  },
  {
    id: 'server-management',
    icon: FaServer,
    title: 'Server Setup & Management',
    description: 'Robust server infrastructure solutions optimized for performance and reliability.',
    points: ['Windows & Linux Servers', 'Storage Solutions (NAS/SAN)', 'Data Backup & Recovery']
  },
  {
    id: 'cybersecurity',
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Protect your business from modern digital threats with our comprehensive security solutions.',
    points: ['Firewall Implementation', 'Endpoint Protection', 'Security Audits']
  },
  {
    id: 'cloud-services',
    icon: FaCloud,
    title: 'Cloud & Email Setup',
    description: 'Seamless migration and management of cloud infrastructure and corporate email systems.',
    points: ['Microsoft 365 / Google Workspace', 'Cloud Migration', 'Hosting Solutions']
  },
  {
    id: 'cctv-surveillance',
    icon: FaCamera,
    title: 'CCTV & Surveillance',
    description: 'Advanced physical security solutions to monitor and protect your premises.',
    points: ['IP Cameras & NVRs', 'Remote Viewing Setup', 'Access Control Systems']
  }
];`,

  'src/data/products.js': `import { FaLaptop, FaServer, FaNetworkWired, FaPrint, FaBatteryFull, FaVideo } from 'react-icons/fa';

export const productCategories = [
  {
    id: 'laptops-desktops',
    icon: FaLaptop,
    title: 'Laptops & Desktops',
    description: 'Business-grade computing devices for professionals and enterprises.',
    examples: 'Dell Latitude, ThinkPad, HP ProDesk, Workstations'
  },
  {
    id: 'servers-storage',
    icon: FaServer,
    title: 'Servers & Storage',
    description: 'High-performance servers and scalable storage solutions.',
    examples: 'Rack Servers, Tower Servers, NAS, SAN, Hard Drives'
  },
  {
    id: 'networking',
    icon: FaNetworkWired,
    title: 'Networking Equipment',
    description: 'Enterprise routers, switches, and wireless solutions.',
    examples: 'Cisco Switches, Ubiquiti Access Points, Firewalls'
  },
  {
    id: 'printers',
    icon: FaPrint,
    title: 'Printers & Scanners',
    description: 'Efficient and reliable printing solutions for any office size.',
    examples: 'Laser Printers, Multi-function devices, Scanners, Toners'
  },
  {
    id: 'power-backup',
    icon: FaBatteryFull,
    title: 'UPS & Power Backup',
    description: 'Uninterruptible power supplies to protect your critical hardware.',
    examples: 'Online UPS, Line-interactive UPS, Extended Battery Modules'
  },
  {
    id: 'surveillance',
    icon: FaVideo,
    title: 'CCTV & Accessories',
    description: 'High-definition cameras and recording equipment for security.',
    examples: 'Bullet Cameras, Dome Cameras, NVRs, Cables'
  }
];`,

  'src/data/stats.js': `export const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Clients Served', value: '500+' },
  { label: 'Projects Completed', value: '1200+' },
  { label: 'Support Availability', value: '24/7' }
];`,

  'src/data/testimonials.js': `export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    company: "TechNova Solutions",
    text: "Elvate completely overhauled our office network. Since their intervention, our downtime has dropped to zero. Highly professional team!"
  },
  {
    id: 2,
    name: "Michael Chang",
    company: "BlueRidge Health",
    text: "The server migration was seamless. They securely backed up our sensitive client data and implemented robust firewall protections."
  },
  {
    id: 3,
    name: "David Smith",
    company: "Retail Partners Corp",
    text: "We rely on Elvate for all our IT hardware needs. Their recommendations are always spot-on and delivery is surprisingly fast."
  }
];`,

  'src/data/brands.js': `export const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "Cisco",
  "TP-Link",
  "Ubiquiti",
  "Hikvision"
];`,

  'src/data/features.js': `import { FaUserTie, FaClock, FaTools, FaHandshake } from 'react-icons/fa';

export const features = [
  {
    icon: FaUserTie,
    title: "Expert Technicians",
    description: "Our certified professionals bring years of experience to solve complex technological challenges."
  },
  {
    icon: FaClock,
    title: "Fast Response Time",
    description: "We understand that downtime costs money. Our team acts quickly to restore your operations."
  },
  {
    icon: FaTools,
    title: "Tailored Solutions",
    description: "We do not believe in one-size-fits-all. Every solution is customized to your specific business needs."
  },
  {
    icon: FaHandshake,
    title: "Long-term Partnerships",
    description: "We focus on building lasting relationships, supporting you as your business scales and grows."
  }
];`,

  'src/hooks/useDocumentTitle.js': `import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export const useDocumentTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? \`\${title} | \${siteConfig.companyName}\` : siteConfig.companyName;
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }
  }, [title, description]);
};`,

  'src/components/ui/Button/Button.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', to, href, className = '', ...props }) => {
  const btnClass = \`\${styles.btn} \${styles[variant]} \${className}\`;

  if (to) {
    return <Link to={to} className={btnClass} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={btnClass} {...props}>{children}</a>;
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;`,

  'src/components/ui/Button/Button.module.css': `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: var(--br-md);
  transition: all var(--transition);
  font-size: 1rem;
  text-align: center;
}

.primary {
  background-color: var(--clr-accent);
  color: var(--clr-primary);
}

.primary:hover {
  background-color: var(--clr-accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.secondary {
  background-color: transparent;
  color: var(--clr-bg-main);
  border: 2px solid var(--clr-accent);
}

.secondary:hover {
  background-color: var(--clr-accent);
  color: var(--clr-primary);
}

.outline {
  background-color: transparent;
  color: var(--clr-primary);
  border: 2px solid var(--clr-primary);
}

.outline:hover {
  background-color: var(--clr-primary);
  color: var(--clr-bg-main);
}`,

  'src/components/ui/Container/Container.jsx': `import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, className = '' }) => {
  return (
    <div className={\`\${styles.container} \${className}\`}>
      {children}
    </div>
  );
};

export default Container;`,

  'src/components/ui/Container/Container.module.css': `.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-sm);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-lg);
  }
}`,

  'src/components/ui/Section/Section.jsx': `import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, variant = 'main', className = '', id }) => {
  return (
    <section id={id} className={\`\${styles.section} \${styles[variant]} \${className}\`}>
      {children}
    </section>
  );
};

export default Section;`,

  'src/components/ui/Section/Section.module.css': `.section {
  padding: var(--space-xxl) 0;
}

.main {
  background-color: var(--clr-bg-main);
}

.alt {
  background-color: var(--clr-bg-alt);
}

.dark {
  background-color: var(--clr-primary);
  color: var(--clr-bg-main);
}`,

  'src/components/ui/SectionHeading/SectionHeading.jsx': `import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ eyebrow, title, subtitle, alignment = 'center' }) => {
  const alignClass = styles[alignment] || styles.center;
  
  return (
    <div className={\`\${styles.wrapper} \${alignClass}\`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;`,

  'src/components/ui/SectionHeading/SectionHeading.module.css': `.wrapper {
  margin-bottom: var(--space-xl);
  max-width: 800px;
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.left {
  text-align: left;
}

.eyebrow {
  display: block;
  font-weight: 700;
  color: var(--clr-accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-xs);
  font-size: 0.875rem;
}

.title {
  font-size: var(--fs-h2);
  color: inherit;
  margin-bottom: var(--space-sm);
  line-height: 1.2;
}

.subtitle {
  color: var(--clr-text-muted);
  font-size: 1.125rem;
}

/* override inherit coloring if we are in a dark section, parent defines color. */`,

  'src/components/ui/Card/Card.jsx': `import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon: Icon, title, description, children, className = '' }) => {
  return (
    <div className={\`\${styles.card} \${className}\`}>
      {Icon && <div className={styles.iconWrapper}><Icon className={styles.icon} /></div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
};

export default Card;`,

  'src/components/ui/Card/Card.module.css': `.card {
  background-color: var(--clr-bg-main);
  border: 1px solid var(--clr-border);
  border-radius: var(--br-lg);
  padding: var(--space-lg);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--clr-accent);
}

.iconWrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--clr-bg-alt);
  color: var(--clr-primary);
  margin-bottom: var(--space-md);
  font-size: 1.5rem;
  transition: var(--transition);
}

.card:hover .iconWrapper {
  background-color: var(--clr-primary);
  color: var(--clr-accent);
}

.title {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
  color: var(--clr-primary);
}

.description {
  color: var(--clr-text-light);
  flex-grow: 1;
  margin-bottom: var(--space-md);
}`,

  'src/components/ui/PageBanner/PageBanner.jsx': `import React from 'react';
import Container from '../Container/Container';
import styles from './PageBanner.module.css';

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </Container>
    </div>
  );
};

export default PageBanner;`,

  'src/components/ui/PageBanner/PageBanner.module.css': `.banner {
  background-color: var(--clr-primary);
  color: var(--clr-bg-main);
  padding: calc(var(--space-xxl) * 1.5) 0 var(--space-xxl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--clr-primary-light) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.title {
  font-size: var(--fs-h1);
  margin-bottom: var(--space-sm);
  position: relative;
  z-index: 1;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--clr-accent);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}`,

  'src/components/ui/StatCounter/StatCounter.jsx': `import React from 'react';
import styles from './StatCounter.module.css';

const StatCounter = ({ label, value }) => {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default StatCounter;`,

  'src/components/ui/StatCounter/StatCounter.module.css': `.stat {
  text-align: center;
  padding: var(--space-md);
}

.value {
  display: block;
  font-size: var(--fs-h2);
  font-weight: 700;
  color: var(--clr-accent);
  margin-bottom: var(--space-xs);
}

.label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--clr-bg-main);
}`,

  'src/components/ui/TestimonialCard/TestimonialCard.jsx': `import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, company, text }) => {
  return (
    <div className={styles.card}>
      <FaQuoteLeft className={styles.icon} />
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.company}>{company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;`,

  'src/components/ui/TestimonialCard/TestimonialCard.module.css': `.card {
  background-color: var(--clr-bg-alt);
  padding: var(--space-lg);
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: column;
  position: relative;
}

.icon {
  color: var(--clr-accent);
  font-size: 2rem;
  margin-bottom: var(--space-md);
  opacity: 0.3;
}

.text {
  font-style: italic;
  color: var(--clr-text-main);
  flex-grow: 1;
  margin-bottom: var(--space-md);
}

.author {
  border-top: 1px solid var(--clr-border);
  padding-top: var(--space-sm);
}

.name {
  font-size: 1.1rem;
  color: var(--clr-primary);
  margin-bottom: 0.2rem;
}

.company {
  font-size: 0.9rem;
  color: var(--clr-text-muted);
}`,

  'src/components/ui/CTABanner/CTABanner.jsx': `import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './CTABanner.module.css';

const CTABanner = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textWrap}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.btnWrap}>
            <Button to={buttonLink} variant="primary">{buttonText}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;`,

  'src/components/ui/CTABanner/CTABanner.module.css': `.banner {
  background-color: var(--clr-primary);
  padding: var(--space-xl) 0;
  color: var(--clr-bg-main);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-lg);
}

.title {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-xs);
}

.subtitle {
  color: var(--clr-bg-alt);
  opacity: 0.9;
  font-size: 1.1rem;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}`,

  'src/components/ui/FormInput/FormInput.jsx': `import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, type = 'text', error, options, ...props }) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>
      {type === 'textarea' ? (
        <textarea className={\`\${styles.input} \${error ? styles.hasError : ''}\`} {...props} />
      ) : type === 'select' ? (
        <select className={\`\${styles.input} \${error ? styles.hasError : ''}\`} {...props}>
          <option value="">Select an option</option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input type={type} className={\`\${styles.input} \${error ? styles.hasError : ''}\`} {...props} />
      )}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default FormInput;`,

  'src/components/ui/FormInput/FormInput.module.css': `.group {
  margin-bottom: var(--space-md);
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: 500;
  margin-bottom: var(--space-xs);
  color: var(--clr-text-main);
  font-size: 0.95rem;
}

.input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-border);
  border-radius: var(--br-sm);
  font-family: inherit;
  font-size: 1rem;
  background-color: var(--clr-bg-alt);
  transition: border-color var(--transition);
}

.input:focus {
  outline: none;
  border-color: var(--clr-primary);
  background-color: var(--clr-bg-main);
}

textarea.input {
  min-height: 120px;
  resize: vertical;
}

.hasError {
  border-color: var(--clr-error);
}

.errorText {
  color: var(--clr-error);
  font-size: 0.85rem;
  margin-top: 4px;
}`,

  'src/components/layout/Header/Header.jsx': `import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../../data/navLinks';
import { siteConfig } from '../../../data/siteConfig';
import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={\`\${styles.header} \${isScrolled ? styles.scrolled : ''}\`}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          {siteConfig.companyName}
          <span className={styles.logoDot}>.</span>
        </Link>
        
        <nav className={\`\${styles.nav} \${isOpen ? styles.open : ''}\`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? \`\${styles.navLink} \${styles.active}\` : styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <Button to="/contact" variant="primary" onClick={closeMenu}>Get a Quote</Button>
          </div>
        </nav>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu} 
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Container>
      
      {/* Overlay for mobile nav clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;`,

  'src/components/layout/Header/Header.module.css': `.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--clr-bg-main);
  z-index: 1000;
  transition: all var(--transition);
  border-bottom: 1px solid transparent;
}

.scrolled {
  box-shadow: var(--shadow-sm);
  height: 70px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--clr-primary);
  display: flex;
  align-items: baseline;
}

.logoDot {
  color: var(--clr-accent);
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.navList {
  display: flex;
  gap: var(--space-md);
}

.navLink {
  font-weight: 500;
  color: var(--clr-text-main);
  position: relative;
  padding: 0.5rem 0;
}

.navLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--clr-accent);
  transition: width var(--transition);
}

.navLink:hover::after, .active::after {
  width: 100%;
}

.navLink:hover {
  color: var(--clr-primary);
}

.active {
  color: var(--clr-primary);
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  color: var(--clr-primary);
  z-index: 1001;
}

.overlay {
  display: none;
}

@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: var(--clr-bg-main);
    flex-direction: column;
    align-items: flex-start;
    padding: 100px var(--space-lg) var(--space-lg);
    box-shadow: -10px 0 30px rgba(0,0,0,0.1);
    transition: right 0.4s ease;
    z-index: 1000;
  }
  
  .nav.open {
    right: 0;
  }
  
  .navList {
    flex-direction: column;
    width: 100%;
    gap: var(--space-md);
  }
  
  .navLink {
    display: block;
    font-size: 1.2rem;
  }
  
  .navCta {
    margin-top: var(--space-lg);
    width: 100%;
  }
  
  .navCta > * {
    width: 100%;
  }
  
  .overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
}`,

  'src/components/layout/Footer/Footer.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { siteConfig } from '../../../data/siteConfig';
import { navLinks } from '../../../data/navLinks';
import { services } from '../../../data/services';
import Container from '../../ui/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              {siteConfig.companyName}
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.desc}>
              Delivering innovative IT services, robust networks, and top-tier hardware solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.links}>
            <h4 className={styles.title}>Services</h4>
            <ul>
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contact}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <FaPhoneAlt className={styles.icon} />
                <span>{siteConfig.phone}</span>
              </li>
              <li>
                <FaEnvelope className={styles.icon} />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {year} {siteConfig.companyName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;`,

  'src/components/layout/Footer/Footer.module.css': `.footer {
  background-color: var(--clr-bg-footer);
  color: var(--clr-text-muted);
  padding: var(--space-xxl) 0 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  padding-bottom: var(--space-xl);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
}

.brand .logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--clr-bg-main);
  display: inline-block;
  margin-bottom: var(--space-sm);
}

.logoDot {
  color: var(--clr-accent);
}

.desc {
  line-height: 1.6;
}

.title {
  color: var(--clr-bg-main);
  font-size: 1.2rem;
  margin-bottom: var(--space-md);
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 40px;
  height: 2px;
  background-color: var(--clr-accent);
}

.links ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.links a {
  transition: color var(--transition);
}

.links a:hover {
  color: var(--clr-accent);
}

.contact ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.icon {
  color: var(--clr-accent);
  margin-top: 4px;
}

.bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: var(--space-md) 0;
  text-align: center;
  font-size: 0.9rem;
}`,

  'src/components/layout/Layout/Layout.jsx': `import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;`,

  'src/components/layout/Layout/Layout.module.css': `.main {
  min-height: 100vh;
  padding-top: 80px; /* Offset for fixed header */
}`,

  'src/components/layout/ScrollToTop.jsx': `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;`,

  'src/pages/Home/Home.jsx': `import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import StatCounter from '../../components/ui/StatCounter/StatCounter';
import TestimonialCard from '../../components/ui/TestimonialCard/TestimonialCard';
import CTABanner from '../../components/ui/CTABanner/CTABanner';

import { services } from '../../data/services';
import { productCategories } from '../../data/products';
import { stats } from '../../data/stats';
import { features } from '../../data/features';
import { testimonials } from '../../data/testimonials';
import { brands } from '../../data/brands';
import { siteConfig } from '../../data/siteConfig';

import styles from './Home.module.css';

const Home = () => {
  useDocumentTitle('Home', 'Elvate - Premium IT Services & Hardware Solutions');
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Elevate Your Business with <span className={styles.highlight}>Smart IT Solutions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From managed IT services and network infrastructure to premium hardware sales, we are your trusted technology partner.
            </p>
            <div className={styles.heroBtns}>
              <Button to="/services" variant="primary">Our Services</Button>
              <Button to="/contact" variant="secondary">Get a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <Container>
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <StatCounter key={idx} label={stat.label} value={stat.value} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <Section variant="main">
        <Container>
          <SectionHeading 
            eyebrow="What We Do"
            title="Comprehensive IT Services"
            subtitle="We provide end-to-end technology solutions to keep your business running smoothly and securely."
          />
          <div className={styles.grid3}>
            {services.map(service => (
              <Card 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className={styles.centerBtn}>
            <Button to="/services" variant="outline">View All Services</Button>
          </div>
        </Container>
      </Section>

      {/* Products Preview */}
      <Section variant="alt">
        <Container>
          <SectionHeading 
            eyebrow="Hardware & Equipment"
            title="Premium Products for Your Needs"
            subtitle="Explore our wide range of enterprise-grade hardware, networking gear, and accessories."
          />
          <div className={styles.grid3}>
            {productCategories.slice(0, 3).map(cat => (
              <Card 
                key={cat.id}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
              >
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(\`/contact?interest=\${cat.id}\`)}
                    style={{ width: '100%', fontSize: '0.9rem' }}
                  >
                    Enquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.centerBtn}>
            <Button to="/products" variant="primary">Explore Hardware</Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section variant="main">
        <Container>
          <SectionHeading 
            eyebrow="Why Elvate"
            title="The Elvate Advantage"
            subtitle="We don't just fix computers; we build lasting technology foundations for your success."
          />
          <div className={styles.grid4}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <feature.icon className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brands Strip */}
      <section className={styles.brandsStrip}>
        <Container>
          <div className={styles.brandsTrack}>
            {brands.map((brand, idx) => (
              <span key={idx} className={styles.brandName}>{brand}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Section variant="main">
        <Container>
          <SectionHeading 
            eyebrow="Client Success"
            title="What Our Clients Say"
          />
          <div className={styles.grid3}>
            {testimonials.map(test => (
              <TestimonialCard 
                key={test.id}
                name={test.name}
                company={test.company}
                text={test.text}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner 
        title="Need reliable IT support or hardware?"
        subtitle="Talk to our experts today and get a tailored solution for your business."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Home;`,

  'src/pages/Home/Home.module.css': `.hero {
  background-color: var(--clr-primary);
  color: var(--clr-bg-main);
  padding: calc(var(--space-xxl) * 2) 0 var(--space-xxl);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(135deg, transparent 0%, rgba(0, 216, 255, 0.05) 100%);
  pointer-events: none;
}

.heroContainer {
  position: relative;
  z-index: 1;
}

.heroContent {
  max-width: 800px;
}

.heroTitle {
  font-size: var(--fs-h1);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.highlight {
  color: var(--clr-accent);
}

.heroSubtitle {
  font-size: 1.2rem;
  color: var(--clr-text-muted);
  margin-bottom: var(--space-lg);
  max-width: 600px;
}

.heroBtns {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .heroBtns > * {
    width: 100%;
  }
}

.statsSection {
  background-color: var(--clr-primary-light);
  border-bottom: 2px solid var(--clr-accent);
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

@media (min-width: 768px) {
  .statsGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .grid3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid4 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .grid4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

.centerBtn {
  display: flex;
  justify-content: center;
  margin-top: var(--space-xl);
}

.featureItem {
  text-align: center;
  padding: var(--space-md);
}

.featureIcon {
  font-size: 2.5rem;
  color: var(--clr-accent);
  margin-bottom: var(--space-sm);
}

.featureTitle {
  font-size: 1.25rem;
  margin-bottom: var(--space-xs);
  color: var(--clr-primary);
}

.featureDesc {
  color: var(--clr-text-light);
}

.brandsStrip {
  background-color: var(--clr-bg-alt);
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--clr-border);
  border-bottom: 1px solid var(--clr-border);
}

.brandsTrack {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.brandName {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr-text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.6;
  transition: var(--transition);
}

.brandName:hover {
  opacity: 1;
  color: var(--clr-primary);
}`,

  'src/pages/About/About.jsx': `import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import CTABanner from '../../components/ui/CTABanner/CTABanner';
import styles from './About.module.css';

const About = () => {
  useDocumentTitle('About Us', 'Learn more about Elvate, our mission, and core values.');

  return (
    <div>
      <PageBanner 
        title="About Elvate" 
        subtitle="Empowering businesses with robust technology solutions since 2013."
      />
      
      <Section>
        <Container>
          <div className={styles.grid}>
            <div className={styles.content}>
              <SectionHeading eyebrow="Our Story" title="Who We Are" alignment="left" />
              <p className={styles.text}>
                Founded on the principle that technology should be an enabler, not a hurdle, Elvate has grown 
                into a trusted partner for businesses across multiple sectors. We bridge the gap between complex 
                IT infrastructure and seamless business operations.
              </p>
              <p className={styles.text}>
                Our team is comprised of certified engineers, network specialists, and cybersecurity experts 
                who are passionate about delivering tailored solutions. Whether you need a simple hardware upgrade 
                or a complete office network overhaul, we bring the same level of dedication and technical excellence to every project.
              </p>
            </div>
            
            <div className={styles.missionVision}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p>To provide reliable, scalable, and secure IT services and hardware solutions that empower organizations to achieve their goals.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p>To be the leading technology partner for growing businesses, recognized for our innovation, integrity, and exceptional service.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className={styles.valuesGrid}>
            {[
              { title: "Integrity", text: "We are honest and transparent in our recommendations and pricing." },
              { title: "Excellence", text: "We strive for technical perfection and outstanding customer service." },
              { title: "Adaptability", text: "We stay ahead of technological curves to provide modern solutions." },
              { title: "Partnership", text: "We view our clients' success as our own success." }
            ].map((val, idx) => (
              <div key={idx} className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{val.title}</h4>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner 
        title="Ready to elevate your IT infrastructure?"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default About;`,

  'src/pages/About/About.module.css': `.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

.text {
  margin-bottom: var(--space-md);
  font-size: 1.1rem;
  color: var(--clr-text-light);
}

.missionVision {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.card {
  background-color: var(--clr-primary-light);
  color: var(--clr-bg-main);
  padding: var(--space-lg);
  border-radius: var(--br-md);
  border-left: 4px solid var(--clr-accent);
}

.cardTitle {
  color: var(--clr-accent);
  margin-bottom: var(--space-xs);
  font-size: 1.5rem;
}

.valuesGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .valuesGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .valuesGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.valueItem {
  background-color: var(--clr-bg-main);
  padding: var(--space-lg);
  border-radius: var(--br-md);
  border: 1px solid var(--clr-border);
  text-align: center;
  transition: transform var(--transition);
}

.valueItem:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.valueTitle {
  color: var(--clr-primary);
  font-size: 1.2rem;
  margin-bottom: var(--space-sm);
}`,

  'src/pages/Services/Services.jsx': `import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import CTABanner from '../../components/ui/CTABanner/CTABanner';
import { services } from '../../data/services';
import styles from './Services.module.css';

const Services = () => {
  useDocumentTitle('Services', 'Professional IT services including AMC, networking, cybersecurity, and more.');

  return (
    <div>
      <PageBanner 
        title="Our Services" 
        subtitle="End-to-end IT solutions to optimize, secure, and manage your business operations."
      />

      <Section>
        <Container>
          <SectionHeading 
            title="What We Offer"
            subtitle="Explore our comprehensive range of specialized IT services."
          />
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.iconWrap}>
                  <service.icon />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                  <ul className={styles.list}>
                    {service.points.map((point, i) => (
                      <li key={i} className={styles.listItem}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner 
        title="Looking for a specific solution?"
        subtitle="Contact us to discuss your unique IT requirements."
        buttonText="Talk to an Expert"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;`,

  'src/pages/Services/Services.module.css': `.servicesGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .servicesGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.serviceCard {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-bg-alt);
  border-radius: var(--br-lg);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
}

.serviceCard:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.iconWrap {
  background-color: var(--clr-primary);
  color: var(--clr-accent);
  padding: var(--space-lg);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  padding: var(--space-lg);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.title {
  color: var(--clr-primary);
  font-size: 1.5rem;
  margin-bottom: var(--space-sm);
}

.desc {
  color: var(--clr-text-light);
  margin-bottom: var(--space-md);
}

.list {
  margin-top: auto;
  border-top: 1px solid var(--clr-border);
  padding-top: var(--space-md);
}

.listItem {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--clr-text-main);
  font-size: 0.95rem;
}

.listItem::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--clr-accent);
  font-weight: bold;
}`,

  'src/pages/Products/Products.jsx': `import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import CTABanner from '../../components/ui/CTABanner/CTABanner';
import { productCategories } from '../../data/products';
import styles from './Products.module.css';

const Products = () => {
  useDocumentTitle('Products', 'Premium hardware and networking equipment sales.');
  const navigate = useNavigate();

  return (
    <div>
      <PageBanner 
        title="Hardware Solutions" 
        subtitle="Equip your workspace with reliable, brand-name hardware and accessories."
      />

      <Section>
        <Container>
          <div className={styles.intro}>
            <p>We supply a vast range of IT hardware catering to both small offices and large enterprises. Skip the hassle of incompatible equipment—let our experts recommend and source exactly what you need.</p>
          </div>
          <div className={styles.grid}>
            {productCategories.map(cat => (
              <Card 
                key={cat.id}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
              >
                <div className={styles.cardBottom}>
                  <p className={styles.examples}><strong>Top items:</strong> {cat.examples}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(\`/contact?interest=\${cat.id}\`)}
                    className={styles.btn}
                  >
                    Enquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner 
        title="Need a custom quote?"
        subtitle="Let us know your requirements and we will send you a competitive quote."
        buttonText="Request Quote"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Products;`,

  'src/pages/Products/Products.module.css': `.intro {
  max-width: 800px;
  margin: 0 auto var(--space-xl);
  text-align: center;
  font-size: 1.1rem;
  color: var(--clr-text-light);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.cardBottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.examples {
  background-color: var(--clr-bg-alt);
  padding: var(--space-sm);
  border-radius: var(--br-sm);
  font-size: 0.85rem;
  margin-bottom: var(--space-md);
  color: var(--clr-text-muted);
}

.examples strong {
  color: var(--clr-primary);
}

.btn {
  width: 100%;
}`,

  'src/pages/Contact/Contact.jsx': `import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import FormInput from '../../components/ui/FormInput/FormInput';
import Button from '../../components/ui/Button/Button';
import { siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import { productCategories } from '../../data/products';
import styles from './Contact.module.css';

const Contact = () => {
  useDocumentTitle('Contact Us', 'Get in touch with Elvate for all your IT needs.');
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', interest: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill "interest" from URL query params (e.g. from Products page)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interestParam = params.get('interest');
    if (interestParam) {
      setFormData(prev => ({ ...prev, interest: interestParam }));
    }
  }, [location]);

  // Build options for dropdown combining services and products
  const interestOptions = [
    ...services.map(s => ({ value: s.id, label: \`Service - \${s.title}\` })),
    ...productCategories.map(p => ({ value: p.id, label: \`Product - \${p.title}\` }))
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // TODO: Connect to backend or email service like Formspree/EmailJS here
      console.log('Form data ready to send:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
    }
  };

  return (
    <div>
      <PageBanner 
        title="Contact Us" 
        subtitle="Have a question or need a quote? We're here to help."
      />

      <Section>
        <Container>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.infoCol}>
              <h2 className={styles.heading}>Get In Touch</h2>
              <p className={styles.desc}>
                Reach out to us via phone, email, or by filling out the form. Our team will get back to you promptly.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <h4>Office Address</h4>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaPhoneAlt className={styles.icon} />
                  <div>
                    <h4>Phone Number</h4>
                    <p>{siteConfig.phone}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaEnvelope className={styles.icon} />
                  <div>
                    <h4>Email Address</h4>
                    <p>{siteConfig.email}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={styles.icon} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>{siteConfig.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send us a Message</h3>
                {submitted ? (
                  <div className={styles.successMsg}>
                    Thank you! Your message has been sent successfully. We will contact you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                      <FormInput label="Full Name *" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                      <FormInput label="Email Address *" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
                    </div>
                    <div className={styles.formRow}>
                      <FormInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                      <FormInput label="Company Name" name="company" value={formData.company} onChange={handleChange} />
                    </div>
                    <FormInput 
                      label="I am interested in..." 
                      type="select" 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleChange}
                      options={interestOptions}
                    />
                    <FormInput 
                      label="Your Message *" 
                      type="textarea" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      error={errors.message} 
                    />
                    <Button type="submit" variant="primary" style={{ width: '100%' }}>Send Message</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        {/* Placeholder for Google Maps iframe */}
        <div className={styles.mapPlaceholder}>
          <p>Interactive Map Here</p>
          <small>(Connect Google Maps iframe in code)</small>
        </div>
      </section>
    </div>
  );
};

export default Contact;`,

  'src/pages/Contact/Contact.module.css': `.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 992px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

.heading {
  font-size: var(--fs-h2);
  color: var(--clr-primary);
  margin-bottom: var(--space-sm);
}

.desc {
  color: var(--clr-text-light);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

.infoList {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.infoItem {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
}

.icon {
  font-size: 1.5rem;
  color: var(--clr-accent);
  margin-top: 4px;
}

.infoItem h4 {
  color: var(--clr-primary);
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.infoItem p {
  color: var(--clr-text-light);
}

.formCard {
  background-color: var(--clr-bg-main);
  padding: var(--space-lg);
  border-radius: var(--br-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--clr-border);
}

@media (min-width: 768px) {
  .formCard {
    padding: var(--space-xl);
  }
}

.formTitle {
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
  color: var(--clr-primary);
}

.formRow {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

@media (min-width: 600px) {
  .formRow {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }
}

.successMsg {
  background-color: #d1fae5;
  color: #065f46;
  padding: var(--space-md);
  border-radius: var(--br-md);
  border: 1px solid #10b981;
  text-align: center;
  font-weight: 500;
}

.mapSection {
  height: 400px;
  width: 100%;
  background-color: var(--clr-bg-alt);
}

.mapPlaceholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--clr-text-muted);
  font-size: 1.5rem;
  border-top: 1px solid var(--clr-border);
}`,

  'src/pages/NotFound/NotFound.jsx': `import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  useDocumentTitle('404 Not Found');

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.desc}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/" variant="primary">Return to Homepage</Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;`,

  'src/pages/NotFound/NotFound.module.css': `.wrapper {
  min-height: calc(100vh - 80px); /* fallback if not fully covering */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xxl) 0;
  background-color: var(--clr-bg-main);
  text-align: center;
}

.content {
  max-width: 600px;
  margin: 0 auto;
}

.errorCode {
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 700;
  color: var(--clr-primary);
  line-height: 1;
  margin-bottom: var(--space-sm);
  text-shadow: 4px 4px 0 var(--clr-accent);
}

.title {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-md);
  color: var(--clr-text-main);
}

.desc {
  color: var(--clr-text-light);
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}`

};

const writeFiles = () => {
  for (const [filename, content] of Object.entries(files)) {
    const fullPath = path.join(process.cwd(), filename);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content);
    console.log(\`Written \${filename}\`);
  }
};

writeFiles();
