import axios from 'axios'
import history from '../history'
import connectedRegister from '../components/register'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
const UPDATE_USER = 'UPDATE_USER'
const USER_ORDERS = 'USER_ORDERS'

/**
 * INITIAL STATE
 */
const defaultUser = {
  users: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const addUser = function(user) {
  return {
    type: ADD_USER,
    user: user
  }
}
const updateUser = function(user) {
  return {
    type: UPDATE_USER,
    user: user
  }
}
const getUserOrders = function(orders) {
  return {
    type: USER_ORDERS,
    receivedOrders: orders
  }
}

/**
 * THUNK CREATORS
 */

//get user
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
//add new user
export const newUser = function(userInfo) {
  return async function(dispatch) {
    console.log('USERINFO>>', userInfo)
    const {data} = await axios.post('/api/users', userInfo) //takes an object, req.body is backend
    try {
      dispatch(addUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//edit user
export const editUser = function(id) {
  return async function(dispatch) {
    const {data} = await axios.put('/api/users/' + id)
    try {
      dispatch(updateUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const auth = (storage, method) => async dispatch => {
  //mapdispatch
  let res
  try {
    res = await axios.post(`/auth/${method}`, storage)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

//get user's order history
export const getOrderHistory = function(user) {
  //use user? or id for argument
  return async function(dispatch) {
    const {data} = await axios.get(`/api/users/${user.id}/orders`)
    try {
      dispatch(getUserOrders(data))
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case ADD_USER:
      return {...state, users: [...state.users, action.users]}
    case USER_ORDERS:
      return action.receivedOrders
    default:
      return state
  }
}
