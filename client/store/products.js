import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const DECREMENT_PRODUCT_STOCK = 'DECREMENT_PRODUCT_STOCK'
const INCREMENT_PRODUCT_STOCK = 'INCREMENT_PRODUCT_STOCK'
// const NEW_PRODUCT = 'NEW_PRODUCT'
// const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * INITIAL STATE
 //  */
// const defaultProduct = {
//   products: [],
// }

/**
 * ACTION CREATORS
 */

const allProducts = products => ({
  type: ALL_PRODUCTS,
  products
})

const decrementProductStock = (product, count) => ({
  type: DECREMENT_PRODUCT_STOCK,
  product,
  count
})

const incrementProductStock = (product, count) => ({
  type: INCREMENT_PRODUCT_STOCK,
  product,
  count
})

// const newProduct = product => ({
//   type: NEW_PRODUCT,
//   product
// })
// const updateProduct = product => ({
//   type: UPDATE_PRODUCT,
//   product
// })
// const removeProduct = productId => ({
//   type: REMOVE_PRODUCT,
//   productId
// })

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

// export const newProductThunk = info => async dispatch => {
//   try {
//     const {data} = await axios.post('/api/products', info)
//     dispatch(newProduct(data.product))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const updateProductThunk = product => async dispatch => {
//   try {
//     const {data} = await axios.put(`/api/products/${product.id}`, product)
//     dispatch(updateProduct(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const deleteProductThunk = productId => async dispatch => {
//   try {
//     const {data} = await axios.delete(`/api/products/${productId}`)
//     dispatch(removeProduct(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products
    case DECREMENT_PRODUCT_STOCK:
      // const productId = state.findIndex(item => item.id === action.product.id)
      // const stockCount = state[productId][stock];
      // const newStock = Math.max(stockCount - action.count, 0);
      // state[productId][stock] = newStock;
      return state
    case INCREMENT_PRODUCT_STOCK:
      // const productId = state.findIndex(item => item.id === action.product.id)
      // const stockCount = state[productId][stock];
      // // Need to keep track of original stock count
      // const newStock = Math.max(stockCount + action.count, 0);
      // state[productId][stock] = newStock;
      return state
    default:
      return state
  }
}

export const getProduct = (state, productId) => state.products[productId]
