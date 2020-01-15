const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  wishlist: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  purchaseDate: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  shipped: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  tracking: {
    type: Sequelize.STRING
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  purchasedTotal: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

Order.findCurrentOrder = function(userId) {
  return this.findAll({
    where: {
      id: userId,
      shipped: false
    }
  })
}

module.exports = Order
