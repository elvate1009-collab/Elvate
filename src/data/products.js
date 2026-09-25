import { FaLaptop, FaServer, FaNetworkWired, FaPrint, FaBatteryFull, FaVideo } from 'react-icons/fa';

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
];