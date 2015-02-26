var React = require('react/addons');

var Tweenable = require('../index').Mixin;

var Button = React.createClass({

  mixins: [Tweenable],

  render: function () {
    var props = this.props;

    return <button
      style={this.state.tweenStyle}
      className="btn btn-default"
      key={"button-" + props.number}>{props.text}</button>
  }
});


module.exports = Button;