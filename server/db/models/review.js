const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT,
        validate: {
            atLeast(text) {
                if (text.length < 50) {
                    throw new Error('All reviews must be at least 50 characters');
                }
            }
        }
    },
    rating: {
        type: Sequelize.INTEGER,
        validate: {min: 1, max: 5}
    },
    helpful: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    notHelpful: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

module.exports = Review;
