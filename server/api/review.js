const router = require('express').Router()
const { Review, User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Review.findAll({
        include: [
            {
                model: User,
                attributes: ['firstName', 'lastName', 'profilePic']

            }
        ]
    })
        .then(reviews => res.json(reviews))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Review.create(req.body)
        .then(review => res.json(review))
        .catch((err) => { console.error(err) });
});
