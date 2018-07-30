const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use('/reviews', require('./reviews'))

router.use('/ships', require('./ships'))

router.use('/cart', require('./cart'))

router.use('/wishlist', require('./wishlist'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
