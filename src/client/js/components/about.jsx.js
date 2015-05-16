var React = require('react'); 
var settings = require('../settings');

var About = React.createClass({

  render: function () {
    return (
      <div className='About'>
        Here at {settings.companyName} we're all about helping you build a better life.

        <br />
        <br />

        If you have had trouble with expensive immigration lawyers and confusing governmental bureaucracies give us a try.  We will make naturalization easy!
      </div>
    );
  }, 
});

module.exports = About;
