var React = require('react');
var Actions = require('../actions');
var PageContainer = require('./page_container');

var Home = React.createClass({

  render: function () {
    return (
      <div className='Home'>
        <PageContainer>
          I'm a home page.
        </PageContainer>
      </div>
    );
  }, 
});

module.exports = Home;
