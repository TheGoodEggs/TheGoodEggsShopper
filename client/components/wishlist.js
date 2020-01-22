import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'

class AllWishlist extends React.Component {
  render() {
    return (
      <div className="allWishOutDiv">
        <div className="allWishInnerDiv">
          <Link to={`/products/${this.props.item.id}`}>
            <img src={this.props.item.image} />
            <h3>{this.props.item.name}</h3>
          </Link>
          {/* <h4>{this.props.item.origin}</h4> */}
          <p>{formatMoney(Number(this.props.item.price))}</p>
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
              <i className="fa fa-heart" />
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
              <i className="fa fa-heart-o" />{' '}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default AllWishlist
