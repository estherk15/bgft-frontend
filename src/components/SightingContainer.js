import React from 'react'
import Sighting from './Sighting'
import { BrowserRouter as Router, Redirect } from "react-router-dom"

class SightingsContainer extends React.Component {

  state = {
    location: '',
    description: '',
    photo: '',
    userId: '',
  }


  handleChange = (event) => { //for the sightings form
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => { //submit the sighings form, post new information
    event.preventDefault()

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
        user_id: this.state.userId
      })
    })
    .then(r => r.json())
    .then(sighting => this.props.addSighting(sighting))
  }


  render() {
    // console.log(this.props.location);

    return (
      <Router>
        {this.props.user === null ? <Redirect to="/login" /> :
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="location" placeholder="Enter a Location" onChange={this.handleChange} />
              <input type="number" name="lat"  value={this.props.lat}/>
              <input type="number" name="lng" value={this.props.lng}/>
              <input type="text" name="description" placeholder="Enter a Description" onChange={this.handleChange}/>
              <input type="text" name="photo" placeholder="Photo Url" onChange={this.handleChange}/>
              <input type="number" name="userId" placeholder="User ID" onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
            </form>
          </div>

          {this.props.sightings.map(sighting => <Sighting key={sighting.id} currentUser={this.props.currentUser} sighting={sighting}/>)}
        </div> }
      </Router>

    )
  }
}

export default SightingsContainer

//add onSubmit handler
//add onChange hanlder for each form field
