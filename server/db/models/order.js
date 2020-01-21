const Sequelize = require('sequelize')
const db = require('../db')
const crypto = require('crypto')

const Order = db.define('order', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creditCard: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('creditCard')
    }
  },
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
  address: {
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

Order.prototype.correctCreditCard = function(candidateCard) {
  return Order.encryptPassword(candidateCard, this.salt()) === this.creditCard()
}

Order.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Order.encryptCreditCard = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndCreditCard = order => {
  if (order.changed('creditCard')) {
    order.salt = Order.generateSalt()
    order.creditCard = Order.encryptCreditCard(order.creditCard(), order.salt())
  }
}
Order.beforeCreate(setSaltAndCreditCard)
Order.beforeUpdate(setSaltAndCreditCard)
Order.beforeBulkCreate(users => {
  users.forEach(setSaltAndCreditCard)
})
module.exports = Order
