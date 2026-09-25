import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon: Icon, title, description, children, className = '' }) => {
  return (
    <div className={(styles.card + ' ' + className).trim()}>
      {Icon && <div className={styles.iconWrapper}><Icon className={styles.icon} /></div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
};

export default Card;