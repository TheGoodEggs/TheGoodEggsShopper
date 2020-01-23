import React from 'react'

const WishListButton = props => {
  const {productId, userId} = props.ids
  const handler = props.handler
  const wishlist = props.wishlist
  const heartStyle =
    props.filledHeart === 'true' ? 'fa fa-heart' : 'fa fa-heart-o'
  return (
    <button
      type="button"
      onClick={() =>
        handler({
          userId: userId,
          productId: productId,
          wishlist
        })
      }
    >
      <i className={heartStyle} />
    </button>
  )
}

export default WishListButton
