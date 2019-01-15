import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: 'navbar__selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    };
  }

  handleOnClickAbout = event => {
    this.setState({
      about: 'navbar__selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    });
    document
      .getElementById('about')
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  handleOnClickPortfolio = event => {
    this.setState({
      about: 'navbar__not-selected',
      portfolio: 'navbar__selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    });
    document
      .getElementById('portfolio')
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  handleOnClickResume = event => {
    this.setState({
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__selected',
      contact: 'navbar__not-selected'
    });
  };

  handleOnClickContact = event => {
    this.setState({
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__selected'
    });
    document
      .getElementById('contact')
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  render() {
    return (
      <div className='navbar'>
        <div
          className={this.state.about}
          onClick={this.handleOnClickAbout}
          name='about'
          value='about'
        >
          <span className='text'>About</span>
          <span className='icon'>
            <img className='icon' src='/images/about.png' alt='about' />
            <div>About</div>
          </span>
        </div>
        <div
          className={this.state.portfolio}
          onClick={this.handleOnClickPortfolio}
          name='portfolio'
          value='portfolio'
        >
          <span className='text'>Portfolio</span>
          <span className='icon'>
            <img className='icon' src='/images/portfolio.png' alt='portfolio' />
            <div>Portfolio</div>
          </span>
        </div>
        <div
          className={this.state.resume}
          onClick={this.handleOnClickResume}
          name='resume'
          value='resume'
        >
          <a
            className='resume-link'
            href='https://resume.creddle.io/resume/6j6fnjds5c7'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text'>Resumé</span>
            <span className='icon'>
              <img className='icon' src='/images/resume.png' alt='resume' />
              <div>Resumé</div>
            </span>
          </a>
        </div>
        <div
          className={this.state.contact}
          onClick={this.handleOnClickContact}
          name='contact'
          value='contact'
        >
          <span className='text'>Contact</span>
          <span className='icon'>
            <img className='icon' src='/images/contact.png' alt='contact' />
            <div>Contact</div>
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
