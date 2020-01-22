import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllProducts from './products'
import {formatMoney} from '../utils'

const Cart = ({products, clear}) => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  let total
  let quant

  if (cartItem) {
    total = cartItem
      .map(p => p.product.price * p.quantity)
      .reduce((a, b) => a + b, 0)
  } else {
    total = 0
  }

  if (cartItem) {
    quant = cartItem.map(p => p.quantity).reduce((a, b) => a + b, 0)
  } else {
    quant = 0
  }

  const itemsInCart = cartItem ? (
    <div>
      <table>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Product Subtotal</th>
        </tr>

        {cartItem.map(p => (
          <tr key={p.id}>
            <td>
              <img className="cartImg" src={p.product.image} />
            </td>
            <td>{p.product.name}</td>
            <td>{formatMoney(Number(p.product.price))}</td>
            <td>{p.quantity}</td>
            <td>{formatMoney(Number(p.product.price * p.quantity))}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : (
    <div className="emptyCartMsg">
      <h5>You have 0 items in your cart!</h5>
    </div>
  )

  return (
    <div>
      <div className="cartHeader">
        <h2>Eggs in your cart</h2>
      </div>
      <div>{itemsInCart}</div>
      <div className="cartTotal">
        <p>Total Quantity: {quant}</p>
        <p>
          Total Amount: {formatMoney(Number(total))}
          {/* {cartItem &&
          cartItem
            .map(p => p.product.price * p.quantity)
            .reduce((a, b) => a + b, 0)} */}
        </p>
        <button className="cartButton" type="button" onClick={() => clear()}>
          Clear Cart
        </button>
        <Link to="/checkout">
          <button type="button" className="cartButton">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
