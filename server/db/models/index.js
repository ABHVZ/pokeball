const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Pokemon = require('./pokemon.js');
const Cart = require('./cart');
const Review = require('./review');

Order.belongsTo(Address);
Order.belongsTo(User);
Pokemon.hasMany(Order);
Cart.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Pokemon);
Pokemon.hasMany(Review);

module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon,
    Cart: Cart,
    Review: Review
};
