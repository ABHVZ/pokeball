const router = require('express').Router()
module.exports = router
router.use('/users', require('./users'))
router.use('/pokemon', require('./pokemon'))
router.use('/cart', require('./cart'))
router.use('/review', require('./review'))
//chage back to /pokemon

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
