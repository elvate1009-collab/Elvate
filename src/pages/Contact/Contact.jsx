import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import Button from '../../components/ui/Button/Button';
import { siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import { productCategories } from '../../data/products';
import styles from './Contact.module.css';

const Contact = () => {
  useDocumentTitle('Contact Us', 'Get in touch with Elvate for all your IT needs.');
  const location = useLocation();
  const [interestText, setInterestText] = useState('');

  // Pre-fill "interest" from URL query params (e.g. from Products page)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interestParam = params.get('interest');
    if (interestParam) {
      const service = services.find(s => s.id === interestParam);
      const product = productCategories.find(p => p.id === interestParam);
      if (service) setInterestText(`I am interested in the ${service.title} service.`);
      else if (product) setInterestText(`I am interested in your ${product.title} products.`);
    }
  }, [location]);

  const whatsappMessage = interestText ? `Hi Elvate, ${interestText}` : 'Hi Elvate, I would like to inquire about your services.';
  const whatsappUrl = `${siteConfig.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`;

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
                Reach out to us via phone, email, or drop us a message on WhatsApp. Our team will get back to you promptly.
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

            {/* WhatsApp CTA */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send us a Message</h3>
                <p style={{ color: 'var(--clr-text-light)', marginBottom: 'var(--space-md)' }}>
                  For the fastest response, please reach out to us directly on WhatsApp. We are ready to assist you with all your IT and hardware needs!
                </p>
                <Button href={whatsappUrl} variant="primary" style={{ width: '100%', display: 'flex', gap: '10px' }} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;