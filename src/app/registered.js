var plugins = require('./plugins');

// pass db client as option
module.exports = [
  {
    register: plugins.static.index,
    options: {}
  },
  {
    register: plugins.views.index,
    options: {}
  },
  {
    register: plugins.users.index,
    options: {}
  },
];
