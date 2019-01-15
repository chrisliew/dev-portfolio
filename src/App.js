import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ResumeCL from './components/Resume';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={ResumeCL} />
        </div>
      </Router>
    );
  }
}

export default App;
