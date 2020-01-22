import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllProducts from './products'
import {formatMoney} from '../utils'

const Cart = ({products, clear}) => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  let total
  if (cartItem) {
    total = cartItem
      .map(p => p.product.price * p.quantity)
      .reduce((a, b) => a + b, 0)
  } else {
    total = 0
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
    <p>You have 0 items in your cart!</p>
  )

  return (
    <div>
      <div className="cartHeader">
        <h2>Eggs in your cart</h2>
      </div>
      <div>{itemsInCart}</div>
      <button className="cartButton" type="button" onClick={() => clear()}>
        Clear Cart
      </button>
      <p>Total Quantity</p>
      <p>
        TOTAL {formatMoney(Number(total))}
        {/* {cartItem &&
          cartItem
            .map(p => p.product.price * p.quantity)
            .reduce((a, b) => a + b, 0)} */}
      </p>
      <Link to="/checkout">
        <button type="button" className="cartButton">
          Check Out
        </button>
      </Link>
    </div>
  )
}

export default Cart
