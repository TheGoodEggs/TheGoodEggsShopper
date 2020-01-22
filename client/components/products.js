import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
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
        <h4>Origin: {this.props.item.origin}</h4>
        <p>{formatMoney(Number(this.props.item.price))}</p>
        <div className="buttonDiv">
          <button type="button" onClick={this.decrement}>
            <strong> - </strong>
          </button>

          <button type="button">{this.state.count}</button>

          <button type="button" onClick={this.increment}>
            <strong> + </strong>
          </button>

          <button
            type="button"
            onClick={() => {
              this.props.cartHandler(this.props.item.id, this.state.count)
              this.setState({count: 1})
            }}
          >
            <i className="fa fa-shopping-cart" />
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

export default AllProducts
