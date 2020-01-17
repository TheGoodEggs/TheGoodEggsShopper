import React from 'react'
import {connect} from 'react-redux'
import Cart from './cart'
import {addToCartThunk} from '../store/cart'

const CartContainer = ({products, quantity}) => (
  <Cart products={products} quantity={quantity} />
)

//    onCheckoutClicked = {() => checkout(products)}

const mapState = state => ({
  products: state.products,
  quantity: state.quantity
  // total: getTotal(state)
})

const mapDispatch = dispatch => {
  return {
    addToCartThunk(productId) {
      dispatch(addToCartThunk(productId))
    }
  }
}

export default connect(mapState, mapDispatch)(CartContainer)
