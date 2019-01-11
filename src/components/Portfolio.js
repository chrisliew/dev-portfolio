import React, { Component } from 'react';

class Portfolio extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     project1: 'selected',
  //     project2: 'not-selected',
  //     project3: 'not-selected'
  //   };
  // }

  render() {
    return (
      <div id='portfolio' className='portfolio'>
        <h1 className='portfolio__header'>
          <div>
            <img src='/images/portfolio.png' alt='portfolio' /> Portfolio
          </div>
        </h1>
        <div className='portfolio__preview'>
          <div className='portfolio__preview--card'>
            <button className='button'>Learn More</button>
          </div>
          <div className='portfolio__preview--card'>
            <button className='button'>Learn More</button>
          </div>
          <div className='portfolio__preview--card'>
            <button className='button'>Learn More</button>
          </div>
        </div>
        <div className='portfolio__selected'>
          <img className='image' src='/images/healthii.png' alt='healthii' />
          <div className='portfolio__selected--info'>
            <h1 className='header'>Healthii (Group Project)</h1>
            <div className='buttons'>
              <button className='button'>
                <img
                  className='github__logo'
                  src='/images/github-logo.png'
                  alt='github-logo'
                />
                Github
              </button>
              <button className='button'>Site</button>
            </div>
            <div className='text'>
              <p>
                Healthii is a platform that connects health care providers with
                clients who need those services. You can login as either a
                client or as a provider, each with it's own seperate
                functionality.
                <br />
                <br />
                <b>My Role:</b> Participated in all aspects of the project, by
                designing most of the front end and some of the back end routes.
                <br />
                <br />
                <b>Tech Stack:</b> The front end was built using Javascript with
                ReactJS. Node and Express JS was used for the server.
                PostgresSQL database was used with Knex as the interface. There
                is a SMS sending feature using the Twilio API.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
