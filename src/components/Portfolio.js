import React, { Component } from 'react';

export const projects = [
  {
    title: 'Healthii',
    image: '/images/healthii.png',
    site: false,
    text: (
      <p>
        Healthii is a platform that connects health care providers with clients
        who need those services. You can login as either a client or as a
        provider, each with it's own seperate functionality.
        <br />
        <br />
        <b>My Role:</b> Participated in all aspects of the project, by designing
        most of the front end and some of the back end routes.
        <br />
        <br />
        <b>Tech Stack:</b> The front end was built using Javascript with
        ReactJS. Node and Express JS was used for the server. PostgresSQL
        database was used with Knex as the interface. There is a SMS sending
        feature using the Twilio API.
        <br />
        <br />
      </p>
    )
  },
  {
    title: 'Wash Royal',
    image: '/images/Chatty.png',
    site: true,
    text: (
      <p>
        Washroyal is a platform that connects health care providers with clients
        who need those services. You can login as either a client or as a
        provider, each with it's own seperate functionality.
        <br />
        <br />
        <b>My Role:</b> Participated in all aspects of the project, by designing
        most of the front end and some of the back end routes.
        <br />
        <br />
        <b>Tech Stack:</b> The front end was built using Javascript with
        ReactJS. Node and Express JS was used for the server. PostgresSQL
        database was used with Knex as the interface. There is a SMS sending
        feature using the Twilio API.
        <br />
        <br />
      </p>
    )
  },
  {
    title: 'Fitness Trainer Gains',
    image: '/images/healthii.png',
    site: true,
    text: (
      <p>
        Fitness Trainer Gains is a platform that connects health care providers
        with clients who need those services. You can login as either a client
        or as a provider, each with it's own seperate functionality.
        <br />
        <br />
        <b>My Role:</b> Participated in all aspects of the project, by designing
        most of the front end and some of the back end routes.
        <br />
        <br />
        <b>Tech Stack:</b> The front end was built using Javascript with
        ReactJS. Node and Express JS was used for the server. PostgresSQL
        database was used with Knex as the interface. There is a SMS sending
        feature using the Twilio API.
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
            <button className='button'>
              <img
                className='github__logo'
                src='/images/github-logo.png'
                alt='github-logo'
              />
              Github
            </button>
            {projects[selected].site ? (
              <button className='button'>Site</button>
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
    console.log(this.state);
    const listProjects = (
      <div id='project__selected' className='projects__list'>
        <img
          className={this.state.activeClass1}
          onClick={() => this.handleOnClickImage(0, projects[0].image)}
          src={projects[0].image}
          alt={projects[0].image}
        />
        <img
          className={this.state.activeClass2}
          onClick={() => this.handleOnClickImage(1, projects[1].image)}
          src={projects[1].image}
          alt={projects[1].image}
        />
        <img
          className={this.state.activeClass3}
          onClick={() => this.handleOnClickImage(2, projects[2].image)}
          src={projects[2].image}
          alt={projects[2].image}
        />
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
