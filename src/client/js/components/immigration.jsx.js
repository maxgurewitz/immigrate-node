var React = require('react'); 
var Store = require('../store');
var _ = require('lodash');

var immitrationSteps = ['form'];

var Immigration = React.createClass({

  getInitialState: function () {
    return _.pick(Store.state, ['immigrationStep'])
  },

  render: function () {
    return (
      <div className='immigration'>
        Immigration.
      </div>
    );
  }, 
});

module.exports = Immigration;
