var React = require('react/addons'),
  Button = require('./Button.jsx'),
  JSXView = require('react-jsx-view');

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
    return initialState;
  },

  render: function() {

    var sample = this._getSample();

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 hero">
            <h1><code>mixins : [Tweenable]</code></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 hero">
            <h3>Check out the code for this demo <a href="https://github.com/MandarinConLaBarba/react-tweenable/blob/master/example/App.jsx">here</a>.</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"Components"}</h4></div>
              <div className="panel-body">
                {sample}
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <h4>Click</h4>
                <span onClick={this._scatterButtons} className="fa fa-4x fa-caret-square-o-right"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"JSX"}</h4></div>
              <div className="panel-body">
                <JSXView>{sample}</JSXView>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

  _getSample: function () {

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