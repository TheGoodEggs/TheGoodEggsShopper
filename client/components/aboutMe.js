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
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    address: state.user.address,
    phone: state.user.phone
  }
}

export default connect(mapState)(AboutMe)
