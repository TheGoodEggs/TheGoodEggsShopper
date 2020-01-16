import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allProductsThunk} from '../store/products'
import AllProducts from './products'

const AllProductsContainer = props => {
  return (
    <AllProducts products={props.products} loadProducts={props.loadProducts} />
  )
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
