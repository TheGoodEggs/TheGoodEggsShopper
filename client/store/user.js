import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
const UPDATE_USER = 'UPDATE_USER'
//edit

/**
 * INITIAL STATE
 */
const defaultUser = {}

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
//edit

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
export const newUser = function() {
  return async function(dispatch) {
    const {data} = await axios.post('api/users')
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
    const {data} = await axios.put('api/users/' + id)
    try {
      dispatch(updateUser(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const auth = (email, password, method) => async dispatch => {
  //mapdispatch
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
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
    default:
      return state
  }
}
