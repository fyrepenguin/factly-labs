/** @jsx jsx */
import React from 'react';
import Footer from './Home/Footer';
import Navbar from './Home/Navbar';
import { jsx } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main sx={{ '& header:first-child': { py: '7.75rem' } }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
