import React, {Component} from 'react'
import {connect} from 'react-redux'
import getOrderHistory from '../store/user.js'
import axios from 'axios'

class OrderHistory extends Component {
  componentDidMount() {
    this.props.loadUserOrders(this.props.user.currentUser.id)
  }

  render() {
    console.log('PROPS', this.props.orders)
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
    orders: state.user.orders,
    currentUser: state.user.currentUser
  }
}

const mapDispatch = function(dispatch) {
  return {
    loadUserOrders: function(user) {
      dispatch(getOrderHistory(user))
    }
  }
}

const orderHistoryConnect = connect(mapState, mapDispatch)(OrderHistory)
export default orderHistoryConnect
