var Sequelize = require('sequelize');
var sequelize = require('../client');

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
