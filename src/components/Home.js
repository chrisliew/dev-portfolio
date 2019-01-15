import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Landing from './Landing';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Landing />
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <div>
                <header style={style} className='sticky'>
                  <Navbar />
                </header>
              </div>
            )}
          </Sticky>
          <About />
          <Portfolio />
          <Contact />
        </StickyContainer>
      </div>
    );
  }
}

export default Home;
