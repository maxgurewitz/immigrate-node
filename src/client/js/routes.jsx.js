var Route = require('react-router').Route;
var App = require('./components/app');
var Home = require('./components/home');
var About = require('./components/about');
var Immigration = require('./components/immigration');

module.exports = (
  <Route name="base" handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="immigration" path="/immigration" handler={Immigration} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);
