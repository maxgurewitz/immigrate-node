var routes = 
  [
    '/', 
    '/immigrate', 
    '/about'
  ]
  .map(function(path) {
    return {
      method: 'GET',
      path: path,
      handler: function(request, reply) {
        reply.view('home');
      }
    }
  });

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
  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'views',
  version: '1.0.0'
};
