import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <header style={style}>
                <Navbar />
              </header>
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

export default App;
