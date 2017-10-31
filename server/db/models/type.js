const Sequelize = require('sequelize');
const db = require('../index');

const Type = db.define('type', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Type;
