var plugins = require('./plugins');

module.exports = [
  {
    register: plugins.views.index,
    options: {}
  },
  {
    register: plugins.static.index,
    options: {}
  }
];
