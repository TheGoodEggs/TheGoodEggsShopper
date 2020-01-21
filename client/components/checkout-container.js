import React from 'react'
import {connect} from 'react-redux'
import CheckoutForm from './checkout-form-component'
import {me} from '../store/user'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shippingAddress: '',
      phoneNumber: '',
      creditCard: '',
      paymentType: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount = async () => {
    await this.props.findUser()
    const {firstName, lastName, email, address, phone} = this.props.user
    //must be inside the if statement otherwise will turn into an uncontrolled componenet
    if (this.props.user) {
      this.setState({
        firstName,
        lastName,
        email,
        shippingAddress: address,
        phoneNumber: phone
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <CheckoutForm
        handleChange={this.handleChange}
        userInfo={{
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          shippingAddress: this.state.shippingAddress,
          phoneNumber: this.state.phoneNumber,
          creditCard: this.state.creditCard,
          paymentType: this.state.paymentType
        }}
      />
      // <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
