/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import degaImg from '../../../static/deega.svg';
import mandeImg from '../../../static/mande.svg';
import kavachImg from '../../../static/kavach.svg';
import vidCheckImg from '../../../static/vidcheck.svg';
import parlensImg from '../../../static/parlens.svg';
import binduImg from '../../../static/bindu.svg';
import { Link } from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
  const linkStyle = {
    display: 'inline-block',
    '--bg-opacity': '1',
    '--text-opacity': '1',
    '--border-opacity': '1',
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
  };
  const products = [
    {
      title: 'Dega',
      slug: '/dega',
      description: `Dega is a lightweight, scalable & high performant open-source publishing platform for
    small and medium scale news media organizations. The platform has various features
    built-in for fact-checking organizations. Dega supports managing multiple organizations
    and sites from the same portal. It is developed for modern web features with all the
    publishing best practices built-in. The tool is written in Go & React.`,
      img: degaImg,
      status: 'Incubating',
    },
    {
      title: 'Kavach',
      slug: '/',
      description: ` Kavach is an open-source identity and access management solution. It is a lightweight
      solution with features to manage organizations, users, permissions and can be
      configured easily to support applications required multitenancy. Kavach is written in
      Go, React and is built on ORY stack of services.`,
      img: kavachImg,
      status: 'Incubating',
    },
    {
      title: 'MandE',
      slug: '/',
      description: `MandE is an open-source application to develop data portals to publish datasets in
      various formats. It provides features to publish private datasets and has e-commerce
      features specific to datasets. Datasets will be available for access as APIs and can
      be integrated with visualization platforms. MandE is written in Go for the backend and
      React for the frontend.`,
      img: mandeImg,
      status: 'Incubating',
    },

    {
      title: 'VidCheck',
      slug: '/vidcheck',
      description: ` VidCheck is a web application that makes video fact-checking more standardized for
      fact-checkers, easy to read and understand for audiences, and scalable for platforms &
      fact-checkers. The application can be used in cases where claims being fact-checked
      are part of the video such as political speeches, news content, documentaries, any
      other type of commentary, manipulated content etc. VidCheck is written in Go & React`,
      img: vidCheckImg,
      status: 'Incubating',
    },
    {
      title: 'Parlens',
      slug: '/',
      description: `Parlens is a tool for searching data that is indexed from Indian parliament datasets.`,
      img: parlensImg,
      status: 'Sandbox',
    },
    {
      title: 'Bindu',
      slug: '/',
      description: `Bindu is a modern open-source Data visualization platform built on Vega, Vega-Lite. It provides the ability for analysts to create charts and dashboards from a rich set of chart templates. The access policies can be set at the chart level, providing ability to share it with a set of users or publish it for the general public. The backend for Bindu is written in Go and the frontend in React.`,
      img: binduImg,
      status: 'Sandbox',
    },
    // counting india graduated
  ];
  return (
    <section sx={{ padding: '3rem', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 sx={{ fontSize: '2rem' }}>
        Products
        <div className="divider"></div>
      </h2>
      <p sx={{ marginBottom: '2rem', fontSize: '1.25rem', letterSpacing: 1.15 }}>
        The philosophy of Factly’s technology is to democratize tools around data and journalism. We
        aim to reduce the barrier for entry for news media organizations to pursue fact-checking,
        data journalism.
      </p>
      {/* <a href="/products" sx={linkStyle}>
        Learn More
      </a> */}
      {/* {products.map((product) => {
        return (
          <div class="card">
            <div>
              <img src={product.img} alt={product.title} />
            </div>
            <div class="card-content">
              <div>
                <h3>{product.title}</h3>
                <hr sx={{ marginBottom: '1rem' }} />
              </div>

              <p sx={{ marginBottom: '1rem' }}>{product.description}</p>
              <a href={product.link} sx={linkStyle}>
                Explore {product.title}
              </a>
            </div>
          </div>
        );
      })} */}
      {products.map((product) => {
        return (
          <div className="card">
            <Link to={`${product.slug}`}>
              <div>
                <img className="max-w-xs" src={product.img} alt="" />
              </div>
            </Link>
            <Link to={`${product.slug}`}>
              <div className="card-content">
                <h3>{product.title}</h3>
                <hr className="border-2 border-black" />
                <p style={{}}>{product.description}</p>{' '}
                <div
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#FBB300',
                    mt: '1rem',
                  }}
                >
                  <p sx={{ '& span': { fontWeight: 'bold' } }}>
                    Maturity: <span>{product.status}</span>
                  </p>{' '}
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
