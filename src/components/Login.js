import React from 'react';
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
import CreateUserModal from './CreateUserModal'

class Login extends React.Component {
  state ={
    enteredUsername: '',
    modalVisible: false,
  }

  loginChange = (event) => {
    this.setState({ enteredUsername: event.target.value})
  }

  modalToggle = () => {
    this.setState({modalVisible: !this.state.modalVisible})
    this.props.setMapBackground()
  }

  render() {

    return(
      <Router>
        {this.props.currentUser === null ?
          <div>
            <input type="text" placeholder="Enter Username" onChange={event => this.loginChange(event)}/>
            <button onClick={() => this.props.loginClick(this.state.enteredUsername)}>Submit</button><br/>
            <button onClick={() => this.modalToggle()}> make new user</button>
            <CreateUserModal setMapBackground={this.props.setMapBackground} modalVisible={this.state.modalVisible} setCurrentUser={this.props.setCurrentUser} modalToggle={this.modalToggle}/>
            <hr/>
          </div> : <Redirect to="/sightings" />
        }
      </Router>
    )
  }
}

export default Login
