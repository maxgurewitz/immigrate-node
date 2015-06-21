var plugins = require('./plugins');

module.exports = [
  {
    register: plugins.static.index,
    options: {}
  },
  {
    register: plugins.views.index,
    options: {}
  },
];
