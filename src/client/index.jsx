global.React = require('react');
global.$ = global.jQuery = require('jquery');
var Router = require('react-router');
var routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('js-app'));
});
