import React from 'react'
import {Link} from 'react-router-dom'

const AllProducts = props => {
  return (
    <div className="allProductsInnerDiv">
      <Link to={`/products/${props.item.id}`}>
        <img src={props.item.image} />
        <h3>{props.item.name}</h3>
      </Link>
      <h4>{props.item.origin}</h4>
      <h4>$ {props.item.price / 100}</h4>
      <button
        type="button"
        onClick={() => props.cartHandler.add(props.item.id)}
      >
        <i className="fa fa-shopping-cart fa-2x" />
      </button>
      {!props.item.wishlist ? (
        <button
          type="button"
          onClick={() =>
            props.wishlistHandler.add({id: 1, productId: props.item.id})
          }
        >
          <i className="fa fa-heart fa-2x" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() =>
            props.wishlistHandler.remove({id: 1, productId: props.item.id})
          }
        >
          {' '}
          <i className="fa fa-heart-o fa-2x" />{' '}
        </button>
      )}
    </div>
  )
}

export default AllProducts
