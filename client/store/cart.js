import axios from 'axios'

// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const EDIT_CART = 'EDIT_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// ACTION CREATORS

export const addToCart = productId => ({
  type: ADD_TO_CART,
  productId
})

// const removefromCart = ({
//   type: REMOVE_FROM_CART,
//   productId
// })

//INITIAL STATE

const cartState = {
  addedIds: [],
  quantityById: {}
}

// if (localStorage.getItem('cart')) {
//   cartState = JSON.parse(localStorage.getItem('cart'))
// } else {
//   cartState = {
//     items: [
//     ],
//     addedItem: [],
//     total: 0
//   }
// }

// REDUCER

const addedIds = (state = cartState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    default:
      return state
  }
}

const quantityById = (state = cartState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {productId} = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export const getQuant = (state, productId) => state.quantityById[productId] || 0

// export const getAddedIds = state => state.addedIds

// const cartReducer = (state = cartState, action) => {
//   if (action.type === ADD_TO_CART) {
//       let addedItem = state.items.find(item => item.id === action.productId)
//       let existedItem = state.addedItems.find(item => action.productId === item.id)
//       if (existedItem) {
//         addedItem.quantity += 1
//         return {
//           ...state,
//           total: state.total + addedItem.price
//         }
//       } else {
//         addedItem.quantity = 1;
//         let newTotal = state.total + addedItem.price

//         return {
//           ...state,
//           addedItems: [...state.addedItems, addedItem],
//           total: newTotal
//         }
//       }
//   }
//   return state
// }

const cart = (state = cartState, action) => {
  switch (action.type) {
    //   case CHECKOUT_REQUEST:
    //     return cartState
    //   case CHECKOUT_FAILURE:
    //     return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
