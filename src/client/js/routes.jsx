var Route = require('react-router').Route;
var App = require('./components/app.jsx');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');
var Immigration = require('./components/immigration.jsx');

module.exports = (
  <Route name="base" handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="immigration" path="/immigration" handler={Immigration} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);
