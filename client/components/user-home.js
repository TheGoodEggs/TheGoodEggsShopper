import React from 'react'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, email, address, phone} = props
  //if about clicked, render about stuff, else, render null
  //onclick on about you !
  //make a bollean on the state, set it to true when onlick

  //use class component to use setstate

  // this.state = {
  //   about: false,
  //   order: false
  //   }

  //   flipAbout(e){
  //   e.
  //   this.setState({...this.state, about: !this.state.about})
  //   }

  //render function
  return (
    <div>
      <h3>Welcome, {firstName}!</h3>
      <nav>
        <h3 onClick={this.flipAbout}>About you</h3>
        {this.state.about ? (
          <p>
            {firstName}
            {lastName}
          </p>
        ) : // <p>{email}</p>
        // <p>{address}</p>
        // <p>{phone}</p>
        null}
        <h3>Order History</h3>
        <h3>Log out</h3>
      </nav>
    </div>
  )
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

// export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 //  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
