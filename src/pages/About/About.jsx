import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Section from '../../components/ui/Section/Section';
import Container from '../../components/ui/Container/Container';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import CTABanner from '../../components/ui/CTABanner/CTABanner';
import { siteConfig } from '../../data/siteConfig';
import styles from './About.module.css';

const About = () => {
  useDocumentTitle('About Us', 'Learn more about Elvate, our mission, and core values.');

  return (
    <div>
      <PageBanner 
        title="About Elvate" 
        subtitle="Empowering businesses with robust technology solutions."
      />
      
      <Section>
        <Container>
          <div className={styles.grid}>
            <div className={styles.content}>
              <SectionHeading eyebrow="Our Story" title="Who We Are" alignment="left" />
              <p className={styles.text}>
                Founded by <strong>{siteConfig.founder}</strong> on the principle that technology should be an enabler, not a hurdle, Elvate has grown 
                into a trusted partner for businesses across multiple sectors. We bridge the gap between complex 
                IT infrastructure and seamless business operations.
              </p>
              <p className={styles.text}>
                Our team is passionate about delivering tailored solutions. Whether you need a simple hardware upgrade 
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

export default About;