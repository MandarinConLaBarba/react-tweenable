## React Tweenable Mixin

A simple mixin that wraps the excellent [react-tween-state](https://github.com/chenglou/react-tween-state).

## Please check out the [Demo](http://mandarinconlabarba.github.io/react-tweenable/example/index.html).

## Why?

I think `react-tween-state` is awesome, but I didn't like all the touches required to make it work. If you're building an app, you don't
want to make API calls on a per-component basis. `react-tweenable` aims to make animations/tweens declarative.

## Install

```
npm install --save react-tweenable
```

## General Usage

```

    //A tweenable button

    var React = require('react/addons');

    var Tweenable = require('react-tweenable');

    var Button = React.createClass({

      mixins: [Tweenable],

      render: function () {
        return <button style={this.state.tweenStyle}>Submit</button>
      }
    });

    //Then in your consumer component

    render: function() {

        var tween = {"top" : {from : -100, to: 0 }};

        return <Button tween={tween} />;
    }


```

## Props

### tween={Object}

Your tween config

Example:

```

    var tween = {
                    "top" : {
                        easing: tweenState.easingTypes.easeInOutQuad, //any easing function will do see https://github.com/chenglou/react-tween-state/blob/master/easingTypes.js
                        duration: 500,
                        beginValue: 0,
                        endValue: 100
                    }
                };

```

