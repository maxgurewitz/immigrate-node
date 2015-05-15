var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./navbar.jsx');

var App = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='app'>
        <Navbar />
        I'm an app!
        <RouteHandler />
      </div>
    );
  }, 
});

module.exports = App;
