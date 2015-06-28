var User = require(__BASE + '/db/models/user');

exports.register = function(server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/users',
      handler: function(request, reply) {
        reply({ foo: 'bar' });
      }
    },
    {
      method: 'POST',
      path: '/users',
      handler: function(request, reply) {
        User
          .create(request.payload)
          .then(function(res) {
            reply({ user: res }).status(200);
          })
          .catch(function(err) {
            reply({ err: err.message }).status(500);
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
