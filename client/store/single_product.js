import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

/**
 * INITIAL STATE
 //  */
// const defaultProduct = {
//   products: [],
// }

/**
 * ACTION CREATORS
 */

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
export const singleProductThunk = user => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${user}`)
    // if (user) {
    //   const wishlist = await axios.get(`./api/users/${user}/wishlist`)
    //   let wishlistMap = {}
    //   wishlist.data.forEach(element => {
    //     if (!wishlistMap[element.id]) wishlistMap[element.id] = true
    //   })
    //   data.forEach((element, i) => {
    //     if (wishlistMap[element.id]) data[i].wishlist = true
    //   })
    // }
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
export default function(state = {}, action) {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return action.products
    default:
      return state
  }
}

export const getProduct = (state, productId) => state.products[productId]
