import React, { Component } from 'react';
import LinkButton from './LinkButton'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleLoginSubmit = (e) => {
  e.preventDefault();
  console.log('login here');
  
  fetch('http://localhost:3000/api/v1/login',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: this.state.email,
        password: this.state.password,
      }
  })
})
.then(res => res.json())
// .then(json => console.log(json))
.then(json => this.props.sendToken(json.jwt))
}

  render() {
    return <div id="login-page">

      <h2>Existing User?</h2>
      <form onSubmit={this.handleLoginSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type="text"
          name="email"
          onChange={event => this.handleChange(event)}
          value={this.state.email}
          />

        <label htmlFor='password'>Password</label>
        <input
          type="text"
          name="password"
          onChange={event => this.handleChange(event)}
          value={this.state.password}
          />

        <button type="submit">Login</button>
      </form>
      <div>
      <h2>New User?</h2>
      <LinkButton to='/signup'>Signup</LinkButton>

      {/* Creates link text rather than link button:
        <button type="submit">Login</button>
        </form>
        <div>
          <h2>New User?</h2>
          <Link
            className="btn btn-pink"
            role="button"
            to="/signup"
          >
            Signup
          </Link> */}
      </div>
      
      <div>
        <h2>About Github Timeline App</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  }
}
export default Login;