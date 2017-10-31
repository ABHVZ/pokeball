const User = require('./user')
const Address = require('./address')
const Order = require('./order')
const Sequelize = require('sequelize');
const Pokemon = require('./pokemon.js');

//Order: address, user, pokemon(item)
Order.hasOne(Address);
// Order.hasMany(Pokemon, {as: 'item'});
Order.belongsTo(User);
User.hasOne(Address); //possibly many in later edition


module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon
};
