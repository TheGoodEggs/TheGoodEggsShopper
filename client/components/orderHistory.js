import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrderHistory} from '../store/user.js'
import {Link} from 'react-router-dom'

class OrderHistory extends Component {
  componentDidMount() {
    this.props.loadUserOrders(this.props.currentUser.id)
  }

  render() {
    return this.props.orders.length > 1 ? (
      <div className="orderhistory">
        <p>Eggs you've purchased:</p>
        {this.props.orders.map(function(currentOrder) {
          return (
            <div className="orderHistoryInfo" key={currentOrder.id}>
              <p>
                Order ID: {currentOrder.id} &nbsp; &nbsp; &nbsp; Total: ${
                  currentOrder.purchasedTotal
                }
              </p>
              {/* <ul>Tracking Code: {currentOrder.tracking}</ul> */}
            </div>
          )
        })}
      </div>
    ) : (
      //if they don't, link them to the products page
      <div className="historyZero">
        <h4> You have no past orders! </h4>

        <Link to="/products">
          <button type="button" className="ShopNowButton">
            <strong>Shop Now </strong>
          </button>
        </Link>
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
    loadUserOrders: function(id) {
      dispatch(getOrderHistory(id))
    }
  }
}

const orderHistoryConnect = connect(mapState, mapDispatch)(OrderHistory)
export default orderHistoryConnect
