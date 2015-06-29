var authCookie = require('hapi-auth-cookie');

exports.register = function(server, options, next) {
  server.after(function() {
    server.auth.strategy('session', 'cookie', {
      password: 'immigrate-password',
      cookie: 'sid-immigrate',
      redirectTo: '/login',
      isSecure: false
    });
  });
  authCookie.register(server, options, next);
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
