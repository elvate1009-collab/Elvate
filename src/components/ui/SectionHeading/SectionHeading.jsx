import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ eyebrow, title, subtitle, alignment = 'center' }) => {
  const alignClass = styles[alignment] || styles.center;
  
  return (
    <div className={(styles.wrapper + ' ' + alignClass).trim()}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;