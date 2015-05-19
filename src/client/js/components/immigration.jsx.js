var React = require('react'); 
var _ = require('lodash');
var Store = require('../store');
var Steps = require('./immigration_steps');
var PageContainer = require('./page_container');

var stepNames = ['form'];

var Immigration = React.createClass({

  getInitialState: function () {
    return _.pick(Store.state, ['immigrationStep'])
  },

  render: function () {
    var Step = Steps[stepNames[this.state.immigrationStep]];

    return (
      <div className='immigration container-fluid'>
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

        <PageContainer>
          Immigration.
          <Step />
        </PageContainer>
      </div>
    );
  }, 
});

module.exports = Immigration;
