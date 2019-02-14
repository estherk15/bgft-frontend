import React from 'react'
import Sighting from './Sighting'
import { BrowserRouter as Router, Redirect } from "react-router-dom"

class SightingsContainer extends React.Component {

  state = {
    location: '',
    description: '',
    lat: '',
    lng: '',
    photo: null,
    userId: '',
  }


  handleChange = (event) => { //for the sightings form
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => { //submit the sighings form, post new information
    event.preventDefault()

    if(this.state.photo === null) {
      fetch('http://localhost:3000//api/v1/sightings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          location: this.state.location,
          description: this.state.description,
          user_id: this.props.currentUser.id,
          lat: this.props.lat,
          lng: this.props.lng,
        })
      })
      .then(r => r.json())
      .then(sighting => this.props.addSighting(sighting))

    } else {

      fetch('http://localhost:3000//api/v1/sightings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          location: this.state.location,
          description: this.state.description,
          photo: this.state.photo,
          user_id: this.props.currentUser.id,
          lat: this.props.lat,
          lng: this.props.lng,
        })
      })
      .then(r => r.json())
      .then(sighting => this.props.addSighting(sighting))
    }
    event.target.reset()
  }

  render() {
    // console.log(this.props.currentUser)

    return (
      <Router>
        {this.props.user === null ? <Redirect to="/login" />
        :
          <div>
            <div className="form-card">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="location" placeholder="Enter a Location" onChange={this.handleChange} />
                <input type="number" name="lat"  value={this.props.lat}/>
                <input type="number" name="lng" value={this.props.lng}/>
                <input type="text" name="description" placeholder="Enter a Description" onChange={this.handleChange}/>
                <input type="text" name="photo" placeholder="Photo Url" onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
              </form>
            </div>
            {this.props.sighting &&
              <Sighting
                key={this.props.sighting.id}
                currentUser={this.props.currentUser}
                sighting={this.props.sighting}
                editedSighting={this.props.editedSighting}
                cancelClick={this.props.cancelClick}/>}
          </div>
        }
      </Router>

    )
  }
}

export default SightingsContainer
