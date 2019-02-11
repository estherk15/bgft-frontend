import React from 'react';

class Login extends React.Component {
  state ={
    enteredUsername: ''
  }

  loginChange = (event) => {
    this.setState({ enteredUsername: event.target.value})
  }

  render() {
  
    return(
      <div>
        <input type="text" placeholder="Enter Username" onChange={event => this.loginChange(event)}/>
        <button onClick={() => this.props.loginClick(this.state.enteredUsername)}>Submit</button>
        <hr/>

      </div>
    )
  }
}

export default Login
