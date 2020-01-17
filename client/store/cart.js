import axios from 'axios'

// ACTION TYPES

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

//INITIAL STATE

let cartState

if (localStorage.getItem('cart')) {
  cartState = JSON.parse(localStorage.getItem('cart'))
} else {
  cartState = []
}

// ACTION CREATORS

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

export const getCart = () => ({
  type: GET_CART
})

export const removefromCart = productId => ({
  type: REMOVE_FROM_CART,
  productId
})

export const addToCartThunk = productId => {
  return async dispatch => {
    const {data} = await axios.get(`./api/products/${productId}`)
    dispatch(addToCart(data))
  }
}

// REDUCER

export default function(state = cartState, action) {
  let products, findId
  switch (action.type) {
    case ADD_TO_CART:
      findId = state.findIndex(item => item.id === action.product.id)
      if (findId !== -1) {
        products = state
        products[findId].quantity += 1
      } else {
        products = state.concat([
          {
            id: action.product.id,
            product: action.product,
            quantity: 1
          }
        ])
      }
      // IF ELSE HERE
      // if item is not already in, add it
      // if item is in, quantity ++

      localStorage.setItem('cart', JSON.stringify(products))
      // history.push('/cart')
      return products
    default:
      return state
  }
}
