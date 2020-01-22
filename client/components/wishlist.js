import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'

class AllWishlist extends React.Component {
  render() {
    return (
      <div className="allProductsInnerDiv">
        <Link to={`/products/${this.props.item.id}`}>
          <img src={this.props.item.image} />
          <h3>{this.props.item.name}</h3>
        </Link>
        <h4>{this.props.item.origin}</h4>
        <h4>{formatMoney(Number(this.props.item.price))}</h4>
        {!this.props.item.wishlist ? (
          <button
            type="button"
            onClick={() =>
              this.props.wishlistHandler.add({
                id: this.props.user.userId,
                productId: this.props.item.id
              })
            }
          >
            <i className="fa fa-heart fa-2x" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              this.props.wishlistHandler.remove({
                id: this.props.user.userId,
                productId: this.props.item.id
              })
            }
          >
            {' '}
            <i className="fa fa-heart-o fa-2x" />{' '}
          </button>
        )}
      </div>
    )
  }
}

export default AllWishlist
