const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

//already mounted on /users

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

//add user
router.post('/', async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body)
    res.send(createdUser)
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
router.delete('/:id', async (req, res, next) => {
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
