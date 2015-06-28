var Sequelize = require('sequelize');

module.exports = new Sequelize('immigrate_dev', 'root', null, {
  host: 'localhost',
  dialect: 'postgres',
});
