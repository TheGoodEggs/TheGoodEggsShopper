import React, {Component} from 'react'

export default class AllProducts extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    console.log('WHAT IS products', this.props.products)
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <img src={product.image} />
              <h3>{product.name}</h3>
              <h4>{product.price}</h4>
              <h4>{product.origin}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}
