/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
const Header = ({ title = '', description = '', img = '', bg = 'transparent' }) => {
  return (
    <header sx={{ bg }}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, 'repeat(2,minmax(0,1fr))'],
          padding: ['2rem', null, null, '3rem'],
          maxWidth: ' 1280px',
          margin: '0 auto',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div>
          <h1
            sx={{
              '--text-opacity': '1',
              color: ['#ea364a', 'rgba(234,54,74,var(--text-opacity))'],
              fontSize: ['2.5rem', null, null, '3rem'],
              marginBottom: '1rem',
            }}
          >
            {title}
          </h1>
          <p sx={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{description}</p>
          <a
            href="#"
            sx={{
              '--bg-opacity': '1',
              '--text-opacity': '1',
              '--border-opacity': '1',
              display: 'inline-block',
              textDecoration: 'none',
              backgroundColor: '#186585',
              padding: '.75rem 1rem',
              marginTop: '.5rem',
              marginBottom: '.5rem',
              color: '#fff',
              textAlign: 'center',
              transitionProperty:
                'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
              transitionDuration: '.3s',
              transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
              minWidth: '150px',
              '&:hover': {
                '--bg-opacity': '1',
                '--text-opacity': '1',
                '--border-opacity': '1',
                borderColor: '#186585',
                borderWidth: '1px',
              },
            }}
          >
            Learn More
          </a>
        </div>
        <div>
          <img src={img} alt="" width="100%" />
        </div>
      </div>
    </header>
  );
};

export default Header;
