var React = require('react');
var Router = require('react-router');
var settings = require('../settings');

var NavBar = React.createClass({

  mixins: [Router.Navigation, Router.State],  

  generateLink: function (title, pathname) {
    var className = this.getPathname() === pathname ? 'active' : ''; 
    return (
      <li className={className} onClick={this.transitionTo.bind(this, pathname)}><a>{title}</a></li>
    );
  },

  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{settings.companyName}</a>
          </div>
          
          <div className="collapse navbar-collapse" id="js-navbar-collapse">
            <ul className="nav navbar-nav">
              {this.generateLink('Home', '/')}
              {this.generateLink('About', '/about')}
            </ul>
          </div>
        </div>
      </nav>
    );
  }, 
});

module.exports = NavBar;
