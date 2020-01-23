import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const DECREMENT_PRODUCT_STOCK = 'DECREMENT_PRODUCT_STOCK'
const INCREMENT_PRODUCT_STOCK = 'INCREMENT_PRODUCT_STOCK'

/**


/**
 * ACTION CREATORS
 */

const allProducts = products => ({
  type: ALL_PRODUCTS,
  products
})

/**
 * THUNK CREATORS
 */
export const allProductsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(allProducts(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products
    case DECREMENT_PRODUCT_STOCK:
      return state
    case INCREMENT_PRODUCT_STOCK:
      return state
    default:
      return state
  }
}

export const getProduct = (state, productId) => state.products[productId]
