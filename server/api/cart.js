const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
    res.send(req.session.cart)
})

router.post('/', (req, res, next) => {
    const { singlePokemon, qty } = req.body;
    const pokemonId = singlePokemon.id;
    // If pokemon is not yet in cart
    if (!req.session['cart']) req.session['cart'] = {}
    if (!req.session['cart'][pokemonId]) {
        req.session['cart'][pokemonId] = {
            qty,
            pokemon: singlePokemon
        }
    }
    // If pokemon already exists in cart, add new quantity to existing quantity
    else {
        req.session.cart[pokemonId].qty += qty
    }
    // Current cart 
    console.log('req.session.cart', req.session.cart)
    res.send(req.session.cart[pokemonId])
})

/*
    Cart format
    req.sessions.cart = {
        pokemonId: {
            qty: 1,
            pokemon: { singlePokemon object }
        },
        pokemonId: {
            qty: 1,
            pokemon: { singlePokemon object }
        }
    }
*/

// Access from cart page only - edit Pokemon quantity
router.post('/edit', (req, res, next) => {
    console.log('Editing session...')
    console.log('Cart:', req.session.cart)
    // const { finalQty, singlePokemon } = req.body
    // const pokemonId = singlePokemon.id
    // req.session.cart[pokemonId].qty = finalQty
})

// Access from cart page only - delete Pokemon from cart
router.post('/delete', (req, res, next) => {
    const { singlePokemon } = req.body
    const pokemonId = singlePokemon.id
    delete req.session.cart[pokemonId]
})