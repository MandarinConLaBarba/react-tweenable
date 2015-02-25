var React = require('react/addons'),
  Button = require('./Button.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {};
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
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"><h4 className="panel-title">{"Components"}</h4></div>
              <div className="panel-body">
                {sample}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  },

  _getSample: function () {

    return (
      <div className="btn-group-vertical btn-group-lg text-center">
        {this._getButtonNode("Destroy the Replicants", {
          "top" : {
            from : -100,
            to: 0
          },
          "left" : {
            from : -100,
            to: 0
          }
        })}
        {this._getButtonNode("Save the Replicants", {
          "top" : {
            from : 100,
            to: 0
          },
          "left" : {
            from : 100,
            to: 0
          }
        })}
        {this._getButtonNode("Travel to the Offworld", {
          "top" : {
            from : -100,
            to: 0
          },
          "opacity" : {
            from : 0,
            to: 1
          }
        })}
        {this._getButtonNode("Play Chess with Sebastian", {
          "top" : {
            from : 100,
            to: 0
          },
          "opacity" : {
            from : 0,
            to: 1
          }
        })}
      </div>
    );
  },

  _getButtonNode: function (text, tween) {

    return <Button tween={tween} text={text} />;

  }
});


module.exports = App;