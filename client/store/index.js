import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import cart from './cart'
import wishlist from './wishlist'

const reducer = combineReducers({user, products, wishlist, cart})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './cart'

// const getAddedIds = state => cart.getAddedIds(state.cart)
// const getQuantity = (state, productId) => cart.getQuantity(state.cart, productId)
// const getProduct = (state, id) => products.getProduct(state.products, id)

// export const getTotal = state =>
//   getAddedIds(state)
//     .reduce((total, id) =>
//       total + getProduct(state, id).price * getQuantity(state, id),
//       0
//     )
//     .toFixed(2)

// export const getCartProducts = state =>
//   getAddedIds(state).map(id => ({
//     ...getProduct(state, id),
//     quantity: getQuantity(state, id)
//   }))
