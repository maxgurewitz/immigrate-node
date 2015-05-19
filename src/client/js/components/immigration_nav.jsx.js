var React = require('react');

var ImmigrationNav = React.createClass({

  render: function () {
    return (
      <div className='row'>
        <div className='row col-md-8 col-md-offset-2 immigration-nav'>
          <button type="button" className="btn btn-default btn-lg pull-left">
            <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default btn-lg pull-right">
            <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }, 
});

module.exports = ImmigrationNav;
