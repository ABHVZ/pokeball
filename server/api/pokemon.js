const router = require('express').Router()
const { Pokemon, Review, User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Pokemon.findAll({
        include: [
            {
                model: Review,
                include: [
                    {
                        model: User,
                        attributes: ['firstName', 'lastName', 'profilePic']
                    }
                ]
            }
        ]
    })
        .then(allPokemon => res.json(allPokemon))
        .catch(next)
})

// Retrieve single Pokemon
router.get('/:id', (req, res, next) => {
    console.log('Getting single pokemon...');
    const { id } = req.params;
    Pokemon.findOne({ where: { id } })
        .then(pokemon => {
            res.json(pokemon)
        })
        .catch(next)
})

router.get('/search/:input', (req, res, next) => {
    Pokemon.findAll({
        limit: 10,
        where: {
            name: { $ilike: `%${req.params.input}%` },
        }
    })
        .then(searchedPokemon => res.json(searchedPokemon))
        .catch(next)
})
