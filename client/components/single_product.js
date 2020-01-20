import React, {Component} from 'react'
import Navbar from './navbar'

export default class SingleStudent extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.productId)
  }

  render() {
    const product = this.props.product

    return (
      <div>
        <Navbar />
        <ul>
          <li>{product.name}</li>
          <img src={product.image} />
          <li>Product Price: {product.price}</li>
          <li>About: {product.description}</li>
        </ul>
      </div>
    )
  }
}
