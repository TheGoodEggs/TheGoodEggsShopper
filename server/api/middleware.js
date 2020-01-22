//checks if admin
const isAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.admin) return next()
      console.log('Only admin access')
      return res.status(401).json('Only admin access')
    } else {
      console.log('Please sign in')
      return res.status(401).json('Please sign in')
    }
  } catch (error) {
    next(error)
  }
}

const isUserOrAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (parseInt(req.params.id, 10) === req.user.id) {
        return next()
      }
      if (req.user.admin) return next()
      console.log('Please sign in with an authorized account')
      return res.status(401).json('Please sign in with an authorized account')
    } else {
      console.log('Please sign in')
      return res.status(401).json('Please sign in')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isAdmin,
  isUserOrAdmin
}
