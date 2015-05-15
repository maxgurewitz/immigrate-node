var Reflux = require('reflux');
var Actions = require('./actions');

module.exports = Reflux.createStore({

  init: function () {
    // this.listenTo(Actions.gotoPage, this.gotoPage);
    // this.page = 'home'; 
  },

  // gotoPage: function (page) {
  //   this.page = page;
  //   this.trigger('gotoPage', this.page);
  // }
});
