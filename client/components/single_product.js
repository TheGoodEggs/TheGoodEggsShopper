import React, {Component} from 'react'
import {formatMoney} from '../utils'

const SingleProductComponent = props => {
  console.log('props.product.id =======>', props.product)
  return (
    props.product && (
      <div>
        <h2>{props.product.name}</h2>
        <ul>
          <img src={props.product.image} />
          <li>Price: {formatMoney(Number(props.product.price))}</li>
          <li>About: {props.product.description}</li>
        </ul>
        <div>
          <button type="button" onClick={() => props.handleIncrement()}>
            +
          </button>
          <div>{props.count}</div>
          <button type="button" onClick={() => props.handleDecrement()}>
            -
          </button>
          <button
            type="button"
            onClick={() => {
              props.cartHandler(props.product.id, props.count)
              props.resetCount()
            }}
          >
            <i className="fa fa-shopping-cart fa-2x" />
          </button>
        </div>
      </div>
    )
  )
}

export default SingleProductComponent
