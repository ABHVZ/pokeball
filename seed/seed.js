//get script folder back

const Promise = require('bluebird');

const db = require('../server/db');
const { Pokemon, User, Review } = require('../server/db/models')


const pokemonData = require('./seed.json');

const userData = [
  {
    email: 'veekas@veekasmeansprogress.com',
    firstName: 'Veekas',
    lastName: 'Shrivastava',
    password: '123456abcde',
    sex: 'Male',
    isAdmin: false,
  },
  {
    email: 'bryanle52@gmail.com',
    firstName: 'Bryan',
    lastName: 'Le',
    password: '123abc',
    sex: 'Male',
    isAdmin: false
  }, {
    email: 'hkai.liu@gmail.com',
    firstName: 'Nick',
    lastName: 'Liu',
    password: '135ace',
    sex: 'Male',
    isAdmin: false
  }, {
    email: 'amIanAdmin@gmail.com',
    firstName: 'Turtle',
    lastName: 'B',
    password: 'iamadmin',
    sex: 'Female',
    isAdmin: true
  }, {
    email: 'iamnonbinary@gmail.com',
    firstName: 'Zola',
    lastName: 'F',
    password: 'zolaf',
    sex: 'Non-binary',
    isAdmin: false
  },
  {
    email: 'iamfemale@gmail.com',
    firstName: 'Sophie',
    lastName: 'Schwartzmann',
    password: 'iamadmin',
    sex: 'Female',
    isAdmin: false
  }
]

const reviewData = [
  {
    title: 'evil creature',
    content: 'Yveltal has a pointed, beak-like snout. Black horns extend from above its blue eyes, with a sharply curved portion pointing forward and thinner prongs facing the rear. A feathery gray ruff encircles its neck and billows out over its back. Yveltal has small, birdlike legs with powerful talons. Like the rest of the underside, the legs are red with black adornments, and the talons are gray. Each foot has two toes facing forward and one pointing backwards. When Yveltal\'s wings and tail are fully extended, Yveltal resembles the Latin alphabet letter Y.',
    rating: 3,
    pokemonId: 783,
    userId: 1
  },
  {
    title: 'A miraculous experience',
    content: 'Fletchling are small, avian Pokémon similar in appearance to robins. They have a reddish-orange head with a triangular yellow mark on the back of each eye. Their body and wings are gray, and there are white tips on the wings. They have long, black tail with a white "v"-shaped marking near the tip. The tail ends in two points, and has two feathers sticking out at the base, giving the impression of the fletching on the end of an arrow. Their legs, beak, and eyes are black. The legs are thin and spindly, with two toes facing forward and one pointing backward on each foot.',
    rating: 5,
    pokemonId: 68,
    userId: 2
  },
  {
    title: 'My time with Yveltal was simply incredible',
    content: 'Yveltal is a large Pokémon with avian and draconian traits. Its body is dark in coloration and is adorned with grayish patterns along the underside. Yveltal\'s wings have three spikes on each extending along the bottom edges, close to where they meet the body. There are five large claws on each appendage, three of which curve inwards. Yveltal\'s underside is bright red, with branching, black markings. Similar markings are present on Yveltal\'s head and neck.',
    rating: 4,
    pokemonId: 783,
    userId: 6
  },
  {
    title: 'a thief',
    content: 'Yveltal has the power to absorb life energy. When it reaches the end of its lifespan, it expands its wings and steals all of the life energy of every living thing around it before transforming into a cocoon to sleep for 1,000 years. Yveltal is the only known Pokémon capable of learning the move Oblivion Wing.',
    rating: 3,
    pokemonId: 783,
    userId: 3
  }
]


// turn it back to async await
db.sync({ force: true })
  .then(function () {
    console.log('Dropped old pokemon, now inserting pokemon');
    return Promise.map(pokemonData, function (pokemon) {
      return Pokemon.create(pokemon);
    })
  })
  .then(function () { // does not have to be sequential
    return Promise.map(userData, function (user) {
      console.log('Creating new users');
      return User.create(user);
    })
  })
  .then(function () { // does not have to be sequential
    return Promise.map(reviewData, function (review) {
      console.log('Creating new reviews');
      return Review.create(review);
    })
  })
  .then(function () { //write finally db.close
    console.log('Finished inserting data (press ctrl-c to exit)');
  })
  .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
  });

