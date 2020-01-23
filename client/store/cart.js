import axios from 'axios'
import history from '../history'

// ACTION TYPES

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

//INITIAL STATE

let cartState

if (localStorage.getItem('cart')) {
  cartState = JSON.parse(localStorage.getItem('cart'))
} else {
  cartState = []
}

// ACTION CREATORS

export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  product,
  count
})

export const getCart = () => ({
  type: GET_CART
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const removefromCart = product => ({
  type: REMOVE_FROM_CART,
  product
})

export const addToCartThunk = (productId, count) => {
  return async dispatch => {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(addToCart(data, count))
  }
}

// REDUCER

export default function(state = cartState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let products
      const findId = state.findIndex(item => item.id === action.product.id)
      if (findId !== -1) {
        products = state
        products[findId].quantity += action.count
      } else {
        products = state.concat([
          {
            id: action.product.id,
            product: action.product,
            quantity: action.count
          }
        ])
      }
      localStorage.setItem('cart', JSON.stringify(products))
      // history.push('/cart')
      return products
    }
    case CLEAR_CART:
      localStorage.removeItem('cart')
      state = []
      history.push('/cart')
      return state
    default:
      return state
  }
}
