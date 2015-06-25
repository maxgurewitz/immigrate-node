var Sequelize = require('sequelize');

exports.register = function(server, options, next) {

  // var sequelize = new Sequelize('immigrate', 'max', '', {
  //   host: 'localhost',
  //   dialect: 'postgres',
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     idle: 10000
  //   }
  // });
  next();
};

exports.register.attributes = {
  name: 'pg',
  version: '1.0.0'
};
