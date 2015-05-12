// var App = require('./components/app.jsx');
global.React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  // React.render(<App />, document.getElementById('js-app'));
  React.render(<Handler />, document.getElementById('js-app'));
});
