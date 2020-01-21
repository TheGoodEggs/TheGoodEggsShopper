import React from 'react'
import {connect} from 'react-redux'
import {getWishlist, removeWishlist} from '../store/wishlist'
import AllProducts from './products'

class wishlist extends React.Component {
  componentDidMount() {
    // need to put the user state
    console.log(this.props.user.id)
    this.props.getWishlist({id: this.props.user.id})
  }
  render() {
    return (
      <div>
        {this.props.wishlist.map(product => {
          const {name, price, description, image, id} = product
          return (
            <AllProducts
              key={id}
              item={{name, price, description, image, wishlist: true, id}}
              wishlistHandler={{remove: this.props.removeWishlist}}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishlist: user => {
      dispatch(getWishlist(user))
    },
    removeWishlist(user) {
      dispatch(removeWishlist(user))
      dispatch(getWishlist(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishlist)
