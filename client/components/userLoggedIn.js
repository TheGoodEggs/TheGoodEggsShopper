import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

//component

//dont need to save any info for guest, except their cart, which can be saved locally, strictly frontend

class User extends Component {
  componentDidMount() {
    this.props.onLoadUser()
  }

  componentDidUpdate() {}

  // in render if the user is logged in, render user homepage, if not show guest component
  render() {
    return (
      <div>
        <h3>Welcome User!</h3>
        <h6>Create Account - show CreateUser form</h6>
        <h6>or Log in - show LogIn form</h6>
      </div>
    )
  }
}

//action creators

const receiveUser = function(user) {
  return {
    type: 'RECEIVE_USER',
    receivedUser: user
  }
}

const loadUser = function(id) {
  return function(dispatch) {
    axios
      .get('api/users/' + id) //???
      .then(res => res.json())
      .then(user => {
        dispatch(receiveUser(user))
      })
      .catch(error => console.error(error))
  }
}

//reducer

export const userReducer = function(user, action) {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.receivedUser
    default:
      return user
  }
}

//container

const mapState = state => {
  return {
    email: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    onLoadUser: function() {
      dispatch(loadUser()) //props.loadUser set on props
    }
  }
}

const userLoginConnected = connect(mapState, mapDispatch)(User)
export default userLoginConnected
