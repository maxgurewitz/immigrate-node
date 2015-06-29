exports.register = function(server, options, next) {
  server.route([
    {
      method: 'POST',
      path: '/api/users',
      handler: function(request, reply) {
        reply({ status: 'ok' });
      }
    },
    {
      method: 'GET',
      path: '/api/users/{id}',
      handler: function(request, reply) {
        reply({ status: 'ok' });
      }
    },
    {
      method: 'GET',
      path: '/api/users',
      handler: function(request, reply) {
        reply({ status: 'ok' });
      }
    },
  ]);
  next();
};

exports.register.attributes = {
  name: 'users',
  version: '1.0.0'
};
