import React, {Component} from 'react'
import {formatMoney} from '../utils'

const SingleProductComponent = props => {
  return (
    props.product && (
      <div className="singleEggDiv">
        <img className="singleEggImg" src={props.product.image} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>{props.product.name}</h3>
        <p>Origin: {props.product.origin}</p>
        <p>Price: {formatMoney(Number(props.product.price))}</p>
        <p>About: {props.product.description}</p>
        <div>
          <button type="button" onClick={() => props.handleIncrement()}>
            +
          </button>
          <button type="button">{props.count}</button>
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
            <i className="fa fa-shopping-cart" />
          </button>
        </div>
      </div>
    )
  )
}

export default SingleProductComponent
