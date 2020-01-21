import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allProductsThunk} from '../store/products'
import {addWishlist, removeWishlist} from '../store/wishlist'
import {addToCartThunk} from '../store/cart'
import AllProducts from './products'
import Cart from './'

class AllProductsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts({id: 1})
  }
  render() {
    return (
      <div className="allProductsdiv">
        {this.props.products.map(product => {
          const {
            name,
            price,
            origin,
            description,
            image,
            wishlist,
            id
          } = product
          return (
            <AllProducts
              key={id}
              item={{name, price, origin, description, image, wishlist, id}}
              wishlistHandler={{
                add: this.props.addWishlist,
                remove: this.props.removeWishlist
              }}
              cartHandler={{
                add: this.props.addToCartThunk
              }}
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
    wishlist: state.wishlist
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts(user) {
      dispatch(allProductsThunk(user.id))
    },
    addWishlist(user) {
      dispatch(addWishlist(user))
      dispatch(allProductsThunk(user.id))
    },
    removeWishlist(user) {
      dispatch(removeWishlist(user))
      dispatch(allProductsThunk(user.id))
    },
    addToCartThunk(productId) {
      dispatch(addToCartThunk(productId))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProductsContainer)
