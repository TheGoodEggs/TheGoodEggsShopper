import React, {Component} from 'react'

export default class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadProduct(8)
  }

  render() {
    console.log('this dot props', this.props)
    console.log('TYPE OF', typeof this.props.productId)
    console.log('state', this.state)
    const product = this.props.product

    return (
      <div>
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
