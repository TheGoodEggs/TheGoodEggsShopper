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
  // flipAbout(event) {
  //   event.preventDefault()
  //   this.setState({...this.state, about: !this.state.about})
  // }
  //if about clicked, render about stuff, else, render null

  render() {
    console.log('HERE>>', this.props)
    return (
      <div>
        <img
          className="home_image"
          src="https://images.unsplash.com/photo-1529589789467-4a12ccb8e5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <div className="UserHome">
          <h2>Welcome, {this.props.firstName}!</h2>
          <Link to="/home/about">About Me</Link>
          <Link to="/home/orderhistory">Order History</Link>
          <hr className="UserHr" />
        </div>
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
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    address: state.user.address,
    phone: state.user.phone
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 //  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
