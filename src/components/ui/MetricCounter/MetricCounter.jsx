import React from 'react';
import styles from './MetricCounter.module.css';

const MetricCounter = ({ label, value }) => {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MetricCounter;
