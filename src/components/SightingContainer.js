import React from 'react'
import Sighting from './Sighting'

class SightingsContainer extends React.Component {

  render() {
    return (

      <div>
        {this.props.sightings.map(sighting =>
          <Sighting sighting={sighting}/>
        )
        }
      </div>
    )
  }
}

export default SightingsContainer
