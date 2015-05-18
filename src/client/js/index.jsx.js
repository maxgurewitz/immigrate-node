var React = require('react');
var Router = require('react-router');
var Routes = require('./components/routes');

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler), document.getElementById('js-app'));
});
