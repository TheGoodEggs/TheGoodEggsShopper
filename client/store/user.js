import axios from 'axios'
import history from '../history'
import {log} from 'util'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
const UPDATE_USER = 'UPDATE_USER'
const USER_ORDERS = 'USER_ORDERS'
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS'

/**
 * INITIAL STATE
 */
const defaultUser = {
  users: [],
  orders: [],
  currentUser: {id: 0},
  isFetching: false
}

/**
 * ACTION CREATORS
 */

const setFetchingStatus = isFetching => ({
  type: SET_FETCHING_STATUS,
  isFetching
})

const getUser = user => ({
  type: GET_USER,
  user
})

export const fetchMe = () => {
  return async dispatch => {
    dispatch(setFetchingStatus(true))
    try {
      const {data} = await axios.get('/auth/me')
      dispatch(getUser(data))
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setFetchingStatus(false))
    }
  }
}

export const login = credentials => {
  return async dispatch => {
    try {
      const response = await axios.put('/auth/login', credentials)
      dispatch(getUser(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

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
    try {
      const {data} = await axios.post('/api/users', userInfo)
      dispatch(addUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//edit user
export const editUser = function(id) {
  return async function(dispatch) {
    try {
      const {data} = await axios.put('/api/users/' + id)
      dispatch(updateUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const auth = (storage, method) => async dispatch => {
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
export const getOrderHistory = function(id) {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/users/${id}/orders`)
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
    case SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case GET_USER:
      return {...state, currentUser: action.user}
    case REMOVE_USER:
      return defaultUser
    case ADD_USER:
      return {...state, users: [...state.users, action.users]}
    case USER_ORDERS:
      return {...state, orders: [...state.orders, ...action.receivedOrders]}
    default:
      return state
  }
}
