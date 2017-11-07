//get script folder back

const Promise = require('bluebird');

const db = require('../server/db');
const Pokemon = require('../server/db/models').Pokemon
const User = require('../server/db/models').User

const data = require('./seed.json');

const userData = [
  {
    email: 'veekas@veekasmeansprogress.com',
    firstName: 'Veekas',
    lastName: 'Shrivastava',
    password: 'veekachu!'
  },
  {
    email: 'bryanle52@gmail.com',
    firstName: 'Bryan',
    lastName: 'Le',
    password: '123'
  }, {
    email: 'hkai.liu@gmail.com',
    firstName: 'Nick',
    lastName: 'Liu',
    shippingAddress: {
      zipcode: '12345',
      street1: '123 Fake Street',
      street2: '1st Floor',
      city: 'New York',
      state: 'NY',
      telephone: '1234567890'
    },
    billingAddress: {
      zipcode: '67890',
      street1: '456 Real Road',
      street2: '2nd Floor',
      city: 'New York',
      state: 'NY',
      telephone: '0987654321'
    },
    password: '123'
  },
]

// turn it back to async await
db.sync({ force: true })
  .then(function () {
    console.log('Dropped old pokemon, now inserting pokemon');
    return Promise.map(data, function (pokemon) {
      return Pokemon.create(pokemon);
    })
  })
  .then(function () { // does not have to be sequential
    return Promise.map(userData, function (user) {
      console.log('Creating new users');
      return User.create(user);
    })
  })
  .then(function () { //write finally db.close
    console.log('Finished inserting pokemon (press ctrl-c to exit)');
  })
  .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
  });

