import React from 'react';
import Container from '../Container/Container';
import styles from './PageBanner.module.css';

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </Container>
    </div>
  );
};

export default PageBanner;