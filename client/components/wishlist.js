import React from 'react'
import {connect} from 'react-redux'
import {getWishlist} from '../store/wishlist'
import Products from './products'

class wishlist extends React.Component {
  componentDidMount() {
    //need to put the user state
    // this.props.getWishlist({ id: 1 })
  }
  render() {
    return (
      <div>
        <Products loadWishList={this.props.loadProducts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishlist: user => {
      dispatch(getWishlist(user.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishlist)
