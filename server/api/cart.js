const router = require('express').Router();

module.exports = router

router.post('/', (req, res, next) => {
    // console.log("I am here in cart api see req.session", req.session)
    //req.session.cart = []
    if (!req.session.cart) {
        console.log("GETTING A CART")
        req.session.cart = [];
    }
    console.log("ADDING ITEM TO CART")
    let id = req.session.cart.length + 1;
    req.body.id = id;
    req.session.cart.push(req.body)
    console.log("ADDING DONE")
    console.log(req.session.cart)
    res.json(req.session.cart)
})

router.put('/:itemId', (req, res, next) => {
    // return Artist.findById(Number(req.params.artistId))
    //     .then((artist) => {
    //         return artist.update(req.body, { fields: ['biography', 'tags', 'masterpiece'] })
    //     })
    //     .then((updatedArtist) => {
    //         res.json(updatedArtist);
    //     })
    //     .catch((err) => { console.error(err) })
    req.session.cart = req.session.cart.map(item => {
        if (item.id === req.body.id) {
            return req.body;
        } else {
            return item;
        }
    })
    res.json(req.body)
});

router.get('/', (req, res, next) => {
    if (!req.session.cart) req.session.cart = [];
    res.json(req.session.cart)
})