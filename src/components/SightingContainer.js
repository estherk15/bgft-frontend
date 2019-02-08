import React from 'react'
import Sighting from './Sighting'

class SightingsContainer extends React.Component {

  state = {
    location: '',
    description: '',
    photo: '',
    userId: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
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
    // console.log(this.state);

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="location" placeholder="Enter a Location" onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Enter a Description" onChange={this.handleChange}/>
            <input type="text" name="photo" placeholder="Photo Url" onChange={this.handleChange}/>
            <input type="number" name="userId" placeholder="User ID" onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        {this.props.sightings.map(sighting => <Sighting key={sighting.id} sighting={sighting}/>)}
      </div>

    )
  }
}

export default SightingsContainer

//add onSubmit handler
//add onChange hanlder for each form field
