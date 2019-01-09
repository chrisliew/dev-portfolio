import React, { Component } from 'react';
import './App.scss';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__text'>Chris Liew Portfolio</div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <br />
        sup!!
      </div>
    );
  }
}

export default App;
