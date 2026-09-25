import React, { useState, useEffect } from 'react';
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
    <header className={[styles.header, isScrolled ? styles.scrolled : ''].join(' ').trim()}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          {siteConfig.companyName}
          <span className={styles.logoDot}>.in</span>
        </Link>
        
        <nav className={[styles.nav, isOpen ? styles.open : ''].join(' ').trim()}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? [styles.navLink, styles.active].join(' ') : styles.navLink}
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

export default Header;