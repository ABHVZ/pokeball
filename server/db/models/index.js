const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Pokemon = require('./pokemon.js');
const Review = require('./review.js');


Order.belongsTo(Address);
Address.hasMany(Order);

Order.belongsTo(User);
User.hasMany(Order);

Review.belongsTo(Pokemon);
Pokemon.hasMany(Review);

User.hasMany(Review);
Review.belongsTo(User);

//what's the user address association

module.exports = {
    Order: Order,
    Address: Address,
    User: User,
    Pokemon: Pokemon,
    Review: Review
};
