const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'shippingAddress', 'billingAddress']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.userId },
    returning: true
  })
    .then(updatedUser => {
      res.json(updatedUser[1][0])})
    .catch(next)
})
