var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./navbar');
var PageContainer = require('./page_container');

var App = React.createClass({

  render: function () {
    return (
      <div className='app'>
        <NavBar />
        <RouteHandler />
      </div>
    );
  }, 
});

module.exports = App;