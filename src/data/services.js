import { FaNetworkWired, FaServer, FaShieldAlt, FaCloud, FaCamera, FaHeadset } from 'react-icons/fa';

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
];