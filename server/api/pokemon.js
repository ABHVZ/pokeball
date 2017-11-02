const router = require('express').Router()
const { Pokemon } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Pokemon.findAll()
        .then(allPokemon => res.json(allPokemon))
        .catch(next)
})

// Retrieve single Pokemon
router.get('/:id', (req, res, next) => {
	console.log('Getting single pokemon...');
	const { id } = req.params;
	Pokemon.findOne({where: { id }})
		.then(pokemon => {
				res.json(pokemon)
			})
		.catch(next)
})