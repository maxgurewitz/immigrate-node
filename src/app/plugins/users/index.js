var User = require(__BASE + '/db/models/user');
var validationError = require('sequelize').prototype.ValidationError;

exports.register = function(server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/users/{id}',
      handler: function(request, reply) {
        User
          .findById(request.params.id)
          .then(function(res) {
            if (res === null) {
              reply({ statusCode: 404 });
            } else {
              reply({ user: res, statusCode: 200 });
            }
          })
          .catch(function(err) {
            reply({ err: err.message, statusCode: 500 });
          });
      }
    },
    {
      method: 'POST',
      path: '/users',
      handler: function(request, reply) {
        User
          .create(request.payload)
          .then(function(res) {
            reply({ user: res, statusCode: 200 });
          })
          .catch(validationError, function(err) {
            reply({ err: err.message, statusCode: 400 });
          })
          .catch(function(err) {
            reply({ err: err.message, statusCode: 500 });
          });
      }
    }
  ]);
  next();
};

exports.register.attributes = {
  name: 'users',
  version: '1.0.0'
};
