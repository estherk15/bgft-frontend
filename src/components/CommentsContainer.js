import React from 'react'
import Comments from './Comments'

class CommentsContainer extends React.Component {

  state ={
    body: null,
    photo: null,
    comments: [...this.props.comments].reverse()
  }

  findCommentInReturn = (sightingAndUser) => {
    return sightingAndUser.sighting.comments.find(function(comment){
      return comment.id === sightingAndUser.id
    })
  }

  commentsListEditor = (sightingAndUser) => {
    const commentEdited = this.findCommentInReturn(sightingAndUser)
    const editedCommentList = this.state.comments.map(comment => {
      if(comment.id === commentEdited.id){
        return commentEdited
      } else {
        return comment
      }
      this.setState({comments: editedCommentList})
    
    })

  //  const editedList
  }

  // commentsListEditor = (editedCommentAndMore) => {
  //
  //
  //
  //   const commentsEdited = this.state.comments.map(comment => {
  //     if(editedComment.id === comment.id){
  //       console.log(editedComment)
  //
  //       return editedComment
  //     } else {
  //       return comment
  //     }
  //
  //   })
  //
  //   this.setState({comments: commentsEdited})
  //
  // }

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
    .then(newCommentsList => this.setState({comments: [...newCommentsList.sighting.comments].reverse()}))


  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    console.log(this.state.comments)
    return (
      <div>
      <form onSubmit={(event) => this.addComment(event)}>
      <input type="text" name="body" placeholder="What do you think about this?" onChange={event => this.handleChange(event)}/><br/>
      <input type="text" name="photo" placeholder="other photographic evidence" onChange={event => this.handleChange(event)}/><br/>
      <input type="submit" value="Send it in" />

      </form>

      {this.state.comments.map(comment => <Comments currentUser={this.props.currentUser} commentsListEditor={this.commentsListEditor} comment={comment}/>)}
      </div>
    )
  }

}
export default CommentsContainer
