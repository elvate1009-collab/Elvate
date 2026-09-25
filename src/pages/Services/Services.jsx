import React from 'react';
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

export default Services;