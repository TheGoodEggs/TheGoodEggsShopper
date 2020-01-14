const router = require('express').Router()
const {Product, Category} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log('REQ DOT QUERY ID ====> ', req.query.categoryId)
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
// do we want to Admin to update the product? What do we want to update if we do?

// update and add also!

router.delete('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Product.findById(productId)
    if (!product) {
      res.send('No Product Found!')
    } else {
      await Product.distroy({
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
