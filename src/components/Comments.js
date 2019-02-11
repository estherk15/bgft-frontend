import React from 'react'

class Comments extends React.Component {
  state={
    formLayout: false,
    body: this.props.comment.body,
    photo: this.props.comment.photo
  }

  commentEditor = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000//api/v1/comments/${this.props.comment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        body: this.state.body,
        photo: this.state.photo,
        user_id: this.props.currentUser.id,
        sighting_id: this.props.sightingId
      })
    })
    .then(r => r.json())
    .then(data => this.props.editedSighting(data.sighting))
  }

  deleteComment = () => {
    fetch(`http://localhost:3000//api/v1/comments/${this.props.comment.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => this.props.editedSighting(data.sighting))
  }



  render() {

    return (
      <div>
      {this.state.formLayout ?
        <form onSubmit={(event)=> this.commentEditor(event)}>
          <input type="text" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})}/>
          <input type="text" value={this.state.photo} onChange={event => this.setState({photo: event.target.value})}/>
          <input onClick={() => this.setState({formLayout: false})}type="submit" value="make the changes"/>
        </form>
      :
      <div>
        {this.state.body}
        {console.log("---> currentUser is :", this.props.currentUser)}
        {(this.props.currentUser.id === this.props.comment.user.id) ?
       <div>
          <button onClick={() => this.setState({formLayout: true})}>Edit Your Comment</button>
          <button onClick={() => this.deleteComment()}> Delete </button>
        </div>
        :
        <div></div>}
        </div>
    }
      </div>
    )
  }

}
export default Comments
