import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import SightingContainer from './components/SightingContainer'


class App extends Component {

  state = {
    userData: [],
    sightings: [],
  }

  addSighting = (sighting) => {
    this.setState({sightings: [sighting, ...this.state.sightings]})
  }

  componentDidMount() {
    // fetch from local API bfgt-backend
    fetch('http://localhost:3000//api/v1/users')
      .then(response => response.json())
      .then(userData => this.setState({ userData: userData }))

    fetch('http://localhost:3000//api/v1/sightings')
      .then(response => response.json())
      .then(sightings => this.setState({ sightings: sightings }));
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <h1>Big Foot Finder</h1>
        <SightingContainer sightings={this.state.sightings} handleSubmit={this.handleSubmit} addSighting={this.addSighting}/>
      </div>
    );
  }
}

export default App;
