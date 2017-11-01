const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Pokemon = require('./pokemon.js');

Order.belongsTo(Address);
Order.belongsTo(User);
User.hasOne(Address); // maybe User.hasMany(Address) and Address.hasMany(User)
// order and pokemon have to be associated

module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon
};
