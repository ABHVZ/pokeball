const Sequelize = require('sequelize');
const db = require('./db');

const User = require('./user')
const Address = require('./address')
const Order = require('./order')
const Pokemon = require('./pokemon')

//Order: address, user, pokemon(item)
Order.hasOne(Address);
Order.hasMany(Pokemon, {as: 'item'});
Order.hasOne(User);

//User: order, address
User.hasMany(Order);
User.hasOne(Address); //possibly many in later edition

//Address:
//no associations needed

//Types:
//no associations needed
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User
}
