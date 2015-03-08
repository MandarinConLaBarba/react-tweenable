var React = require('react/addons');

var Tweenable = require('../index').Mixin;

var Percentage = React.createClass({

  mixins: [Tweenable],

  render: function () {

    if (!this.state.tweenable) return null;

    return <h4>Percentage: <span className="badge">{Math.round(this.state.tweenable.value * 100)}%</span></h4>;
  }
});


module.exports = Percentage;