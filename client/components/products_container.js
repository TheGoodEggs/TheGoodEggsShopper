import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allProductsThunk} from '../store/products'
import AllProducts from './products'

class AllProductsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          const {name, price, description, image} = product
          return (
            <AllProducts
              key={product.id}
              item={{name, price, description, image}}
            />
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts() {
      dispatch(allProductsThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(AllProductsContainer)
