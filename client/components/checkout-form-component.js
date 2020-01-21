import React from 'react'

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
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Quantity</td>
            <td>Product Subtotal</td>
          </tr>

          {cartItem &&
            cartItem.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product.name}</td>
                <td>{p.quantity}</td>
                <td>$ {p.product.price / 100}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>
        Total: ${cartItem &&
          cartItem
            .map(p => p.product.price * p.quantity)
            .reduce((a, b) => a + b, 0) / 100}{' '}
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />

      <form id="checkout">
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
          name="address"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={props.handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
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
      </form>
      <button type="submit" form="checkout">
        Submit
      </button>
    </div>
  )
}
export default CheckoutForm
