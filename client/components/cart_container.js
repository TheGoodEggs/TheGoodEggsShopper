import React from 'react'
import {connect} from 'react-redux'
import Cart from './cart'
import {addToCartThunk, clearCart} from '../store/cart'

const CartContainer = ({products, quantity, clear}) => (
  <Cart products={products} quantity={quantity} clear={clear} />
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
    },
    clear() {
      dispatch(clearCart())
    }
  }
}

export default connect(mapState, mapDispatch)(CartContainer)
