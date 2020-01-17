import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AllProducts from './products'

const Cart = ({products, total}) => {
  const hasProducts = products.length > 0
  const view = hasProducts ? (
    products.map(product => (
      <product
        title={product.title}
        price={product.price}
        quantity={product.stock}
        key={product.id}
      />
    ))
  ) : (
    <p>NEED SOME EGGS</p>
  )

  return (
    <div>
      <h2>YO CART</h2>
      <div>{view}</div>
      <p>TOTAL{total}</p>
    </div>
  )
}

export default Cart
