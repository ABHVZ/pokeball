const router = require('express').Router()
module.exports = router

router.post('/', (req, res, next) => {
    // console.log('this is body: ', req.body)
    // console.log('this is previous session', req.session.cart)
    if (!req.session.cart) {req.session.cart = []}
    else { req.session.cart.push(req.body) }
    console.log('this is now session', req.session.cart);
    res.sendStatus(200)
})
