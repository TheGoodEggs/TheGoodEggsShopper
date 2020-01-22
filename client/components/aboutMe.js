import React, {Component} from 'react'
import {connect} from 'react-redux'

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <p>
          {' '}
          <strong>Name: </strong> &nbsp;
          {this.props.firstName} {this.props.lastName}
        </p>
        <p>
          <strong>Email: </strong> &nbsp; {this.props.email}
        </p>
        <p>
          <strong>Address: </strong> &nbsp; {this.props.address}
        </p>
        <p>
          <strong>Phone: </strong> &nbsp; {this.props.phone}
        </p>
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
