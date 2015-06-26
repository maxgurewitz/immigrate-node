var plugins = require('./plugins');

module.exports = [
  {
    register: plugins.auth.index,
    options: {}
  },
  {
    register: plugins.static.index,
    options: {}
  },
  {
    register: plugins.users.index,
    options: {}
  },
  {
    register: plugins.views.index,
    options: {}
  },
];
