/** @jsx React.DOM */

var React = require('react');
var ReactKinetic = require('./react-kinetic');

var Stage = ReactKinetic.Stage;
var Layer = ReactKinetic.Layer;
var Rect = ReactKinetic.Rect;
var Star = ReactKinetic.Star;
var Circle = ReactKinetic.Circle;

var TestingComponent = React.createClass({
  getInitialState: function () {
    return {
      colors: ['red', 'yellow', 'green'],
      circles: [1, 2, 3, 4]
    };
  },

  changeColors: function () {
    var colors = this.state.colors;
    colors = colors.slice(1).concat([colors[0]]);
    this.setState({colors: colors});
  },

  addCircle: function () {
    this.setState({
      circles: this.state.circles.slice(0, -1) //concat(this.state.circles.slice(-1)[0] + 1)
    });
  },

  render: function () {
    var rects = this.state.colors.map(function (color, i) {
      return (
        <Rect key={i}
              x={i*20 + 5} y={i*20 + 5}
              width={50} height={50}
              fill={color}
              stroke="black"
              onClick={this.changeColors.bind(this, i)} />
      );
    }, this);

    var circles = this.state.circles.map(function (pos, i) {
      return (
        <Circle key={3 + i}
                x={pos*10 + 5} y={100}
                fill="black"
                radius={5}
                onClick={this.addCircle} />
      );
    }, this);

    return (
      <Layer>
        {rects}
        {circles}
      </Layer>
    );
  }
});

React.renderComponent(
  <Stage height={1000} width={800}>
    <TestingComponent />
    <Layer>
      <Star x="150" y="150"
            numPoints="5"
            innerRadius="20"
            outerRadius="50"
            fill="red"
            stroke="black"  />
      <Circle x="300" y="100"
              radius="50"
              stroke="red" />
    </Layer>
  </Stage>,
  document.getElementById("canvas")
);
