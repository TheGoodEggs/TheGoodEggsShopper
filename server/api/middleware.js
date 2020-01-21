//checks if admin
const isAdmin = (req, res, next) => {
  try {
    console.log(req.user)
    if (req.user) {
      if (req.user.admin) next()
      console.log('Only admin access')
      return res.status(401).json('Only admin access ')
    } else {
      console.log('Please sign in')
      return res.status(401).json('Please sign in')
    }
  } catch (error) {
    next(error)
  }
}

const isUser = (req, res, next) => {
  try {
    console.log(req.query.params)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isAdmin,
  isUser
}
