import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, type = 'text', error, options, ...props }) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>
      {type === 'textarea' ? (
        <textarea className={(styles.input + ' ' + (error ? styles.hasError : '')).trim()} {...props} />
      ) : type === 'select' ? (
        <select className={(styles.input + ' ' + (error ? styles.hasError : '')).trim()} {...props}>
          <option value="">Select an option</option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input type={type} className={(styles.input + ' ' + (error ? styles.hasError : '')).trim()} {...props} />
      )}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default FormInput;