exports.register = function(server, options, next) {
  server.register(require('hapi-auth-cookie'))

  server.after(function() {
    server.auth.strategy('session', 'cookie', {
      password: 'immigrate-password',
      cookie: 'sid-immigrate',
      redirectTo: '/login',
      isSecure: false
    });
  });
  next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
