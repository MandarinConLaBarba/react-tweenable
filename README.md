## React Tweenable

A simple component and mixin that wraps the excellent [react-tween-state](https://github.com/chenglou/react-tween-state).

## Please check out the [Demo](http://mandarinconlabarba.github.io/react-tweenable/example/index.html).

## Why?

I think `react-tween-state` is awesome, but I didn't like all the touches required to make it work. If you're building an app, you don't
want to make API calls on a per-component basis. `react-tweenable` aims to make animations/tweens declarative.

## Install

```
npm install --save react-tweenable
```

## General Usage

### Component

```es
var React = require('react');

var Tweenable = require('react-tweenable')


//Then in your render:

var tween = {"top" : {from : -100, to: 0 }, "position": "relative};

return <Tweenable tween={tween}><div>...some content</div></Tweenable>;

```

### Mixin

```es

//A tweenable button

var React = require('react/addons');

var Tweenable = require('react-tweenable').Mixin;

var Button = React.createClass({

  mixins: [Tweenable],

  render: function () {
    return <button style={this.state.tweenable}>Submit</button>
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

```es

var tween = {"top" : {
                easing: Tweenable.Easing.easeInOutQuad, //any easing function with the right signature will do, `react-tween-state` provides plenty https://github.com/chenglou/react-tween-state/blob/master/easingTypes.js
                duration: 500,
                from: 0,
                to: 100
                }
            };

```

