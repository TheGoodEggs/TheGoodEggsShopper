const Sequelize = require('sequelize')
const db = require('../db')

const order = db.define('order', {
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
    defaultValue: null
  },
  tracking: {
    type: Sequelize.STRING
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  purchasedTotal: {
    type: Sequelize.FLOAT(10, 2),
    allowNull: false
  }
})

module.exports = order
