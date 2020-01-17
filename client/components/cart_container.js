import React from 'react'
import {connect} from 'react-redux'
import {getTotal, getCartProducts} from '../store'
import Cart from './cart'
import {allProductsThunk} from '../store/products'

const CartContainer = ({products, total}) => (
  <Cart products={products} total={total} />
)

//    onCheckoutClicked = {() => checkout(products)}

const mapState = state => ({
  products: state.products,
  total: getTotal(state)
})

const mapDispatch = dispatch => {
  return {
    loadProducts() {
      dispatch(allProductsThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(CartContainer)
