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
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    address: state.user.address,
    phone: state.user.phone
  }
}

export default connect(mapState)(AboutMe)
