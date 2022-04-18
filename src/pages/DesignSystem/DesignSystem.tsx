import React from 'react';
import NumberedTitle from '../../components/NumberedTitle/NumberedTitle';

function DesignSystem() {
  return (
    <div className="container flow">
      <h1 className="uppercase">Design System</h1>
      <section id="colors" style={{ margin: '4rem 0' }}>
        <NumberedTitle number="01" title="Colors" />
        <div className="flex">
          <div className="flow" style={{ flexGrow: '1' }}>
            <div
              className="bg-dark text-white"
              style={{
                padding: '3em 1em 1em',
                border: '1px solid white',
              }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span>
              11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span>
              230°, 35%, 7%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: '1' }}>
            <div
              className="bg-accent text-dark"
              style={{
                padding: '3em 1em 1em',
                border: '1px solid white',
              }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-accent">RGB</span>
              208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span>
              231°, 77%, 90%
            </p>
          </div>
          <div className="flow" style={{ flexGrow: '1' }}>
            <div
              className="bg-white text-dark"
              style={{
                padding: '3em 1em 1em',
                border: '1px solid white',
              }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span>
              255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span>
              0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>
      <section id="typography">
        <NumberedTitle number="02" title="Typography" />
        <div className="flex">
          <div
            className="flow"
            style={{ flexBasis: '100%', ['--flow-space' as any]: '4rem' }}
          >
            <div>
              <p className="text-accent">
                Heading 1 - Bellafair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">VENUS</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                SO, YOU WANT TO TRAVEL TO SPACE
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystem;
