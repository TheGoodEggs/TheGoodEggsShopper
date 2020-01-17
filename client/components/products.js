import React, {Component} from 'react'
import Cart from './cart'
import {addToCart} from '../store/cart'
import CartContainer from './cart_container'

export default class AllProducts extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  handleClick = id => {
    this.props.addToCart(id)
  }
  render() {
    console.log('WHAT IS products', this.props)
    return (
      <div>
        <CartContainer />
        <div>
          {this.props.products.map(product => {
            return (
              <div key={product.id}>
                <img src={product.image} />
                <h3>{product.name}</h3>
                <h4>{product.origin}</h4>
                <h4>{product.price}</h4>
                <button
                  type="button"
                  onClick={() => this.handleClick(product.id)}
                >
                  Add to cart!
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

// cartItems={this.props.products} removeFromCart={this.handelRemove}
