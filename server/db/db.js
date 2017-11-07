const Sequelize = require('sequelize')
const localDBUrl = process.env.NODE_ENV === 'test'
  ? 'postgres://localhost:5432/pokeball-test'
  : 'postgres://localhost:5432/pokeball'
const db = new Sequelize(
  process.env.DATABASE_URL || localDBUrl, {
    logging: false
  }
)
module.exports = db
