import React from 'react'
import CommentsContainer from './CommentsContainer'

class Sighting extends React.Component {

  state ={
    commentsDisplay:false
  }

  pageViewtoggle = () => {
    this.setState({commentsDisplay: !this.state.commentsDisplay})
  }

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
        <button onClick={() => this.pageViewtoggle()}> bigger View </button>
        {this.state.commentsDisplay ?
          <CommentsContainer comments={this.props.sighting.comments} sightingId={this.props.sighting.id} currentUser={this.props.currentUser}/>:
        <div></div>}
      </div>
    )
  }
}

export default Sighting
