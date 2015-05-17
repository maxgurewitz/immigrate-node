var React = require('react'); 
var settings = require('../settings');
var PageContainer = require('./page_container');

var About = React.createClass({

  render: function () {
    return (
      <div className='About'>
        <PageContainer>
          Here at {settings.companyName} we're all about helping you build a better life.

          <br />
          <br />

          If you have had trouble with expensive immigration lawyers and confusing governmental bureaucracies give us a try.  We will make naturalization easy!
        </PageContainer>
      </div>
    );
  }, 
});

module.exports = About;
