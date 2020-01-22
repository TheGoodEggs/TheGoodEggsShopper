import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrderHistory} from '../store/user.js'

class OrderHistory extends Component {
  componentDidMount() {
    this.props.loadUserOrders(this.props.currentUser.id)
  }

  render() {
    return this.props.orders.length > 1 ? (
      <div>
        <h4>Here are the eggs you purchased!</h4>
        {this.props.orders.map(function(currentOrder) {
          return (
            <ul key={currentOrder.id}>
              <div>
                <ul>Order ID: {currentOrder.id}</ul>
                <ul>Total: ${currentOrder.purchasedTotal}</ul>
                <ul>Tracking Code: {currentOrder.tracking}</ul>
              </div>
            </ul>
          )
        })}
      </div>
    ) : (
      <h4> You have no past orders! Shop now! </h4>
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
    loadUserOrders: function(id) {
      dispatch(getOrderHistory(id))
    }
  }
}

const orderHistoryConnect = connect(mapState, mapDispatch)(OrderHistory)
export default orderHistoryConnect
