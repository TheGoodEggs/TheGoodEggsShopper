import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'
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
const singleProduct = product => ({
  type: SINGLE_PRODUCT,
  product
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

export const singleProductThunk = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch(singleProduct(data))
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
    case SINGLE_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}

export const getProduct = (state, productId) => state.products[productId]
