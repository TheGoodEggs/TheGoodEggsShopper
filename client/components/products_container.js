import React from 'react'
import {connect} from 'react-redux'
import {allProductsThunk} from '../store/products'
import {getWishlist} from '../store/wishlist'
import AllProducts from './products'

class AllProductsContainer extends React.Component {
  componentDidMount() {
    if (this.props.user.currentUser.id) {
      this.props.getWishlist(this.props.user.currentUser.id)
    }
    this.props.loadProducts()
  }

  render() {
    return (
      <div className="allProductsdiv">
        {this.props.products.map(product => {
          const {name, price, origin, description, image, id, stock} = product
          return (
            <AllProducts
              key={id}
              item={{
                name,
                price,
                origin,
                description,
                image,
                id,
                stock
              }}
              cartHandler={this.props.addToCartThunk}
              user={{userId: this.props.user.currentUser.id}}
            />
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    wishlist: state.wishlist,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts() {
      dispatch(allProductsThunk())
    },
    getWishlist(userId) {
      dispatch(getWishlist(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProductsContainer)
