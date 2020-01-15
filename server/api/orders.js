const router = require('express').Router()
const {Order, OrderProducts} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll()
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

router.get('/users/:userId', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        wishlist: req.query.wishlist || false
      }
    })
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      const currentOrder = await Order.findCurrentOrder(req.user.id)
      const addedOrder = await OrderProducts.create({
        orderId: currentOrder[0].id,
        quantity: req.body.quantity,
        productId: req.body.productId
      })
      res.json(addedOrder)
    }
    //add to guest cart
    //else()
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const orderId = req.params.id
    const singleOrder = await Order.findByPk(orderId)
    res.json(singleOrder)
  } catch (error) {
    next(error)
  }
})
