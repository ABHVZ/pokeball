const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
    res.json(req.session.cart)
})

router.post('/', (req, res, next) => {
    const { pokemon, qty } = req.body;
    const pokemonId = pokemon.id;
    // If pokemon is not yet in cart
    if (!req.session['cart']) req.session['cart'] = {}
    if (!req.session['cart'][pokemonId]) {
        req.session['cart'][pokemonId] = {
            qty,
            pokemon
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
        }
    }
*/

// Access from cart page only - edit Pokemon quantity
router.put('/', (req, res, next) => {
    const { qty, id } = req.body
    // console.log('req.sessions.cart', req.session.cart)
    req.session.cart[id].qty = qty
    console.log(req.session.cart)
    res.send(req.session.cart)
})

// Access from cart page only - delete Pokemon from cart
router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    console.log('req.body', req.body)
    console.log("Session - Deleting")
    delete req.session.cart[id]
    console.log(req.session.cart)
      console.log('id', id)
    res.send(req.session.cart)
})