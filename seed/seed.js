const Promise = require('bluebird');

const db = require('../server/db');
const Pokemon = require('../server/db/models').Pokemon

const data = require('./seed.json');


db.sync({force: true})
.then(function () {
  console.log("Dropped old pokemon, now inserting pokemon");
  return Promise.map(data, function (pokemon) {
    console.log(pokemon)
    return Pokemon.create(pokemon);
  })
})
.then(function () {
  console.log("Finished inserting pokemon (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});