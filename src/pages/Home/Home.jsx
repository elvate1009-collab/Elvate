import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import SectionHeading from '../../components/ui/SectionHeading/SectionHeading';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import MetricCounter from '../../components/ui/MetricCounter/MetricCounter';
import TestimonialCard from '../../components/ui/TestimonialCard/TestimonialCard';
import CTABanner from '../../components/ui/CTABanner/CTABanner';

import { services } from '../../data/services';
import { productCategories } from '../../data/products';
import { stats } from '../../data/stats';
import { features } from '../../data/features';
import { testimonials } from '../../data/testimonials';
import { brands } from '../../data/brands';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

import styles from './Home.module.css';

const Home = () => {
  useDocumentTitle('Home', 'Elvate - Premium IT Services & Hardware Solutions');

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
              <MetricCounter key={idx} label={stat.label} value={stat.value} />
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
                    href={buildWhatsAppEnquiryUrl(cat.title, cat.examples.split(', '))}
                    style={{ width: '100%', fontSize: '0.9rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
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

export default Home;