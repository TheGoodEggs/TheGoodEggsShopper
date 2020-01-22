import React from 'react'
import {connect} from 'react-redux'
import {getWishlist, removeWishlist} from '../store/wishlist'
import AllWishlist from './wishlist'

class wishlist extends React.Component {
  componentDidMount() {
    if (this.props.user.currentUser.id) {
      this.props.getWishlist(this.props.user.currentUser.id)
    }
  }
  render() {
    return this.props.wishlist.wishlistMap.size >= 1 ? (
      <div>
        {Object.entries(this.props.wishlist.wishlistMap).map(product => {
          console.log(product[0])

          if (product[0] !== 'size') {
            const {name, price, description, image, id} = product[1]
            return (
              <AllWishlist
                key={id}
                item={{name, price, description, image, wishlist: true, id}}
                wishlistHandler={{remove: this.props.removeWishlist}}
                user={{userId: this.props.user.currentUser.id}}
              />
            )
          }
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
    wishlist: state.wishlist,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishlist: userId => {
      dispatch(getWishlist(userId))
    },
    removeWishlist(userId) {
      dispatch(removeWishlist(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishlist)
