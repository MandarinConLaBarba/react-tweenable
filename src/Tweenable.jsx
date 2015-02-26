var React = require('react');
var Mixin = require('./Mixin')

var Tweenable = React.createClass({

  mixins : [Mixin],
  propTypes: {
    tween: React.PropTypes.object,
    component: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      component: "div"
    };
  },


  render: function () {

    var props = this.props;


    return (React.createElement(props.component, {style: this.state.tweenStyle}, this.props.children));
  }

});

module.exports = Tweenable;