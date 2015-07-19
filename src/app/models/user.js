// It'd make more sense for db to live under source, and for models to live under app
var Sequelize = require('sequelize');
var sequelize = require('../dbClient');

module.exports = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  countryOfOrigin: Sequelize.STRING,
});
