import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
    this.submitHelper = this.submitHelper.bind(this)
  }

  // handleSubmit() {
  //   this.props.onLoad({
  //     name: this.props.firstName
  //   })
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHelper(event) {
    event.preventDefault()
    this.props.register({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      phone: this.state.phone
    })
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phone: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHelper()}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = function(dispatch) {
  return {
    register: function(userInfo) {
      dispatch(newUser(userInfo))
    }
  }
}

const connectedRegister = connect(null, mapDispatch)(Register)
export default connectedRegister
