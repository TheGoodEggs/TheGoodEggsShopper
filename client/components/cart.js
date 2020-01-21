import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllProducts from './products'

const Cart = ({products, total, clear}) => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  console.log('SO CONFUSED', cartItem)
  //Need to fix the reducer before i can map
  // also maybe add a thunk for loading cart items?
  const view = cartItem ? (
    cartItem.map(p => (
      <div key={p.id}>
        <p>name : {p.product.name}</p>
        <img src={p.product.image} />
        <p>price : {p.product.price}</p>
        <p>quantity : {p.quantity}</p>
      </div>
    ))
  ) : (
    // <div>
    //   <p>EGG ====> {cartItem[0].product.name}</p>
    //   <p>$$$ ====> {cartItem[0].product.price}</p>
    // </div>
    <p>NEED SOME EGGS</p>
  )

  return (
    <div>
      <h2>EGG CART</h2>
      <div>{view}</div>
      <button type="button" onClick={() => clear()}>
        {' '}
        clear cart{' '}
      </button>
      {/* <p>TOTAL $  {cartItem.map(p => p.product.price * p.quantity).reduce((a,b) => a + b, 0)}</p> */}
    </div>
  )
}

export default Cart
