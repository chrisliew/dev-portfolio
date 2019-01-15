import React, { Component } from 'react';

export const projects = [
  {
    title: 'Wash Royal',
    image: '/images/wash-royal.png',
    site: true,
    url: 'https://washroyal.herokuapp.com/',
    github: 'https://github.com/chrisliew/wash-royal',
    text: (
      <p>
        Wash Royal automates laundry pickup and delivery in the city of Da Nang,
        Vietnam. You can login using Google Oauth and arrange a time for laundry
        pickup and delivery, and send a payment through the Stripe API.
        <br />
        <br />
        <u>
          <b>Tech Stack:</b>
        </u>{' '}
        <br />
        <b>Front End: </b>Javascript, ReactJS. <br />
        <b>Back End: </b>Node and Express JS for the server and MongoDB for the
        database.
        <br />
        <b>Libraries/Frameworks:</b> Passport.js, Nodemailer, Moment.js,
        Bootstrap <br />
        <b>APIs:</b> Stripe, Google Oauth.
        <br />
        <br />
      </p>
    )
  },
  {
    title: 'Healthii',
    image: '/images/healthii.png',
    site: false,
    url: '',
    github: 'https://github.com/chrisliew/healthii',
    text: (
      <p>
        Healthii connects health care providers with customers. You can login as
        both a client and a provider, each with it's own seperate UX and
        reporting tools. There's an SMS function using Twilio.
        <br />
        <br />
        <u>
          <b>Tech Stack:</b>
        </u>{' '}
        <br />
        <b>Front End: </b>Javascript, ReactJS. <br />
        <b>Back End: </b>Node and Express JS for the server. PostGresSQL and
        Knex for the database.
        <br />
        <b>Libraries/Frameworks:</b> Passport.js, Nodemailer, Moment.js,
        Bootstrap <br />
        <b>APIs:</b> Twilio.
        <br />
        <br />
      </p>
    )
  },
  {
    title: 'Chatty',
    image: '/images/Chatty.png',
    site: false,
    url: '',
    github: 'https://github.com/chrisliew/chatty',
    text: (
      <p>
        Chatty App is a real time instant messenger app that allows multiple
        users to login to a chatroom and share pictures and texts.
        <br />
        <br />
        <u>
          <b>Tech Stack:</b>
        </u>{' '}
        <br />
        <b>Front End: </b>Javascript, ReactJS. <br />
        <b>Back End: </b>Node, Websockets, and Express JS for the server.
        <br />
        <br />
      </p>
    )
  }
];

class ProjectInfo extends Component {
  render() {
    const selected = this.props.selected;
    return (
      <div>
        <div className='portfolio__selected--info'>
          <h1 className='header'>{projects[selected].title}</h1>
          <div className='buttons'>
            <a
              href={projects[selected].github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='button'>
                <img
                  className='github__logo'
                  src='/images/github-logo.png'
                  alt='github-logo'
                />
                Github
              </button>
            </a>
            {projects[selected].site ? (
              <a
                href={projects[selected].url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='button'>Site</button>
              </a>
            ) : (
              ''
            )}
          </div>
          <div className='text'>{projects[selected].text}</div>
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      mainImage: projects[0].image,
      activeClass1: 'active',
      activeClass2: 'not-active',
      activeClass3: 'not-active'
    };
  }

  handleOnClickImage = (index, image) => {
    const activeClass = 'activeClass' + (index + 1);
    this.setState({
      selected: index,
      mainImage: image,
      activeClass1: activeClass === 'activeClass1' ? 'active' : 'not-active',
      activeClass2: activeClass === 'activeClass2' ? 'active' : 'not-active',
      activeClass3: activeClass === 'activeClass3' ? 'active' : 'not-active'
    });
    document
      .getElementById('project__selected')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    console.log(this.state.activeClass1);
    const listProjects = (
      <div id='project__selected' className='projects__list'>
        <div className='height-100vh'>
          <img
            className={this.state.activeClass1}
            onClick={() => this.handleOnClickImage(0, projects[0].image)}
            src={projects[0].image}
            alt={projects[0].image}
          />
          {this.state.activeClass1 === 'active' ? (
            <div className='text'>Wash Royal</div>
          ) : (
            ''
          )}
        </div>
        <div className='height-100vh'>
          <img
            className={this.state.activeClass2}
            onClick={() => this.handleOnClickImage(1, projects[1].image)}
            src={projects[1].image}
            alt={projects[1].image}
          />
          {this.state.activeClass2 === 'active' ? (
            <div className='text'>Healthii</div>
          ) : (
            ''
          )}
        </div>
        <div className='height-100vh'>
          <img
            className={this.state.activeClass3}
            onClick={() => this.handleOnClickImage(2, projects[2].image)}
            src={projects[2].image}
            alt={projects[2].image}
          />
          {this.state.activeClass3 === 'active' ? (
            <div className='text'>Chatty</div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
    return (
      <div id='portfolio' className='portfolio'>
        <h1 className='portfolio__header'>
          <div>
            <img src='/images/portfolio.png' alt='portfolio' /> Portfolio
          </div>
        </h1>
        <div className='projects__list'>{listProjects}</div>
        <div className='portfolio__selected'>
          <img className='image' src={this.state.mainImage} alt='mainImage' />
          <ProjectInfo selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
