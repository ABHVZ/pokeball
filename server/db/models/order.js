const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('PROCESSING', 'SHIPPED', 'DELIVERED'),
  },
  total: {
    type: Sequelize.INTEGER,
  },
  orderPokemon: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
  }
})
module.exports = Order;
