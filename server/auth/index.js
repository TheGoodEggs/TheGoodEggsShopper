const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', async (req, res, next) => {
  console.log('I AM HERE')
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    let userInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone
    }
    const user = await User.create(userInfo)
    //instantiate a cart when a user signs up
    // const createOrder = await Order.create(req.body)
    // createOrder.userId = user.id
    // await createOrder.save()
    req.login(user, err => {
      if (err) {
        next(err)
      } else {
        res.redirect('/')
      }
    })
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
