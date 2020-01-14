const Sequelize = require('sequelize')
const db = require('../db')

const promo = db.define('promo', {
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  discount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = promo
