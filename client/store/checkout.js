import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const ADD_ORDER = 'ADD_ORDER'

/**
 * INITIAL STATE
 */
// const defaultOrder = {
//   order: []
// }

/**
 * ACTION CREATORS
 */

const addOrder = function(order) {
  return {
    type: ADD_ORDER,
    order
  }
}

/**
 * THUNK CREATORS
 */

//add new user
export const newOrder = function(value) {
  return async function(dispatch) {
    const {data} = await axios.post('/api/orders', value)
    try {
      dispatch(addOrder(data))
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case ADD_ORDER:
      // history.push('/thankyou')
      return action.order
    default:
      return state
  }
}
