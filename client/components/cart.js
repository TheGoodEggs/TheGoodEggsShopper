import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllProducts from './products'

const Cart = ({products, total, clear}) => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  const view = cartItem ? (
    cartItem.map(p => (
      <div key={p.id}>
        <p>name : {p.product.name}</p>
        <img src={p.product.image} />
        <p>price : ${p.product.price / 100}</p>
        <p>quantity : {p.quantity}</p>
      </div>
    ))
  ) : (
    <p>You have 0 items in your cart!</p>
  )

  return (
    <div>
      <h2>EGG CART</h2>
      <div>{view}</div>
      <button type="button" onClick={() => clear()}>
        clear cart
      </button>
      <p>
        TOTAL ${' '}
        {cartItem &&
          cartItem
            .map(p => p.product.price / 100 * p.quantity)
            .reduce((a, b) => a + b, 0)}
      </p>
      <Link to="/checkout">
        <button type="button">Check Out</button>
      </Link>
    </div>
  )
}

export default Cart
