var tweenState = require('react-tween-state');
var React = require('react');
var extend = require('object-assign');
var invariant = require('react/lib/invariant');

var TweenableMixin = extend({

  componentWillReceiveProps: function (nextProps) {

    if (nextProps.tween && nextProps.tween !== this.props.tween) {
      this._startTween(nextProps);
    }
  },

  componentWillUpdate: function (nextProps, nextState) {

    var props = this.props;

    if (!props.tween) return;

    nextState.tweenable = this._mapTween(function (tweenSettings, tweenKey) {
      return this.getTweeningValue(tweenKey);
    });

    if (props.tween.position) {
      nextState.tweenable.position = props.tween.position;
    }

  },

  _eachTween: function (func, map, props) {

    var tweenProps = props.tween,
      handler = func.bind(this),
      ret = {};

    for (var tween in tweenProps) {

      if(!tweenProps.hasOwnProperty(tween)) continue;
      if (typeof tweenProps[tween] !== "object") continue;
      ret[tween] = handler(tweenProps[tween], this._getTweenKey(tween));

    }

    if (map) return ret;

  },

  _mapTween: function (func) {
    return this._eachTween(func, true, this.props);
  },

  _getTweenKey: function (str) {
    return 'tween_' + str;
  },

  _startTween: function (props) {

    props = props || this.props;

    this._eachTween(function (tweenSettings, tweenKey) {
      var to = tweenSettings.to || tweenSettings.endValue,
        from = tweenSettings.from || tweenSettings.beginValue;
      invariant(typeof tweenSettings.to !== "undefined" && typeof tweenSettings.from !== "undefined",
        "Tweens require a .to (or .endValue) and a .from (or .beginValue) property");
      this.tweenState(tweenKey, {
        easing: tweenSettings.easing || tweenState.easingTypes.easeInOutQuad,
        duration: tweenSettings.duration || 500,
        beginValue: tweenSettings.from,
        endValue: tweenSettings.to
      });

    }, false, props);

  },

  componentDidMount: function () {

    if (!this.props.tween) return;

    this._startTween();

  }
}, tweenState.Mixin);

module.exports = TweenableMixin;