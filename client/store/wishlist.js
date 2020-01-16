import axios from 'axios'

const GOT_WISHLIST = 'GOT WISHLIST'

const gotWishlist = arr => {
  return {
    type: GOT_WISHLIST,
    wishlist: arr
  }
}

export const getWishlist = user => {
  return async dispatch => {
    const {data} = await axios.get(`./api/users/${user}/wishlist`)
    dispatch(gotWishlist(data))
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GOT_WISHLIST:
      return [...state, ...action.wishlist]
    default:
      return state
  }
}
