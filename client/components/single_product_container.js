import React from 'react'
import {connect} from 'react-redux'
import {singleProductThunk} from '../store/single_product'
import SingleProductComponent from './single_product'
import {addToCartThunk} from '../store/cart'

class SingleProductContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //work in progress
  increment() {
    if (this.state.count < this.props.product.stock) {
      this.setState(previousState => ({
        count: previousState.count + 1
      }))
    }
  }
  decrement() {
    if (this.state.count >= 1) {
      this.setState(previousState => ({
        count: previousState.count - 1
      }))
    }
  }

  componentDidMount = async () => {
    await this.props.loadProduct()
  }

  render() {
    return (
      this.props.product && (
        <SingleProductComponent
          product={this.props.product}
          handlechange={this.handleChange}
          count={this.state.count}
          handleIncrement={this.increment}
          handleDecrement={this.decrement}
          cartHandler={this.props.addToCartThunk}
          resetCount={() => this.setState({count: 1})}
        />
      )
    )
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    loadProduct() {
      dispatch(singleProductThunk(ownProps.match.params.productId))
    },
    addToCartThunk(productId, count) {
      dispatch(addToCartThunk(productId, count))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleProductContainer)
