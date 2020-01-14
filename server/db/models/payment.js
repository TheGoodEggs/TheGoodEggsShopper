const Sequelize = require('sequelize')
const db = require('../db')

const payment = db.define('payment', {
  name: {
    type: Sequelize.String
  }
})

module.exports = payment
