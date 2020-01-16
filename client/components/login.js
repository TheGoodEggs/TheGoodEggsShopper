import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <h6>
          Not a member? <Link to="/register">Register here</Link>
        </h6>
        <form>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Passwprd"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
