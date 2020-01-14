const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  price: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stock: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  Origin: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Product

// Need to associate Category
