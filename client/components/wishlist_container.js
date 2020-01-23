import React from 'react'
import {connect} from 'react-redux'
import {getWishlist, removeWishlist} from '../store/wishlist'
import AllWishlist from './wishlist'

class wishlist extends React.Component {
  componentDidMount() {
    const currentUserId = this.props.currentUser.id
    if (currentUserId) {
      this.props.getWishlist(currentUserId)
    }
  }
  render() {
    const wishlistMap = this.props.wishlistMap
    const removeFromWishList = this.props.removeFromWishlist
    const userId = this.props.currentUser.id
    return wishlistMap ? (
      <div className="allWishOutDiv">
        {Object.entries(wishlistMap).map(product => {
          const {name, price, description, image, id} = product[1]
          return (
            <AllWishlist
              key={id}
              item={{name, price, description, image, id}}
              wishlistHandler={removeFromWishList}
              user={{userId}}
              wishlist={wishlistMap}
            />
          )
        })}
      </div>
    ) : (
      <div>
        <h1>Your wishlist is currently empty</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlistMap: state.wishlist.wishlistMap,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishlist: userId => {
      dispatch(getWishlist(userId))
    },
    removeFromWishlist(userId) {
      dispatch(removeWishlist(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishlist)
