var React = require('react'); 
var Store = require('../../store');

var ImmigrationForm = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='immigration-form'>
        Immigration Form.
      </div>
    );
  }, 
});

module.exports = ImmigrationForm;
