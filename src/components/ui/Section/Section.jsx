import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, variant = 'main', className = '', id }) => {
  return (
    <section id={id} className={[styles.section, styles[variant], className].join(' ').trim()}>
      {children}
    </section>
  );
};

export default Section;