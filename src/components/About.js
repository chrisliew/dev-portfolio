import React, { Component } from 'react';

const TechSkills = () => {
  return (
    <div className='techskills'>
      <h1>Tech Skills</h1>
      <div className='techskills__languages'>
        <h2>Languages</h2>
        <div className='techskills__languages--content'>
          Javascript
          <br />
          <img src='/images/javascript-icon.png' alt='javascript icon' />
        </div>
        <div className='techskills__languages--content'>
          Ruby
          <br />
          <img src='/images/ruby-icon.png' alt='ruby icon' />
        </div>
        <div className='techskills__languages--content'>
          HTML 5
          <br />
          <img src='/images/html5-icon.png' alt='html5 icon' />
        </div>
        <div className='techskills__languages--content'>
          CSS 3
          <br />
          <img src='/images/css3-icon.png' alt='css3 icon' />
        </div>
        <div className='techskills__languages--content'>
          Python
          <br />
          <img src='/images/python-icon.png' alt='python icon' />
        </div>
      </div>

      <div className='techskills__libraries'>
        <h2>Libraries/Frameworks</h2>
        <div className='techskills__libraries--content'>
          React.js
          <br />
          <img src='/images/react-icon.png' alt='react icon' />
        </div>
        <div className='techskills__libraries--content'>
          Node.js
          <br />
          <img src='/images/node-icon.png' alt='node icon' />
        </div>
        <div className='techskills__libraries--content'>
          Express
          <br />
          <img src='/images/express-icon.png' alt='express icon' />
        </div>
        <div className='techskills__libraries--content'>
          Bootstrap
          <br />
          <img src='/images/bootstrap-icon.png' alt='bootstrap icon' />
        </div>
        <div className='techskills__libraries--content'>
          Moment.js
          <br />
          <img src='/images/moment-icon.png' alt='moment icon' />
        </div>
        <div className='techskills__libraries--content'>
          Jquery
          <br />
          <img src='/images/jquery-icon.png' alt='jquery icon' />
        </div>
        <div className='techskills__libraries--content'>
          NPM
          <br />
          <img src='/images/npm-icon.png' alt='npm icon' />
        </div>
        <div className='techskills__libraries--content'>
          SASS
          <br />
          <img src='/images/sass-icon.png' alt='sass icon' />
        </div>
      </div>

      <div className='techskills__databases'>
        <h2>Databases</h2>
        <div className='techskills__database--content'>
          MongoDB
          <br />
          <img src='/images/mongo-icon.png' alt='mongo icon' />
        </div>
        <div className='techskills__database--content'>
          MySQL
          <br />
          <img src='/images/mysql-icon.png' alt='mysql icon' />
        </div>
        <div className='techskills__database--content'>
          Postgres SQL
          <br />
          <img src='/images/postgres-icon.png' alt='postgres icon' />
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className='description'>
      <div className='description__container'>
        <img className='chris__image' src='/images/chris.jpg' alt='chris' />
        <h1>Who's this guy?</h1>
        <p className='description__paragraph'>
          I'm the Front-End Developer for EyeCue Lab in Portland, OR. I have
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences. Let's make something special.
        </p>
      </div>
    </div>
  );
};

const Hexagon = () => {
  return (
    <div className='hexagon'>
      <div className='hexagon__main'>
        <ul className='flexbox__parent'>
          <div className='hexagon__container'>
            <li>
              <a className='hexagon__link' href='/'>
                <i className='fas fa-fighter-jet' />{' '}
              </a>
            </li>
            <h1 className='hexagon__title'>Fast</h1>
            <div className='hexagon__description'>
              Fast load times and lag free interaction, my highest priority.
            </div>
          </div>
          <div className='hexagon__container'>
            <li>
              <a className='hexagon__link' href='/'>
                <i className='fas fa-mobile-alt' />{' '}
              </a>{' '}
            </li>
            <h1 className='hexagon__title'>Responsive</h1>
            <div className='hexagon__description'>
              My layouts will work on any device, big or small.
            </div>
          </div>
          <div className='hexagon__container'>
            <li>
              <a className='hexagon__link' href='/'>
                <i className='fab fa-linkedin-in' />{' '}
              </a>{' '}
            </li>
            <h1 className='hexagon__title'>Conversion</h1>
            <div className='hexagon__description'>
              Strong preference for writing websites that convert.
            </div>
          </div>
          <div className='hexagon__container'>
            <li>
              <a className='hexagon__link' href='/'>
                <i className='fab fa-linkedin-in' />{' '}
              </a>{' '}
            </li>
            <h1 className='hexagon__title'>Efficient</h1>
            <div className='hexagon__description'>
              Writing clean and efficient code.
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

class About extends Component {
  render() {
    return (
      <div className='about'>
        <h1 className='about__header'>
          <div>
            <img src='/images/about.png' alt='about' /> About
          </div>
        </h1>
        <div>
          <Hexagon />
        </div>
        <div className='about__desc__skills'>
          <Description />
          <TechSkills />
        </div>
      </div>
    );
  }
}

export default About;
