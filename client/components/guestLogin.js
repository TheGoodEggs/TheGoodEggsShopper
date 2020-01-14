import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

class guestLogin extends Component {
  componentDidMount() {
    this.props.onLoadUser()
  }
  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h3>Welcome guest!</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    onLoadUser: function() {
      dispatch(loadGuest())
    }
    // EXAMPLE onLoadCampuses: function() {   //need to create onLoadCampuses would go under componentDidMount in the AllCampuses file
    //     const myThunk = loadCampuses(); //from actioncreator
    //     dispatch(myThunk);
    //     //now we have props.onLoadCampuses, set on props
    // }
  }
}

//action creator needed (loadGuest) ^^^

const guestLoginConnected = connect(mapState, mapDispatch)(guestLogin)
export default guestLoginConnected

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
