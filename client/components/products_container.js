import React from 'react'
import {connect} from 'react-redux'
import {allProductsThunk} from '../store/products'
import {addWishlist, removeWishlist} from '../store/wishlist'
import AllProducts from './products'

class AllProductsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts({id: 1})
  }
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          const {name, price, description, image, wishlist, id} = product
          return (
            <AllProducts
              key={id}
              item={{name, price, description, image, wishlist, id}}
              wishlistHandler={{
                add: this.props.addWishlist,
                remove: this.props.removeWishlist
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
    }
  }
}

export default connect(mapState, mapDispatch)(AllProductsContainer)
