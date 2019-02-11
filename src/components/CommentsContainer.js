import React from 'react'
import Comments from './Comments'

class CommentsContainer extends React.Component {

  state ={
    body: null,
    photo: null,
    // comments: [...this.props.comments].reverse()
  }

  findCommentInReturn = (sightingAndUser) => {
    return sightingAndUser.sighting.comments.find(function(comment){
      return comment.id === sightingAndUser.id
    })
  }


  addComment = (event) =>{
    event.preventDefault()

    fetch('http://localhost:3000//api/v1/comments', {
      method: 'POST',
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
    .then((newCommentsList => {return this.props.editedSighting(newCommentsList.sighting)}))
  }
//  this.setState({comments: newCommentsList.sighting.comments.reverse()})

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formatComments = () => {
    return this.props.comments.map(comment => {
      return <Comments key={comment.id} currentUser={this.props.currentUser} comment={comment} editedSighting={this.props.editedSighting} />
    })
  }


  render() {
    console.log("comments container", this.props.currentUser)
    return (
      <div>
      <form onSubmit={(event) => this.addComment(event)}>
      <input type="text" name="body" placeholder="What do you think about this?" onChange={event => this.handleChange(event)}/><br/>
      <input type="text" name="photo" placeholder="other photographic evidence" onChange={event => this.handleChange(event)}/><br/>
      <input type="submit" value="Send it in" />

      </form>

      {this.formatComments()}
      </div>
    )
  }

}
export default CommentsContainer
