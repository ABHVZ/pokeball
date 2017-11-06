const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Pokemon = require('./pokemon.js');
const Cart = require('./cart');
const Review = require('./review');

Order.belongsTo(Address);
Order.belongsTo(User);
Pokemon.hasMany(Order);
User.hasOne(Address);
Cart.belongsTo(User);

module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon,
    Cart: Cart,
    Review: Review
};
