var React = require('react'); 
var Reflux = require('reflux');
var Store = require('../stores/immigration');
var Steps = require('./immigration_steps');
var ImmigrationNav = require('./immigration_nav');
var PageContainer = require('./page_container');

var stepNames = ['form'];

var Immigration = React.createClass({

  mixins: [Reflux.connect(Store)],

  render: function () {
    var Step = Steps[stepNames[this.state.immigrationStep]];

    return (
      <div className='immigration container-fluid'>
        <ImmigrationNav />
        <PageContainer>
          Immigration.
          <Step />
        </PageContainer>
      </div>
    );
  }, 
});

module.exports = Immigration;
