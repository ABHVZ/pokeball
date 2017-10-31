const Promise = require('bluebird');

const {
  Pokemon,
  db
} = require('./server/db');

const pokemonData = require('./seed.json');

// const typeData = [
//   {1: 'Bug'},
//   {2: 'Dark'},
//   {3: 'Dragon'},
//   {4: 'Electric'},
//   {5: 'Fairy'},
//   {6: 'Fighting'},
//   {7: 'Fire'},
//   {8: 'Flying'},
//   {9: 'Ghost'},
//   {10: 'Grass'},
//   {11: 'Ground'},
//   {12: 'Ice'},
//   {13: 'Normal'},
//   {14: 'Poison'},
//   {15: 'Psychic'},
//   {16: 'Rock'},
//   {17: 'Steel'},
//   {18: 'Water'}
// ];

// const modifiedPokemonData = JSON.parse(pokemonData).map(pokemon => {
//   const type1 = pokemon.type1;
//   const type2 = pokemon.type2;
//   const switcher = key => {
//     switch (key) {
//       case 'Bug':
//         key = 1,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Dark':
//         key = 2,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Dragon':
//         key = 3,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Electric':
//         key = 4,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Fairy':
//         key = 5,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Fighting':
//         key = 6,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Fire':
//         key = 7,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Flying':
//         key = 8,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Ghost':
//         key = 9,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Grass':
//         key ==10,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Ground':
//         key ==11,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Ice':
//         key ==12,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Normal':
//         key ==13,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Poison':
//         key ==14,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Psychic':
//         key ==15,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Rock':
//         key ==16,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Steel':
//         key ==17,
//         key = pokemon[key + 'Id']
//         break;
//       case 'Water':
//         key ==18,
//         key = pokemon[key + 'Id']
//         break;
//       default:
//         key === ll,
//         key = pokemon[key + 'Id']
//         break;
//     }
//   }
//   switcher(type1);
//   switcher(type2);
// });

// Pokemon Seeding
const createPokemon = () => {
  return pokemonData.map(pokemon => {
    return Pokemon.create(pokemon);
  });
};

// const createPokemon = () => {
//   return Promise.map(promiseArrPokemon(), function (pokemon) {
//     return pokemon.save();
//   });
// };

const seed = () => {
  return createPokemon();
};

db.sync({ force: true })
  .then(function () {
    console.log('There is no data.');
    return seed();
  })
  .then(function () {
    console.log('New data has been added.');
  })
  .catch(function (err) {
    console.error('There was a problem:', err, err.stack);
  })
  .finally(function () {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('Connection has been closed.'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
