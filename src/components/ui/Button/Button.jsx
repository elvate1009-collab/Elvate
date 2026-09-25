import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', to, href, className = '', ...props }) => {
  const btnClass = [styles.btn, styles[variant], className].join(' ').trim();

  if (to) {
    return <Link to={to} className={btnClass} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={btnClass} {...props}>{children}</a>;
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;