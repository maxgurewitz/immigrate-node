var React = require('react');

var PageContainer = React.createClass({

  render: function () {
    return (
      <div className='page-container container-fluid'>
        <div className='row'>
          <div className='panel panel-default col-md-8 col-md-offset-2'>
            <div className='panel-body'>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }, 
});

module.exports = PageContainer;
