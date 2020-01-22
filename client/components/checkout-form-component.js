import React from 'react'
import {Link} from 'react-router-dom'
import {formatMoney} from '../utils'

const CheckoutForm = props => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  const {
    firstName,
    lastName,
    email,
    shippingAddress,
    phoneNumber,
    creditCard
  } = props.userInfo
  let total
  if (cartItem) {
    total = cartItem
      .map(p => p.product.price * p.quantity)
      .reduce((a, b) => a + b, 0)
  } else {
    total = 0
  }

  return (
    <div>
      <div>
        <table>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Product Subtotal</th>
          </tr>

          {cartItem &&
            cartItem.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product.name}</td>
                <td>{p.quantity}</td>
                <td>{formatMoney(Number(p.product.price))}</td>
                <td>{formatMoney(Number(p.product.price * p.quantity))}</td>
              </tr>
            ))}
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3> Total: $ {formatMoney(Number(total))}</h3>

      {/* {cartItem &&
          cartItem
            .map(p => p.product.price * p.quantity)
            .reduce((a, b) => a + b, 0)}{' '} */}

      <br />
      <br />
      <br />
      <br />
      <br />

      <form id="checkout" onSubmit={props.handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={props.handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={props.handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={props.handleChange}
        />
        <label>Shipping Address</label>
        <input
          type="text"
          name="shippingAddress"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={props.handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="(999)999-9999"
          value={phoneNumber}
          onChange={props.handleChange}
        />
        <label>Credit Card</label>
        <input
          type="text"
          name="creditCard"
          placeholder="####-####-####-####"
          value={creditCard}
          onChange={props.handleChange}
        />
        <button type="submit" form="checkout">
          Submit
        </button>
      </form>
    </div>
  )
}
export default CheckoutForm
