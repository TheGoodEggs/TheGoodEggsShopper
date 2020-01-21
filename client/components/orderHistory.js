import React, {Component} from 'react'
import {connect} from 'react-redux'
import getOrderHistory from '../store/user.js'

class OrderHistory extends Component {
  //   componentDidMount() {
  //     this.props.loadUserOrders()
  //   }

  render() {
    console.log('PROPS - order history', this.props)
    return (
      <div>
        <h4>Here are your the eggs you purchased</h4>
        {/* map through all the user's orders to display */}
        {/* <ul>{this.props.orders}</ul> */}
      </div>
    )
  }
}

const mapState = function(state) {
  return {
    orders: state.userOrders
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
