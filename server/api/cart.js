const router = require('express').Router()
module.exports = router

router.post('/', (req, res, next) => {
    console.log("CART")
    console.log('req', req)
    const { pokemon } = req.body
    if (!req.session.cart) req.session.cart = [];
    else {
        req.session.cart.push(pokemon);
    }
    
    console.log('after', req.session)
    res.send('hello')
})
