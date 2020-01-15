import React, {Component} from 'react'
import {connect} from 'react-redux'

//component

//dont need to save any info for guest, except their cart, which can be saved locally, strictly frontend

class Guest extends Component {
  componentDidMount() {
    this.props.onLoadUser()
  }

  componentDidUpdate() {}

  // in render if the user is logged in, render user homepage, if not show guest component
  render() {
    return (
      <div>
        <h3>Welcome guest!</h3>
        <h6>Create Account - show CreateUser form</h6>
        <h6>or Log in - show LogIn form</h6>
      </div>
    )
  }
}

//action creators

const receiveGuest = function(guest) {
  return {
    type: 'RECEIVE_GUEST',
    receivedGuest: guest
  }
}

const loadGuest = function() {
  return function(dispatch) {
    fetch('api/users/guest') //???
      .then(res => res.json())
      .then(guest => {
        dispatch(receiveGuest(guest))
      })
      .catch(error => console.error(error))
  }
}

//reducer

export const guestReducer = function(guest, action) {
  switch (action.type) {
    case 'RECEIVE_GUEST':
      return action.receivedGuest
    default:
      return guest
  }
}

//container

const mapState = state => {
  return {
    email: state.guest
  }
}

const mapDispatch = dispatch => {
  return {
    onLoadUser: function() {
      dispatch(loadGuest()) //props.loadGuest set on props
    }
  }
}

const guestLoginConnected = connect(mapState, mapDispatch)(Guest)
export default guestLoginConnected
