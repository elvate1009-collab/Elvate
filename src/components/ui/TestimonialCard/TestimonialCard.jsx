import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, company, text }) => {
  return (
    <div className={styles.card}>
      <FaQuoteLeft className={styles.icon} />
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.company}>{company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;