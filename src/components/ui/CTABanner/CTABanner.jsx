import React from 'react';
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

export default CTABanner;