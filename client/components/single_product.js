import React, {Component} from 'react'

export default class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadProduct(8)
  }

  render() {
    const product = this.props.product

    return (
      <div>
        <ul>
          <li>{product.name}</li>
          <img src={product.image} />
          <li>Product Price: ${product.price / 100}</li>
          <li>About: {product.description}</li>
        </ul>
      </div>
    )
  }
}
