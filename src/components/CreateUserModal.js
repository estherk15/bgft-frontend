import React from 'react';
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

class CreateUserModal extends React.Component {
  state = {
    username: null,
    bio: null
  }

  typingHandler = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  makeUser = event => {
    event.preventDefault()

    fetch("http://localhost:3000//api/v1/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            bio: this.state.bio
        })
    })
    .then(r => r.json())
    .then(newUser => this.props.setCurrentUser(newUser))
    this.props.setMapBackground()
  }

  render() {
    return(
      <div className={this.props.modalVisible ? "modal display-block": "display-none"}>
        <div className="newuser-form card">
          <div>
          <form onSubmit={event => this.makeUser(event)}>
            <input onChange={event => this.typingHandler(event)} type="text" className="username" placeholder="Your name"/><br />
            <input onChange={event => this.typingHandler(event)} type="text" className="bio" placeholder="bio" /> <br />
            <input type="submit" />
          </form>

          <button type="button" onClick={this.props.modalToggle}>
            Close New User Form
          </button>
          </div>
        </div>
      </div>
    )
  }

}
export default CreateUserModal
