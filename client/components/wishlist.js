import React from 'react'
import {connect} from 'react-redux'
import {getWishlist} from '../store/wishlist'

class wishlist extends React.Component {
  componentDidMount() {
    this.props.getWishlist({id: 1})
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.wishlist &&
          this.props.wishlist.map(productId => {
            return <h1 key={productId}>${productId}</h1>
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishlist: user => {
      dispatch(getWishlist(user.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wishlist)
