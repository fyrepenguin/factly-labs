/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Values = () => {
  return (
    <section sx={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem' }}>
      <h2 sx={{ fontSize: '2rem' }}>
        Our Values
        <div className="divider"></div>
      </h2>

      <p style={{ marginBottom: '2rem', fontSize: '1.25rem', letterSpacing: 1.15 }}>
        Factly Labs strives on developing and managing various applications that will increase
        access to public data and information by making it easy, interactive and intuitive.
      </p>
      <p style={{ marginBottom: '2rem', fontSize: '1.25rem', letterSpacing: 1.15 }}>
        Factly Labs will strive to democratize journalism technology.
      </p>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, '1fr 1fr'],
          gap: '1rem',

          '& div': {
            padding: '2rem',
            boxShadow: `rgba(17, 17, 26, 0.1) 0px 4px 16px,rgba(17, 17, 26, 0.05) 0px 8px 32px`,
          },
          '& h3': {
            marginBottom: '1rem',
          },
        }}
      >
        <div>
          <h3>Transparency</h3>
          <p>
            Whether we're developing software or solving a business problem, we all have access to
            the information and materials necessary for doing our best work. And when these
            materials are accessible, we can build upon each other's ideas and discoveries. We can
            make more effective decisions and understand how decisions affect us.
          </p>
          {/* <a href="#">More</a> */}
        </div>
        <div>
          <h3>Collaboration</h3>
          <p>
            When we're free to participate, we can enhance each other's work in unanticipated ways.
            When we can modify what others have shared, we unlock new possibilities. By initiating
            new projects together, we can solve problems that no one can solve alone. And when we
            implement open standards, we enable others to contribute in the future.
          </p>
          {/* <a href="#"></a> */}
        </div>

        <div>
          <h3>Inclusive meritocracy</h3>
          <p>
            Good ideas can come from anywhere, and the best ideas should win. Only by including
            diverse perspectives in our conversations can we be certain we've identified the best
            ideas, and decision-makers continually seek those perspectives. We may not operate by
            consensus, but successful work determines which projects gather support and effort from
            the community.
          </p>
          {/* <a href="#"></a> */}
        </div>

        <div>
          <h3>Community</h3>
          <p>
            Communities form when different people unite around a common purpose. Shared values
            guide decision making, and community goals supersede individual interests and agendas.
          </p>
          {/* <a href="#"></a> */}
        </div>
      </div>
    </section>
  );
};

export default Values;
