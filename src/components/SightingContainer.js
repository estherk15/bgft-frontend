import React from 'react'
import Sighting from './Sighting'

class SightingsContainer extends React.Component {

  state = {

  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit=>
            <input type="text" placeholder="Enter a Location" />
            <input type="text" placeholder="Enter a Description" />
            <input type="text" placeholder="Photo Url" />
            <input type="number" placeholder="User ID" />
            <input type="submit" value="Submit" />
          </form>
        </div>

        {this.props.sightings.map(sighting => <Sighting key={sighting.id} sighting={sighting}/>)}
      </div>

    )
  }
}

export default SightingsContainer
