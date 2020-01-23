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
    let map = {}
    data.forEach(element => {
      map[element.id] = element
    })
    dispatch(gotWishlist(map))
  }
}

export const addWishlist = userInfo => {
  return async dispatch => {
    await axios.post(`/api/users/${userInfo.userId}/wishlist`, {
      productId: userInfo.productId
    })
    dispatch(getWishlist(userInfo.userId))
  }
}

export const removeWishlist = userInfo => {
  return async dispatch => {
    await axios.delete(
      `./api/users/${userInfo.userId}/wishlist/${userInfo.productId}`
    )
    const wishlistMap = userInfo.wishlist
    delete wishlistMap[userInfo.productId]
    dispatch(gotWishlist(wishlistMap))
  }
}

export default (state = {wishlistMap: {}}, action) => {
  switch (action.type) {
    case GOT_WISHLIST:
      return {...state, wishlistMap: action.wishlist}
    default:
      return state
  }
}
