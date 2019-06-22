const Sequelize = require('sequelize')
const db = require('../db')

const Messages = db.define('message', {
  email: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  }
})

module.exports = Messages
