import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'
import {addToCartThunk} from '../store/cart'
import AddToCartComponent from './addToCart_Component'
import {addWishlist, removeWishlist} from '../store/wishlist'
import {connect} from 'react-redux'
import WishListButton from './wishList_Component'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.cartHandler = this.cartHandler.bind(this)
  }

  increment() {
    if (this.state.quantity < this.props.item.stock) {
      this.setState(previousState => ({
        quantity: previousState.quantity + 1
      }))
    }
  }
  decrement() {
    if (this.state.quantity >= 1) {
      this.setState(previousState => ({
        quantity: previousState.quantity - 1
      }))
    }
  }

  cartHandler() {
    this.props.cartHandler(this.props.item.id, this.state.quantity)
    this.setState({quantity: 1})
  }

  render() {
    const decrement = this.decrement
    const increment = this.increment
    const quantity = this.state.quantity

    const userId = this.props.user.userId

    const wishlist = this.props.wishlistMap
    const addToWishList = this.props.addWishlist
    const removeFromWishList = this.props.removeWishlist

    const itemId = this.props.item.id
    const itemImage = this.props.item.image
    const itemOrigin = this.props.item.origin
    const itemPrice = this.props.item.price
    const itemName = this.props.item.name

    const cartHandler = this.cartHandler

    return (
      <div className="allProductsInnerDiv">
        <Link to={`/products/${itemId}`}>
          <img src={itemImage} />
          <h3>{itemName}</h3>
        </Link>
        <h4>Origin: {itemOrigin}</h4>
        <p>{formatMoney(Number(itemPrice))}</p>
        <div className="buttonDiv">
          <AddToCartComponent
            handler={{
              decrement,
              increment,
              quantity,
              itemId,
              cartHandler
            }}
          />
          {!userId ? (
            <React.Fragment />
          ) : !wishlist[itemId] ? (
            <WishListButton
              ids={{productId: itemId, userId}}
              handler={addToWishList}
              filledHeart="false"
            />
          ) : (
            <WishListButton
              ids={{productId: itemId, userId}}
              handler={removeFromWishList}
              filledHeart="true"
              wishlist={wishlist}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    wishlistMap: state.wishlist.wishlistMap
  }
}

const mapDispatch = dispatch => {
  return {
    cartHandler: (itemId, quantity) => {
      dispatch(addToCartThunk(itemId, quantity))
    },
    addWishlist(user) {
      dispatch(addWishlist(user))
    },
    removeWishlist(user) {
      dispatch(removeWishlist(user))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
