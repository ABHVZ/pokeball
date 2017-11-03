const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
    console.log("CART")
    console.log('req', req)
    if (!req.session.cart) req.session.cart = [];
    else {
        req.session.cart.push(1);
    }
    
    console.log('after', req.session)
    res.send('hello')
})
