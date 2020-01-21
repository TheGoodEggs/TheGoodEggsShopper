const router = require('express').Router()
const {User, Order, OrderProducts, Wishlist, Product} = require('../db/models')
const isAdmin = require('./middleware')
module.exports = router

//already mounted on /users

// const userNotFound = next => {
//   const err = new Error('User not found')
//   err.status = 404
//   next(err)
// }

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.send(singleUser)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/orders', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/orders', async (req, res, next) => {
  try {
    const currentOrder = await Order.findCurrentOrder(req.params.id)
    const addedOrder = await OrderProducts.create({
      orderId: currentOrder[0].id,
      quantity: req.body.quantity,
      productId: req.body.productId
    })
    res.json(addedOrder)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/orders', async (req, res, next) => {
  try {
    const currentOrder = await Order.findCurrentOrder(req.params.id)
    const changedOrder = await OrderProducts.update(
      {quantity: req.body.quantity},
      {
        where: {
          orderId: currentOrder[0].id,
          productId: req.body.productId
        }
      }
    )
    res.json(changedOrder)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/orders', async (req, res, next) => {
  try {
    const currentOrder = await Order.findCurrentOrder(req.params.id)
    const changedOrder = await OrderProducts.destroy({
      where: {
        orderId: currentOrder[0].id,
        productId: req.body.productId
      }
    })
    res.json(changedOrder)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/wishlist', async (req, res, next) => {
  try {
    const wishlist = await User.findAll({
      where: {
        id: req.params.id
      },
      include: {
        model: Product
      }
    })
    let products = []
    wishlist[0].products.map(element => {
      return products.push(element)
    })
    console.log(products)
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/wishlist/:productId', async (req, res, next) => {
  try {
    console.log(req.body)
    const deleteCount = await Wishlist.destroy({
      where: {
        userId: req.params.id,
        productId: req.params.productId
      }
    })
    res.json(deleteCount)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/wishlist', async (req, res, next) => {
  try {
    const addCount = await Wishlist.create({
      userId: req.params.id,
      productId: req.body.productId
    })
    res.json(addCount)
  } catch (error) {
    next(error)
  }
})

//update user
router.put('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id)
    const updatedUser = await foundUser.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone
    })
    res.send(updatedUser)
  } catch (error) {
    next(error)
  }
})

//remove user
router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send()
  } catch (error) {
    next(error)
  }
})
