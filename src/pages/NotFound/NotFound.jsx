import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Container from '../../components/ui/Container/Container';
import Button from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  useDocumentTitle('404 Not Found');

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.desc}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/" variant="primary">Return to Homepage</Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;