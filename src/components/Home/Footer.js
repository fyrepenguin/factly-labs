/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Footer = () => {
  return (
    <footer>
      <div
        sx={{
          display: 'flex',
          fontSize: '0.75rem',
          textAlign: 'right',
          bg: '#101010',
          color: '#8d8e92',
          p: '.5rem',
          pt: '.75rem',
          justifyContent: 'flex-end',
        }}
      >
        © 2014-2021 Factly Media &amp; Research
        {/* | Except for videos, content on this site is
        licensed under a{' '} */}
        {/* <a
          rel="license"
          href="https://creativecommons.org/licenses/by/4.0/"
          sx={{ display: 'inline-block' }}
        >
          Creative Commons Attribution 4.0 International License
        </a>
        .
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by/4.0/"
          sx={{ display: 'inline-block' }}
        >
          <img
            alt="Creative Commons License"
            src="https://licensebuttons.net/l/by/4.0/88x31.png"
            sx={{ display: 'inline-block' }}
            className="no-display appear"
          />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
