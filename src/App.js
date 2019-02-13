import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Route,
  // Link,
  // NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import SightingContainer from './components/SightingContainer'
import Login from './components/Login'
import MapComponent from './components/MapComponent'

class App extends Component {
  state = {
    userData: [],
    sightings: [],
    currentUser: null,
    lat: 39.26061403505392,
    lng: -97.3828125,
    zoom: 4,
    mapBackground: false,
    selectedSightingId: '',
  }

  setMapBackground = () => { //
    this.setState({mapBackground: !this.state.mapBackground})
  }

  loginClick = (username) => {
    fetch('http://localhost:3000//api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: username
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ currentUser: data })
      )
  }

  setCurrentUser = user =>{ //when you create a new user, it sets state to new user
    this.setState({ currentUser: user })
  }

  addSighting = (sighting) => { //takes newly created sightings and sets state with updated data.
    this.setState({ sightings: [sighting, ...this.state.sightings] })
  }

  editedSighting = editedSight => {
    let newSightingList = this.state.sightings.map(sighting => {
      if(editedSight.id === sighting.id){
        //debugger
        editedSight.comments = editedSight.comments.reverse()
        //debugger
        return editedSight
      } else {
        return sighting
      }
    })
    this.setState({ sightings: newSightingList })
  }

  latLngGetter = (e) => {//e.latlng grabs the lat and long of where you click mouse. Sets state to clicked lat/lng
    const lat = e.latlng.lat
    const lng = e.latlng.lng

    this.setState({ lat, lng })
  }

  sightingClick = (sightingId) => { //this should open up modal, sightId is taken from MapComponent, onclick, this will setState to the sightId
    this.setState({
      selectedSightingId: sightingId,
    })
  }

  renderSighting = () => {//return the Sighting object clicked on the map
    return this.state.sightings.find(sighting => sighting.id === this.state.selectedSightingId)
  }

  componentDidMount() {
    // fetch from local API bfgt-backend
    fetch('http://localhost:3000//api/v1/users')
      .then(response => response.json())
      .then(userData => this.setState({ userData }))

    fetch('http://localhost:3000//api/v1/sightings')
      .then(response => response.json())
      .then(sightings => this.setState({ sightings }));
  }

//Sighting and Login Components
  sightingContainer = props =>
    <SightingContainer
      currentUser={this.state.currentUser}
      editedSighting={this.editedSighting}
      handleSubmit={this.handleSubmit}
      addSighting={this.addSighting}
      lat={this.state.lat}
      lng={this.state.lng}
      sighting={this.renderSighting()}
      setMapBackground={this.setMapBackground}
      />
  login = props =>
    <Login
      currentUser={this.state.currentUser}
      setCurrentUser={this.setCurrentUser}
      loginClick={this.loginClick}
      setMapBackground={this.setMapBackground} />

  render() {

    return (
      <div className="App">
        {(!this.state.currentUser && this.props.location.pathname !== '/login') && <Redirect to="/login" />}
        {this.state.currentUser && this.props.location.pathname !== '/sightings' &&  <Redirect to="/sightings" />}
        <h1>Big Foot Finder</h1>
        <Switch>
          <Route path="/login" component={this.login}/>
          <Route path="/sightings" component={this.sightingContainer}/>
        </Switch>

        <MapComponent
          lat={this.state.lat}
          lng={this.state.lng}
          latLngGetter={this.latLngGetter}
          sightings={this.state.sightings}
          sightingClick={this.sightingClick}
          mapBackground={this.state.mapBackground}
          zoom={this.state.zoom}/>

      </div>
    );
  }
}


export default App;
