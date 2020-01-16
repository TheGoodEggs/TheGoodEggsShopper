import axios from 'axios'

const GOT_WISHLIST = 'GOT_WISHLIST'

const gotWishlist = arr => {
  return {
    type: GOT_WISHLIST,
    wishlist: arr
  }
}

export const getWishlist = user => {
  return async dispatch => {
    const {data} = await axios.get(`./api/users/${user.id}/wishlist`)
    dispatch(gotWishlist(data))
  }
}

export const addWishlist = user => {
  return async dispatch => {
    await axios.post(`./api/users/${user.id}/wishlist`, {
      productId: user.productId
    })
    dispatch(getWishlist(user))
  }
}

export const removeWishlist = user => {
  return async dispatch => {
    await axios.delete(`./api/users/${user.id}/wishlist/${user.productId}`)
    dispatch(getWishlist(user))
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GOT_WISHLIST:
      return [...action.wishlist]
    default:
      return state
  }
}
