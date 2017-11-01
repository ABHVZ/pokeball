const router = require('express').Router()
const { Pokemon } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Pokemon.findAll()
        .then(allPokemon => res.json(allPokemon))
        .catch(next)
})