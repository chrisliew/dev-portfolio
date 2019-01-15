import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1 className='contact__header'>
        <div>
          <img src='/images/contact.png' alt='contact' /> Contact
        </div>
      </h1>
      <div className='logos'>
        <div>
          <a
            href='https://github.com/chrisliew?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='logo'
              src='/images/github-logo.png'
              alt='github-logo'
            />
          </a>
          <a
            href='https://github.com/chrisliew?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>
              <b>Github</b>
            </div>
          </a>
        </div>
        <div>
          <a href='mailto:chriswvliew@gmail.com' rel='noopener noreferrer'>
            <img className='logo' src='/images/mail-icon.png' alt='mail icon' />
          </a>
          <a href='mailto:chriswvliew@gmail.com' rel='noopener noreferrer'>
            <div>
              <b>Email</b>
            </div>
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/c-liew/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='logo' src='/images/linked-in.png' alt='LinkedIn' />
          </a>
          <a
            href='https://www.linkedin.com/in/c-liew/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>
              <b>LinkedIn</b>
            </div>
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/c-liew/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='logo' src='/images/resume.png' alt='resume' />
          </a>
          <a
            href='https://resume.creddle.io/resume/6j6fnjds5c7'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>
              <b>Resumé</b>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
