const router = require('express').Router()
module.exports = router

router.post('/', (req, res, next) => {
    // console.log('this is body: ', req.body)
    // console.log('this is previous session', req.session.cart)
    let pokemonObj = req.body.singlePokemon
    if (!req.session.cart) {req.session.cart = []}
    else {
        let existingPokemons = [];
        req.session.cart.forEach(array => existingPokemons.push(array[0].id));
        if (existingPokemons.indexOf(pokemonObj.id) !== -1) {
            req.session.cart
        }
        req.session.cart.push([pokemonObj, qty]);
    }
    console.log('this is now session', req.session.cart);
    res.sendStatus(200)
})
