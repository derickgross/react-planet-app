import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeView from "./components/WelcomeView/WelcomeView"
import IndexView from "./components/IndexView/IndexView"
import RandomPlanetView from "./components/RandomPlanetView/RandomPlanetView"
import CreatePlanetView from "./components/CreatePlanetView/CreatePlanetView"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: "Welcome" // this will be a string
    }

    this.setCurrentView = this.setCurrentView.bind(this);
  }

  setCurrentView(event) {
    this.setState({
      currentView: event.target.innerHTML
    })
  }

  displayCurrentView() {
    switch (this.state.currentView) {
      case "Welcome":
        return <WelcomeView />
      case "All Planets":
        return <IndexView />
      case "See a Random Planet":
        return <RandomPlanetView />
      case "Create a New Planet":
        return <CreatePlanetView />
      default:
        return <WelcomeView />
    }
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
        {
          this.displayCurrentView()
        }
      </div>
    );
  }
}

export default App;
