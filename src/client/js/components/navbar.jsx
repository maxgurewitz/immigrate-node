var React = require('react');
var Navigation = require('react-router').Navigation;

var NavBar = React.createClass({

  mixins: [Navigation],  

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
            <a className="navbar-brand" href="#">Immigrate</a>
          </div>
          
          <div className="collapse navbar-collapse" id="js-navbar-collapse">
            <ul className="nav navbar-nav">
              <li onClick={this.transitionTo.bind(this, 'home')}><a>Home</a></li>
              <li onClick={this.transitionTo.bind(this, 'about')}><a>About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }, 
});

module.exports = NavBar;
