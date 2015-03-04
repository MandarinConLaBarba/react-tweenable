var React = require('react/addons'),
  Button = require('./Button.jsx'),
  JSXView = require('react-jsx-view'),
  Tweenable = require('../index'),
  clone = require('lodash.clone'),
  cloneDeep = require('lodash.clonedeep'),
  assign = require('object-assign');

var initialNodeTweenState = {right: {from: -260, to: 0}, position: 'relative'},
  initialNode2TweenState = {
    topLeft: {
      "top" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      "left" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      position: "relative"
    },
    topRight: {
      "top" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      "right" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      position: "relative"
    },
    bottomLeft: {
      "top" : {
        from : 20,
        to: 0,
        duration: 1000
      },
      "left" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      position: "relative"
    },
    bottomRight: {
      "top" : {
        from : 20,
        to: 0,
        duration: 1000
      },
      "right" : {
        from : -20,
        to: 0,
        duration: 1000
      },
      position: "relative"
    }
  };

var initialState = {
  buttonOneTween: {
    "top" : {
      from : -100,
      to: 0
    },
    "left" : {
      from : -100,
      to: 0
    }
  },
  buttonTwoTween: {
    "top" : {
      from : 100,
      to: 0
    },
    "left" : {
      from : 100,
      to: 0
    }
  },
  buttonThreeTween: {
    "top" : {
      from : -100,
      to: 0
    },
    "left" : {
      from : 100,
      to: 0
    },
    "opacity" : {
      from : 0,
      to: 1
    }
  },
  buttonFourTween: {
    "top" : {
      from : 100,
      to: 0
    },
    "left" : {
      from : -100,
      to: 0
    },
    "opacity" : {
      from : 0,
      to: 1
    }
  }
};

var App = React.createClass({

  getInitialState: function() {
    return assign(clone(initialState), {
      nodeTween: initialNodeTweenState,
      node2Tweens: initialNode2TweenState,
      propDetails1: "Hover over props to the right to inspect",
      propDetails2: "Hover over props to the right to inspect"
    });
  },

  render: function() {

    var simpleExample = this._getNodeSample(),
      simpleExample2 = this._getNodeSample2(),
      simpleExampleMixin = this._getMixinSample();

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 hero">
            <h1><code>{"<Tweenable/>"}</code></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 hero">
            <h3>Check out the code for this demo <a href="https://github.com/MandarinConLaBarba/react-tweenable/blob/master/example/App.jsx">here</a>.</h3>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="row">

              <div className="col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading"><h4 className="panel-title">{"Simple Example"}</h4></div>
                  <div className="panel-body">
                    {simpleExample}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">

                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <h4>Click</h4>
                    <span onClick={this._replayNodeTween} className="fa fa-4x fa-caret-square-o-right"></span>
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <code>{this._getPropDetailString(this.state.propDetails1)}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"JSX"}</h4></div>
              <div className="panel-body">
                <JSXView onPropMouseOver={function(details) { this.setState({propDetails1: details})}.bind(this)}>{simpleExample}</JSXView>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="row">

              <div className="col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading"><h4 className="panel-title">{"Simple Example #2"}</h4></div>
                  <div className="panel-body">
                    {simpleExample2}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">

                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <h4>Click</h4>
                    <span onClick={this._replayNode2Tween} className="fa fa-4x fa-caret-square-o-right"></span>
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <code>{this._getPropDetailString(this.state.propDetails2)}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"JSX"}</h4></div>
              <div className="panel-body">
                <JSXView onPropMouseOver={function(details) { this.setState({propDetails2: details})}.bind(this)}>{simpleExample2}</JSXView>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 hero">
            <h1><code>mixins : [Tweenable.Mixin]</code></h1>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="row">

              <div className="col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading"><h4 className="panel-title">{"Components"}</h4></div>
                  <div className="panel-body">
                    {simpleExampleMixin}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">

                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <h4>Click</h4>
                    <span onClick={this._scatterButtons} className="fa fa-4x fa-caret-square-o-right"></span>
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <code>{this._getPropDetailString(this.state.propDetails3)}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"JSX"}</h4></div>
              <div className="panel-body">
                <JSXView onPropMouseOver={function(details) { this.setState({propDetails3: details})}.bind(this)}>{simpleExampleMixin}</JSXView>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  },

  _getPropDetailString: function (details) {

    if (typeof details === "object") return JSON.stringify(details);
    if (typeof details === "function") return details.toString();

    return details;

  },

  _scatterButtons: function () {

    this.setState({
      buttonOneTween: {
        "top" : {
          from : 0,
          to: -100
        },
        "left" : {
          from : 0,
          to: -100
        }
      },
      buttonTwoTween: {
        "top" : {
          from : 0,
          to: 100
        },
        "left" : {
          from : 0,
          to: 100
        }
      },
      buttonThreeTween: {
        "top" : {
          from : 0,
          to: -100
        }
      },
      buttonFourTween: {
        "top" : {
          from : 0,
          to: 100
        }}
    });

    setTimeout(function () {
      this.setState(initialState);
    }.bind(this), 400)
  },

  _replayNodeTween: function () {

    this.setState({
      nodeTween : clone(this.state.nodeTween)
    });

  },

  _replayNode2Tween: function () {

    this.setState({
      node2Tweens : cloneDeep(this.state.node2Tweens)
    });

  },

  _getNodeSample: function () {
    return (
      <Tweenable tween={this.state.nodeTween}>
        <div>This go</div>
        <div>Weeeee</div>
      </Tweenable>
    );
  },

  _getNodeSample2: function () {
    return (
      <div>
        <div>
          <Tweenable component="span" tween={this.state.node2Tweens.topLeft}>Top Left</Tweenable>
          <Tweenable component="span" tween={this.state.node2Tweens.topRight}>Top Right</Tweenable>
        </div>
        <div>
          <Tweenable component="span" tween={this.state.node2Tweens.bottomLeft}>Bottom Left</Tweenable>
          <Tweenable component="span" tween={this.state.node2Tweens.bottomRight}>Bottom Right</Tweenable>
        </div>

      </div>
    );
  },

  _getMixinSample: function () {

    return (
      <div className="btn-group-vertical btn-group-lg text-center">
        {this._getButtonNode("Destroy the Replicants", this.state.buttonOneTween)}
        {this._getButtonNode("Save the Replicants", this.state.buttonTwoTween)}
        {this._getButtonNode("Travel to the Offworld", this.state.buttonThreeTween)}
        {this._getButtonNode("Play Chess with Sebastian", this.state.buttonFourTween)}
      </div>
    );
  },

  _getButtonNode: function (text, tween) {

    return <Button tween={tween} text={text} />;

  }
});


module.exports = App;