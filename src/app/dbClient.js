var Sequelize = require('sequelize');

module.exports = new Sequelize('immigration_dev', 'max', null, {
  host: 'localhost',
  dialect: 'postgres',
});
