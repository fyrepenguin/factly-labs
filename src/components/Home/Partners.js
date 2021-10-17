/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Partners = () => {
  return (
    <section sx={{ bg: '#fafafa', padding: '2rem' }}>
      <h2 sx={{ textAlign: 'center', marginBottom: '2rem' }}>Over 20 partners and supporters</h2>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          bg: 'white',
          p: '1rem',
          '& div': {
            width: 200,
            height: 200,
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //   boxShadow: '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);', //'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
            // bg: 'white',
          },
          '& img': {
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            display: 'block',

            objectFit: 'cover',
            filter: 'grayscale(100%)',
          },
        }}
      >
        <div>
          <img src="/ifcnT.png" alt="" />
        </div>
        <div>
          <img src="/GoTT.png" alt="" />
        </div>
        <div>
          <img src="/InshortsT.png" alt="" />
        </div>
        <div>
          <img src="/ODT.png" alt="" />
        </div>
        <div>
          <img src="/DNIT.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
