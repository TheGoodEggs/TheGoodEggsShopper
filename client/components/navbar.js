import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <div className="header">
      <h1>THE EGG SHOPPER</h1>
    </div>
    <hr />
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">HOME</Link>
          <a href="#" onClick={handleClick}>
            LOGOUT
          </a>
          <div className="navright">
            <Link to="/products">SHOP</Link>
            <Link to="/wishlist">WISHLIST</Link>
            <Link to="/cart">
              <i className="fa fa-shopping-cart fa-2x" />
            </Link>
            <Link to="/checkout">CHECKOUT</Link>
          </div>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGN UP</Link>
          <div className="navright">
            <Link to="/products">SHOP</Link>
            <Link to="/cart">
              <i className="fa fa-shopping-cart fa-2x" />
            </Link>
            <Link to="/checkout">CHECKOUT</Link>
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.currentUser.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
