const router = require('express').Router()
const {User, Order, OrderProducts, Wishlist, Product} = require('../db/models')
const isAdmin = require('./middleware')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const addedOrder = await Order.create(req.body)
    const returnObj = {
      message: 'Order added successfully',
      order: addedOrder
    }
    res.json(returnObj)
  } catch (error) {
    next(error)
  }
})
