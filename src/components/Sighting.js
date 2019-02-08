import React from 'react'

class Sighting extends React.Component {

  render() {
    return (

      <div type='card'>
        <div>
          <div>
            sighted at: {this.props.sighting.location}
          </div>
          <div>
            Description: {this.props.sighting.description}
          </div>
        </div><br/>
      </div>
    )
  }
}

export default Sighting
