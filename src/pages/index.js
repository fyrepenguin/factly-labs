import * as React from 'react';
import Contact from '../components/Home/Contact';
import Header from '../components/Home/Header';
import Partners from '../components/Home/Partners';
import Products from '../components/Home/Products';
import Values from '../components/Home/Values';
import heroImg from '../../static/hero.svg';
import '../styles/main.css';
import Layout from '../components/Layout';
const IndexPage = () => {
  return (
    <Layout>
      <Header
        title="Making Data Meaningful"
        description="Embracing data, technology and journalism to increase public awareness and empower them
            to make right decisions."
        img={heroImg}
        bg="#fbcfbd"
      />
      <Partners />

      <Values />
      <Products />
      {/* <Contact /> */}
    </Layout>
  );
};

export default IndexPage;
