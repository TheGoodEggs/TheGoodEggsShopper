import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Switch, Route} from 'react-router-dom'
import AboutMe from './aboutMe'
import OrderHistory from './orderHistory'

/**
 * COMPONENT
 */

//props

// const {firstName, lastName, email, address, phone} = props

class UserHome extends Component {
  render() {
    return (
      <div>
        <h3>Welcome, {this.props.firstName}!</h3>
        <div className="UserHome">
          <Link to="/home/about">About Me</Link>
          <Link to="/home/orderhistory">Order History</Link>
        </div>
        <img
          className="home_image"
          src="https://images.unsplash.com/photo-1529589789467-4a12ccb8e5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <Switch>
          <Route path="/home/about" component={AboutMe} />
          <Route path="/home/orderhistory" component={OrderHistory} />
        </Switch>`
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.currentUser.firstName,
    lastName: state.user.currentUser.lastName,
    email: state.user.currentUser.email,
    address: state.user.currentUser.address,
    phone: state.user.currentUser.phone
  }
}

export default connect(mapState)(UserHome)
