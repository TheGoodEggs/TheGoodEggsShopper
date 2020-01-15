const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  purchaseDate: {
    type: Sequelize.DATE
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
    type: Sequelize.INTEGER
  }
})

Order.findCurrentOrder = async function(userId) {
  const foundOrder = await this.findAll({
    where: {
      userId: userId,
      shipped: false
    }
  })
  return foundOrder
}

module.exports = Order
