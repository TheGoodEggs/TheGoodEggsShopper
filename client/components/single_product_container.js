import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import single_product, {singleProductThunk} from '../store/single_product'
import {addWishlist, removeWishlist} from '../store/wishlist'
import {addToCartThunk} from '../store/cart'
import AllProducts from './products'
import Cart from '.'
import SingleProduct from './single_product'

const SingleProductContainer = props => {
  return (
    <SingleProduct
      productId={props.match.params.productId}
      product={props.product}
      loadProduct={props.loadProduct}
    />
  )
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    loadProduct() {
      dispatch(singleProductThunk(ownProps.match.params.productId))
    }
    // addToCartThunk(productId) {
    //   dispatch(addToCartThunk(productId))
    // }
  }
}

export default connect(mapState, mapDispatch)(SingleProductContainer)
