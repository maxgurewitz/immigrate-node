var Sequelize = require('sequelize');

var sequelize = new Sequelize('immigrate', 'max', null, {
  host: 'localhost',
  dialect: 'postgres',
});
