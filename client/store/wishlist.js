import axios from 'axios'

const GOT_WISHLIST = 'GOT_WISHLIST'

const gotWishlist = wishlistMap => {
  return {
    type: GOT_WISHLIST,
    wishlist: wishlistMap
  }
}

export const getWishlist = user => {
  return async dispatch => {
    const {data} = await axios.get(`./api/users/${user}/wishlist`)
    let map = {size: 0}
    data.forEach(element => {
      map[element.id] = element
      map.size++
    })
    dispatch(gotWishlist(map))
  }
}

export const addWishlist = user => {
  return async dispatch => {
    await axios.post(`/api/users/${user.id}/wishlist`, {
      productId: user.productId
    })
    dispatch(getWishlist(user.id))
  }
}

export const removeWishlist = user => {
  return async dispatch => {
    await axios.delete(`./api/users/${user.id}/wishlist/${user.productId}`)
    dispatch(getWishlist(user.id))
  }
}

export default (state = {wishlistMap: {size: 0}}, action) => {
  switch (action.type) {
    case GOT_WISHLIST:
      return {...state, wishlistMap: action.wishlist}
    default:
      return state
  }
}
