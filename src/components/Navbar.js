import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: 'navbar__selected',
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    };
  }

  handleOnClickHome = event => {
    this.setState({
      home: 'navbar__selected',
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    });
  };

  handleOnClickAbout = event => {
    this.setState({
      home: 'navbar__not-selected',
      about: 'navbar__selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    });
  };

  handleOnClickPortfolio = event => {
    this.setState({
      home: 'navbar__not-selected',
      about: 'navbar__not-selected',
      portfolio: 'navbar__selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__not-selected'
    });
  };

  handleOnClickResume = event => {
    this.setState({
      home: 'navbar__not-selected',
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__selected',
      contact: 'navbar__not-selected'
    });
  };

  handleOnClickContact = event => {
    this.setState({
      home: 'navbar__not-selected',
      about: 'navbar__not-selected',
      portfolio: 'navbar__not-selected',
      resume: 'navbar__not-selected',
      contact: 'navbar__selected'
    });
  };

  render() {
    return (
      <div className='navbar'>
        <div
          className={this.state.home}
          onClick={this.handleOnClickHome}
          name='home'
          value='home'
        >
          Home
        </div>
        <div
          className={this.state.about}
          onClick={this.handleOnClickAbout}
          name='about'
          value='about'
        >
          About
        </div>
        <div
          className={this.state.portfolio}
          onClick={this.handleOnClickPortfolio}
          name='portfolio'
          value='portfolio'
        >
          Portfolio
        </div>
        <div
          className={this.state.resume}
          onClick={this.handleOnClickResume}
          name='resume'
          value='resume'
        >
          Resume
        </div>
        <div
          className={this.state.contact}
          onClick={this.handleOnClickContact}
          name='contact'
          value='contact'
        >
          Contact
        </div>
      </div>
    );
  }
}

export default Navbar;
