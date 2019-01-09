import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Landing from './components/Landing';
import Navbar from './components/Navbar';

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
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
        </StickyContainer>
      </div>
    );
  }
}

export default App;
