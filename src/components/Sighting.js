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
    console.log(this.props.sighting)
    return (

      <div type='card' className="modal display-block">
        <div className="newuser-form card">
          <div className="location">
            sighted at: {this.props.sighting.location}
            <div className="photo">
              <img src={this.props.sighting.photo}/>
            </div>
          </div>

          <div className="comments">
            <div className="description">
              Description: {this.props.sighting.description}
            </div>
            <button onClick={() => this.pageViewtoggle()}> bigger View </button>
            <button onClick={this.props.cancelClick}> Cancel </button>
            {this.state.commentsDisplay ?
              <CommentsContainer
                comments={this.props.sighting.comments}
                sightingId={this.props.sighting.id}
                editedSighting={this.props.editedSighting}
                currentUser={this.props.currentUser}/>
              :
              null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Sighting
