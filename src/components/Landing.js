import React from 'react';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__text'>
        <div className='landing__text--child1'>
          Hello, I'm <span className='landing__name'>Chris Liew.</span>
          <br />A full stack developer.
        </div>
        <div className='landing__text--child2'>
          <button className='landing__button'>
            View My Work
            <i className='far fa-arrow-alt-circle-right' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
