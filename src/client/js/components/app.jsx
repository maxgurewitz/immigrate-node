var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./navbar.jsx');

var App = React.createClass({

  render: function () {
    return (
      <div className='app'>
        <NavBar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='panel panel-default col-sm-8 col-sm-offset-2'>
              <div className='panel-body'>
                <RouteHandler />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, 
});

module.exports = App;
