import React from 'react'

const AllProducts = props => {
  return (
    <div>
      <img src={props.item.image} />
      <h3>{props.item.name}</h3>
      <h4>{props.item.origin}</h4>
      <h4>{props.item.price}</h4>
      <button type="button">Add to cart!</button>
    </div>
  )
}

export default AllProducts
