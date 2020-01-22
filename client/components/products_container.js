import React from 'react'
import {connect} from 'react-redux'
import {allProductsThunk} from '../store/products'
import {addWishlist, removeWishlist, getWishlist} from '../store/wishlist'
import {addToCartThunk} from '../store/cart'
import AllProducts from './products'
import Cart from './'

class AllProductsContainer extends React.Component {
  componentDidMount() {
    if (this.props.user.currentUser.id) {
      this.props.getWishlist(this.props.user.currentUser.id)
    }
    this.props.loadProducts()
  }

  render() {
    return (
      <div className="allProductsdiv">
        {this.props.products.map(product => {
          const {name, price, origin, description, image, id, stock} = product
          return (
            <AllProducts
              key={id}
              item={{
                name,
                price,
                origin,
                description,
                image,
                id,
                stock
              }}
              wishlistHandler={{
                add: this.props.addWishlist,
                remove: this.props.removeWishlist
              }}
              cartHandler={this.props.addToCartThunk}
              user={{userId: this.props.user.currentUser.id}}
            />
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    wishlist: state.wishlist,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts() {
      dispatch(allProductsThunk())
    },
    addWishlist(user) {
      dispatch(addWishlist(user))
    },
    removeWishlist(user) {
      dispatch(removeWishlist(user))
    },
    addToCartThunk(productId, count) {
      dispatch(addToCartThunk(productId, count))
    },
    getWishlist(userId) {
      dispatch(getWishlist(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProductsContainer)
