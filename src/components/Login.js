import React from 'react';
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

class Login extends React.Component {
  state ={
    enteredUsername: ''
  }

  loginChange = (event) => {
    this.setState({ enteredUsername: event.target.value})
  }

  render() {

    return(
      <Router>
        {this.props.user === null ?
        <div>
          <input type="text" placeholder="Enter Username" onChange={event => this.loginChange(event)}/>
          <button onClick={() => this.props.loginClick(this.state.enteredUsername)}>Submit</button>
          <hr/>
        </div> : <Redirect to="/sightings" />
        }
      </Router>
    )
  }
}

export default Login
