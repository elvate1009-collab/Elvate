import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PageBanner from '../../components/ui/PageBanner/PageBanner';
import Container from '../../components/ui/Container/Container';
import Section from '../../components/ui/Section/Section';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import CTABanner from '../../components/ui/CTABanner/CTABanner';
import { productCategories } from '../../data/products';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';
import styles from './Products.module.css';

const Products = () => {
  useDocumentTitle('Products', 'Premium hardware and networking equipment sales.');

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
                    href={buildWhatsAppEnquiryUrl(cat.title, cat.examples.split(', '))}
                    className={styles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
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

export default Products;