const router = require('express').Router()
const {Product, Category} = require('../db/models')
const {isAdmin, isUser} = require('./middleware')
module.exports = router

router.get('/', async (req, res, next) => {
  let catId = req.query.categoryId
  try {
    if (catId === undefined) {
      const products = await Product.findAll({
        include: [
          {
            model: Category
          }
        ]
      })
      res.json(products)
    } else {
      const products = await Product.findAll({
        include: [
          {
            model: Category
          }
        ],
        where: {
          categoryId: catId
        }
      })
      res.json(products)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/')

router.get('/:productId', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId, {
      include: [
        {
          model: Category
        }
      ]
    })
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})

// make sure only admins can add/update and delete

router.delete('/:productId', isAdmin, async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Product.findById(productId)
    if (!product) {
      res.send('No Product Found!')
    } else {
      await Product.destroy({
        where: {
          id: productId
        }
      })
    }
    res.json(productId)
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', isAdmin, async (req, res, next) => {
  try {
    await Product.update({
      name: req.body.name,
      price: req.body.price,
      origin: req.body.origin,
      stock: req.body.price
    })
    const updatedProduct = await Product.findByPk(req.params.productId)
    res.json(updatedProduct)
  } catch (err) {
    next(err)
  }
})
