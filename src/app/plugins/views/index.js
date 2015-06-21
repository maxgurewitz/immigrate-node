exports.register = function(server, options, next) {
  server.views({
    engines: {
      ejs: {
        module: require('ejs'),
        relativeTo: __dirname,
        path: './templates'
      }
    }
  });
  server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        reply.view('home');
      }
  });
  next();
};

exports.register.attributes = {
  name: 'views',
  version: '1.0.0'
};
