var React = require('react'); 
var _ = require('lodash');
var Store = require('../store');
var Steps = require('./immigration_steps');

var stepNames = ['form'];

var Immigration = React.createClass({

  getInitialState: function () {
    return _.pick(Store.state, ['immigrationStep'])
  },

  render: function () {
    var Step = Steps[stepNames[this.state.immigrationStep]];

    return (
      <div className='immigration'>
        Immigration.
        <Step />
      </div>
    );
  }, 
});

module.exports = Immigration;
