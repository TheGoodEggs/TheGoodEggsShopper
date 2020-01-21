import React, {Component} from 'react'
import {connect} from 'react-redux'
import getOrderHistory from '../store/user.js'
import axios from 'axios'

class OrderHistory extends Component {
  componentDidMount() {}

  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <h4>Here are your the eggs you purchased</h4>
        {/* map through all the user's orders to display */}
        {/* <ul>{this.props.orders}</ul> */}
        {/* {this.props.orders.map(function(currentOrder) {
          return (
            <ul key={currentOrder.id}>
              <div>{this.props.orders.id}</div>
            </ul>
          )
        })} */}
      </div>
    )
  }
}

const mapState = function(state) {
  return {
    orders: state.user.orders
  }
}

const mapDispatch = function(dispatch) {
  return {
    loadUserOrders: function(orders) {
      dispatch(getOrderHistory(orders))
    }
  }
}

const orderHistoryConnect = connect(mapState, mapDispatch)(OrderHistory)
export default orderHistoryConnect
