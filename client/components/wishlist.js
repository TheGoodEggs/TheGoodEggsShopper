import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'
import WishListButton from './wishList_Component'

class AllWishlist extends React.Component {
  render() {
    const removeFromWishList = this.props.wishlistHandler
    const userId = this.props.user.userId
    const productId = this.props.item.id
    const productImage = this.props.item.image
    const productName = this.props.item.name
    const productPrice = this.props.item.price
    const wishlist = this.props.wishlistMap
    return (
      <div className="allWishInnerDiv">
        <Link to={`/products/${productId}`}>
          <img src={productImage} />
          <h3>{productName}</h3>
        </Link>
        <p>{formatMoney(Number(productPrice))}</p>
        {
          <WishListButton
            ids={{userId, productId}}
            handler={removeFromWishList}
            filledHeart="false"
            wishlist={wishlist}
          />
        }
      </div>
    )
  }
}

export default AllWishlist
