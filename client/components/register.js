import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {newUser} from '../store/index'
import {connect} from 'react-redux'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      //hitting submit collects this, back end route creates user
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    //thunk, action creator
    event.preventDefault() //prevent page refresh
    const response = await axios.post('/api/users', this.state)
    this.state = {
      //clear form
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phone: ''
    }
    console.log(response)
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <h6>
          Already a member? <Link to="/login">Log in</Link>
        </h6>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
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
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </form>
        {this.state.firstName.length > 0 &&
        this.state.lastName.length > 0 &&
        this.state.email.length > 0 &&
        this.state.password.length > 0 &&
        this.state.address.length > 0 &&
        this.state.phone.length > 0 ? (
          <button type="submit" disabled={false}>
            Submit
          </button>
        ) : (
          <button type="submit" disabled={true}>
            Submit
          </button>
        )}
      </div>
    )
  }
}

const mapState = function(state) {
  return {
    user: state.user
  }
}

const mapDispatch = function(dispatch) {
  return {
    onLoadNewUser: function() {
      dispatch(newUser()) //dispatch newUser thunk
      //does newUser need a "user" argument?
    }
  }
}

const registerContainer = connect(mapState, mapDispatch)(Register)
export default registerContainer

//<Route path="/register" exact component={register} />
