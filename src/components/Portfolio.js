import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <h1 className='portfolio__header'>
          <div>
            <img src='/images/about.png' alt='portfolio' /> Portfolio
          </div>
        </h1>
      </div>
    );
  }
}

export default Portfolio;
