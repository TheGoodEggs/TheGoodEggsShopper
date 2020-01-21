//checks if admin
const isAdmin = (req, res, next) => {
  try {
    console.log(req.user)
    if (req.user) {
      if (req.user.admin) next()
      console.log('Only admin access')
      return res.status(300).json('Only admin access ')
    } else {
      console.log('Please sign in')
      return res.status(400).json('Please sign in')
    }
  } catch (error) {
    next(error)
  }
}
module.exports = isAdmin
