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
        <h3>Welcome, {this.props.firstName}!</h3>
        <ul>
          <Link to="/home/about">About Me</Link>
        </ul>
        <ul>
          <Link to="/home/orderhistory">Order History</Link>
        </ul>
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
