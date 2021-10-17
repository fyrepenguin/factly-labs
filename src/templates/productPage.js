/** @jsx jsx */
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Home/Header';
import { jsx } from 'theme-ui';

const ProductPageTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  console.log({ product });
  return (
    <Layout>
      <Header
        title={product.header.title}
        description={product.header.description}
        img={`/${product.header.image}`}
        bg={product.header.bg}
      />
      {product.items.map((item, idx) => {
        return (
          <section
            key={idx}
            className="productPageCard"
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr', null, '1fr 1fr'],
              padding: ['2rem', null, null, '3rem'],
              maxWidth: ' 1280px',
              margin: '0 auto',
              alignItems: 'center',
              gap: '1rem',
              minHeight: '400px',
            }}
          >
            <div>
              <img
                src={`/${item.image}`}
                alt=""
                sx={{ maxWidth: '20rem', mx: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <h3 sx={{ fontSize: '2rem' }}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default ProductPageTemplate;

// TODO: Products
