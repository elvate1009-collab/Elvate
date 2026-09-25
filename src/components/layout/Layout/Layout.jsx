import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;