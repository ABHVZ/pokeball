const Sequelize = require('sequelize')
const db = require('../db');

const Address = db.define('address', {
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.ENUM('AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI', 'WV','WY'),
    allowNull: false
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Address;


