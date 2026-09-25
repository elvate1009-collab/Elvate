import React from 'react';
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
              <span className={styles.logoDot}>.in</span>
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
                  <Link to={'/services'}>{service.title}</Link>
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

export default Footer;