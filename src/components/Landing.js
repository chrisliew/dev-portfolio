import React, { Component } from 'react';

class Landing extends Component {
  handleOnClick = () => {
    document
      .getElementById('about')
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  render() {
    return (
      <div id='landing' className='landing'>
        <div className='landing__text'>
          <div className='landing__text--child1'>
            Hello, I'm <span className='landing__name'>Chris Liew.</span>
            <br />
            I'm a full stack developer.
          </div>
          <div className='landing__text--child2'>
            <button className='landing__button' onClick={this.handleOnClick}>
              View My Work
              <i className='far fa-arrow-alt-circle-right' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
