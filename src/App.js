import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: null // this will be a string
    }
  }

  setCurrentView() {

  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><button type="submit" onClick={this.setCurrentView}>Welcome</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>All Planets</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>See a Random Planet</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>Create a New Planet</button></li>
          </ul>
        </nav>
        <h1>This is my Planet App!</h1>
      </div>
    );
  }
}

export default App;
