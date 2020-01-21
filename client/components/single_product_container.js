import React from 'react'
import {connect} from 'react-redux'
import {singleProductThunk} from '../store/single_product'
import SingleProductComponent from './single_product'

class SingleProductContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
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
    this.setState({
      count: currentCount + 1
    })
  }
  decrement() {
    let currentCount = this.state.count
    this.setState({
      count: currentCount - 1
    })
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
    }
  }
}

export default connect(mapState, mapDispatch)(SingleProductContainer)
