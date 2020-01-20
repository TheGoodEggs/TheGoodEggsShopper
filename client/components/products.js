import React from 'react'
import {Link} from 'react-router-dom'

const AllProducts = props => {
  console.log(props)
  return (
    <div>
      <Link to={`/products/${props.item.id}`}>
        <img src={props.item.image} />
        <h3>{props.item.name}</h3>
      </Link>
      <h4>{props.item.origin}</h4>
      <h4>{props.item.price}</h4>
      <button
        type="button"
        onClick={() => props.cartHandler.add(props.item.id)}
      >
        Add to cart!
      </button>
      {!props.item.wishlist ? (
        <button
          type="button"
          onClick={() =>
            props.wishlistHandler.add({id: 1, productId: props.item.id})
          }
        >
          Add to wishlist
        </button>
      ) : (
        <button
          type="button"
          onClick={() =>
            props.wishlistHandler.remove({id: 1, productId: props.item.id})
          }
        >
          {' '}
          Remove from wishlist{' '}
        </button>
      )}
    </div>
  )
}

export default AllProducts
