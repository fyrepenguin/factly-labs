/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { FaHome, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [bg, setBg] = useState('transparent');
  const [width, setWidth] = useState(0);

  /**
   * Updates width when resized for responsiveness of menu item
   */
  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width >= 1024) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  let listener = null;
  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      const backgroundColor = window.scrollY < 100 ? 'transparent' : 'white';
      setBg(backgroundColor);
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };
  const products = [
    { name: 'Factly Stories', link: 'https://factly.in' },
    { name: 'Factly Videos', link: 'https://videos.factly.in' },
    { name: 'Counting India', link: 'https://countingindia.com' },
  ];
  const linkStyle = {
    px: [
      (theme) => `${theme.space.spacing3}`,
      null,
      null,
      null,
      (theme) => `${theme.space.spacing5}`,
    ],
    display: 'block',
    py: (theme) => `${theme.space.spacing3}`,
    textTransform: 'uppercase',
    fontWeight: 'semibold',
    fontSize: [(theme) => `${theme.fontSizes.h8}`],
    '&:focus': { outline: 'none' },
  };
  return (
    <React.Fragment>
      <div
        sx={{
          position: 'fixed',
          zIndex: '9999',
          top: 0,
          left: 0,
          right: 0,
          transition: 'all 0.3',
          bg, //(theme) => `${theme.colors.bgLight}`,
          borderBottomWidth: '1px',
        }}
      >
        <nav
          sx={{
            position: 'sticky',
            display: 'flex',
            maxWidth: '1560px',
            minHeight: '60px',
            mx: 'auto',
            flexWrap: ['wrap', null, null],
            alignItems: 'center',
            justifyContent: ['space-between', null, null, 'flex-start'],
            px: (theme) => `${theme.space.spacing5}`,
            py: (theme) => `${theme.space.spacing3}`,

            '& a:hover': {
              color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
            },
          }}
        >
          <Link
            to="/"
            sx={{
              position: ['relative', null, null, 'absolute'],
              // transform: ['none', null, null, 'translate(-50%,-50%)'],
              // top: [null, null, null, '50%'],
              left: [null, null, null, '32px'],
              zIndex: 999,
            }}
          >
            <img
              sx={{
                maxHeight: (theme) => [theme.sizes[12], null, null, theme.sizes[16]],
                height: 8,
                width: '150px',
              }}
              src="/logo.svg"
              alt="factly"
            />
          </Link>
          <button
            type="button"
            sx={{ display: [null, null, null, 'none'], border: 'none', background: 'transparent' }}
            onClick={() => handleClick()}
          >
            <FaBars />
          </button>
          <div
            sx={{
              display: showMenu ? 'flex' : 'none',
              zIndex: 998,
              position: 'relative',
              flexDirection: ['column', null, null, 'row'],
              flexGrow: 1,
              alignItems: 'center',
              flexBasis: '100%',
              justifyContent: 'flex-end',
              overflow: 'hidden',
            }}
          >
            <Link to="/products" sx={linkStyle}>
              Products
            </Link>
            {/* <Link to="/blog" sx={linkStyle}>
              Blog
            </Link> */}
            <Link to="/about" sx={linkStyle}>
              About
            </Link>
            {null && (
              <div
                className="dropdown"
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  p: (theme) => [theme.space.spacing2, null, null, theme.space.spacing5],
                  textTransform: 'uppercase',
                  fontWeight: 'semibold',
                  color: 'inherit',
                  '&:hover ul': { display: 'block' },
                }}
              >
                More from Us
                <ul
                  className="dropdown-content"
                  sx={{
                    display: 'none',
                    position: 'absolute',
                    top: ['1rem', null, '2.25rem'],
                    right: 0,
                    padding: '0.75rem 1rem',
                    zIndex: 1,
                    listStyleType: 'none',
                    bg: '#f9f9f9',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                  }}
                >
                  {products.map((item, i) => (
                    <li key={i} sx={{ textAlign: 'center' }}>
                      <a
                        sx={{
                          padding: '1rem',
                          display: 'inline-block',
                          color: 'inherit',
                          '&:hover': {
                            background: '#fff',
                            color: (theme) => theme.colors.textLinkPrimary,
                          },
                        }}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
