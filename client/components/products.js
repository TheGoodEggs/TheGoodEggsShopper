import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    if (this.state.count < this.props.item.stock) {
      this.setState(previousState => ({
        count: previousState.count + 1
      }))
    }
  }
  decrement() {
    if (this.state.count >= 1) {
      this.setState(previousState => ({
        count: previousState.count - 1
      }))
    }
  }
  render() {
    return (
      <div className="allProductsInnerDiv">
        <Link to={`/products/${this.props.item.id}`}>
          <img src={this.props.item.image} />
          <h3>{this.props.item.name}</h3>
        </Link>
        <h4>{this.props.item.origin}</h4>
        <h4>{formatMoney(Number(this.props.item.price))}</h4>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <div>{this.state.count}</div>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.cartHandler(this.props.item.id, this.state.count)
            this.setState({count: 0})
          }}
        >
          <i className="fa fa-shopping-cart fa-2x" />
        </button>
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

export default AllProducts
