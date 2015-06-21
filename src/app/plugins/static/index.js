exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        listing: true
      }
    }
  });
  next();
};

exports.register.attributes = {
  name: 'static',
  version: '1.0.0'
};
