var Reflux = require('reflux');
var _ = require('lodash');
var Actions = require('./actions.jsx');

module.exports = Reflux.createStore({

  listenables: Actions,

  init: function () {
    this.state = this.getInitialState();
  },

  setState: function (updates) {
    _.extend(this.state, updates);
    this.trigger('update', updates);
  },

  getInitialState: function () {
    return {
      immigrationStep: 0,
    }
  }
});

