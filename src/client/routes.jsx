var Route = require('react-router').Route;
var App = require('./components/app.jsx');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');

module.exports = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);
