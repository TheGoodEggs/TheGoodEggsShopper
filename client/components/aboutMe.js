import React, {Component} from 'react'
import {connect} from 'react-redux'

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h4>Name:</h4>
        <p>
          {this.props.firstName} {this.props.lastName}
        </p>
        <h4>Email:</h4>
        <p>{this.props.email}</p>
        <h4>Address:</h4>
        <p>{this.props.address}</p>
        <h4>Phone:</h4>
        <p>{this.props.phone}</p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    firstName: state.user.currentUser.firstName,
    lastName: state.user.currentUser.lastName,
    email: state.user.currentUser.email,
    address: state.user.currentUser.address,
    phone: state.user.currentUser.phone
  }
}

export default connect(mapState)(AboutMe)
