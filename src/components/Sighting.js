import React from 'react'

class Sighting extends React.Component {

  render() {
    return (

      <div>
        {this.props.sighting.location}
      </div>
    )
  }
}

export default Sighting
