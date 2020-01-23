import React from 'react'

const AddToCartComponent = props => {
  const {quantity, increment, decrement, cartHandler} = props.handler
  return (
    <React.Fragment>
      <button type="button" onClick={() => decrement()}>
        <strong> - </strong>
      </button>

      <button type="button">{quantity}</button>

      <button type="button" onClick={() => increment()}>
        <strong> + </strong>
      </button>

      <button type="button" onClick={cartHandler}>
        <i className="fa fa-shopping-cart" />
      </button>
    </React.Fragment>
  )
}
export default AddToCartComponent
