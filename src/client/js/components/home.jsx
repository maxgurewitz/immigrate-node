var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('../actions.jsx');

var Home = React.createClass({

  mixins: [Navigation],  

  render: function () {
    return (
      <div className='Home'>
        I'm a home page
        <button onClick={this.transitionTo.bind(this, 'about')} > About </button>
      </div>
    );
  }, 
});

module.exports = Home;
