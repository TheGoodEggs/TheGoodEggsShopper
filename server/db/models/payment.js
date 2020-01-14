const Sequelize = require('sequelize')
const db = require('../db')

const payment = db.define('payment', {
  type: {
    type: Sequelize.String,
    allowNull: false
  }
})

module.exports = payment
