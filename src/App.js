import React, { Component } from 'react';
import HeaderComp from './header-comp'
import StepOne from './step-one'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComp />
        <StepOne />
      </div>
    );
  }
}

export default App;
