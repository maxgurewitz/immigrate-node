exports.register = function(server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/users',
      handler: function(request, reply) {
        reply({ foo: 'bar' });
      }
    }
  ]);
  next();
};

exports.register.attributes = {
  name: 'users',
  version: '1.0.0'
};
