react-kinetic
=============

![Build status](https://travis-ci.org/freiksenet/react-kinetic.svg?branch=master)

KineticJS canvas library using React components.

Click on rectangles at http://freiksenet.github.io/react-kinetic/. A more
elaborate example at https://github.com/freiksenet/react-kinetic-asteroids.

An attempt to make [React](http://facebook.github.io/react/) work with the
[KineticJS](http://kineticjs.com/) HTML5 canvas library. The goal is to have
similar declarative markup as normal React and to have similar data-flow model.

Currently you can use all Kinetic components as React components and all Kinetic
events are supported on them in same way as normal browser events are supported.

You can even inspect the components in React dev tools.

Installation
------------

If you use browserify or webpack

```
npm install react kinetic react-kinetic
```

Then just require it

```js
require('react-kinetic');
```

If you use require.js or want to use it standalone, then standalone version is
available in [Releases](https://github.com/freiksenet/react-kinetic/releases).

If you want to build from source

```
git clone https://github.com/freiksenet/react-kinetic.git
cd react-kinetic
npm run umd
```

`build/react-kinetic.js` will be a standalone dist, you can require
react and react-kinetic from there.
ReactKinetic
Note that in all cases you need to have react and kinetic available, so have
them included in `<script>` tag (or available to RequireJS if you use AMD).

User guide
----------

Minimal example:

```js
/** @jsx React.DOM */

var React = require('react');
var ReactKinetic = require('react-kinetic');

var TestingComponent = React.createClass({
  render: function () {
    return (
      <ReactKinetic.Stage height={300} width={300}>
        <ReactKinetic.Layer>
          <ReactKinetic.Rect x={100} y={100} width={50} height={50} fill="black" />
        </ReactKinetic.Layer>
      </ReactKinetic.Stage>
    );
  }
});

React.renderComponent(
  <TestingComponent />,
  document.body
);
```

All react-kinetic components correspond to KineticJS components of the same
name. All the parameters available for Kinetic objects are valid props for
corresponding react-kinetic components, unless otherwise noted.

Every react-kinetic component (or components that use react-kinetic components)
must be wrappe in `Stage`. `Stage` is the only react-kinetic element that has
actual DOM representation. Unlike `Kinetic.Stage`, `Stage` will ignore
`container` passed to it, because it constructs container by itself.

`Stage`'s only valid children are `Layer` components. `Layer`s are currently
only components that handle redrawing and currently they redraw on all changes
of props or children.

`Layer`s can have all the other react-kinetic components inside. The supported
elements are: `Container`, `Layer`, `Group`, `Label`, `Shape`, `Rect`, `Circle`,
`Ellipse`, `Ring`, `Wedge`, `Arc`, `Image`, `Text`, `Line`, `Sprite`, `Path`,
`TextPath`, `RegularPolygon`, `Star` and `Tag`. See KineticJS
[API docs](http://kineticjs.com/docs/index.html) for valid props.

Currently there is no API to add react-kinetic components for custom KineticJS
nodes, but I'm planning to add it in the future. See
[KineticComponent.js](src/KineticComponent.js) and
[KineticFactory.js](src/KineticComponent.js).

### Events

react-kinetic supports all KineticJS events. The names are done 'react-style',
so `onCamelCased`. Full mapping:

```js
var KineticEvents = {
  onMouseOver: "mouseover",
  onMouseOut: "mouseout",
  onMouseEnter: "mouseenter",
  onMouseLeave: "mouseleave",
  onMouseMove: "mousemove",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onClick: "click",
  onDblClick: "dblclick",
  onDragStar: "dragstart",
  onDragEnd: "dragend",
  onTouchStart: "touchstart",
  onTouchMove: "touchmove",
  onTouchEnd: "touchend",
  onTap: "tap",
  onDblTap: "dbltap",
  onDragMove: "dragmove"
};
```

Events work in similar way as they work in normal React. See
[demo/rectangles.js](demo/rectangles.js) for examples.

Internally, events use the `.react` namespace for Kinetic events,
so this namespace shouldn't be used if you manually bind events,
e.g. in `componentDidMount`.

### Some internals

To get raw Kinetic node object, use the `getKineticNode` method which all
react-kinetic components have.
