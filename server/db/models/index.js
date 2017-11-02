const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Pokemon = require('./pokemon.js');

Order.belongsTo(Address);
Order.belongsTo(User);
Pokemon.hasMany(Order);
User.hasOne(Address);

module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon
};
