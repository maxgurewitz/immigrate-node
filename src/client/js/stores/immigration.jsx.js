var Reflux = require('reflux');
var _ = require('lodash');
var Actions = require('./actions');

module.exports = Reflux.createStore({

  listenables: Actions,

  init: function () {
    console.log('loc1', this.setState, 'loc2', Actions);
  },

  onNextImmigrationStep: function () {},
  onPreviousImmigrationStep: function () {},

  getInitialState: function () {
    return {
      'immigrationStep': 0,
    }
  }
});

