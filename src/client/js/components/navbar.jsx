var React = require('react');
var Navigation = require('react-router').Navigation;

var NavBar = React.createClass({

  mixins: [Navigation],  

  render: function () {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>
          
          <div class="collapse navbar-collapse" id="js-navbar-collapse">
            <ul class="nav navbar-nav">
              <li onClick={this.transitionTo.bind(this, 'home')}>Home</li>
              <li onClick={this.transitionTo.bind(this, 'about')}>About</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }, 
});

module.exports = NavBar;
