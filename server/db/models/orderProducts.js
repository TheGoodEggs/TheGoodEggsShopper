const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('order-products', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = OrderProducts
