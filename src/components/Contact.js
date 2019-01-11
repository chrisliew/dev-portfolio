import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1 className='contact__header'>
        <div>
          <img src='/images/portfolio.png' alt='portfolio' /> Contact
        </div>
      </h1>
      <div className='logos'>
        <div>
          <img
            className='logo'
            src='/images/github-logo.png'
            alt='github-logo'
          />
          <div>chris@chris.chris</div>
        </div>
        <div>
          <img
            className='logo'
            src='/images/github-logo.png'
            alt='github-logo'
          />
          <div>chris@chris.chris</div>
        </div>
        <div>
          <img
            className='logo'
            src='/images/github-logo.png'
            alt='github-logo'
          />
          <div>chris@chris.chris</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
