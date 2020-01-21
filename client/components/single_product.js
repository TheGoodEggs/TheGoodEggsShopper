import React, {Component} from 'react'

const SingleProductComponent = props => {
  return (
    props.product && (
      <div>
        <h2>{props.product.name}</h2>
        <ul>
          <img src={props.product.image} />
          <li>Product Price: ${props.product.price / 100}</li>
          <li>About: {props.product.description}</li>
        </ul>
        <button type="button" onClick={() => props.handleIncrement()}>
          +
        </button>
        <div>{props.count}</div>
        <button type="button" onClick={() => props.handleDecrement()}>
          -
        </button>
      </div>
    )
  )
}

export default SingleProductComponent
