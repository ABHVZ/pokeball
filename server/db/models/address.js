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
    type: Sequelize.ENUM('AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'),
    allowNull: false
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isPhoneNumber(number) {
        if (!(/^[\d]{10}$/).test(number)) {
          throw new Error('Please input a valid 10 digit phone-number without spaces and/or dashes');
        }
      }
    }
  }
})

module.exports = Address;

