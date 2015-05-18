var Route = require('react-router').Route;
var App = require('./app');
var Home = require('./home');
var About = require('./about');
var Immigration = require('./immigration');

module.exports = (
  <Route name="base" handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="immigration" path="/immigration" handler={Immigration} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);
