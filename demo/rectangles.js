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
      colors: ['red', 'yellow', 'green']
    };
  },

  changeColors: function () {
    var colors = this.state.colors;
    colors = colors.slice(1).concat([colors[0]]);
    this.setState({colors: colors});
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
    return (
      <Layer>
        {rects}
      </Layer>
    );
  }
});

React.renderComponent(
  <Stage height={300} width={300}>
    <TestingComponent />
    <Layer>
      <Star x="150" y="150"
            numPoints="5"
            innerRadius="20"
            outerRadius="50"
            fill="red"
            stroke="black" />
      <Circle x="300" y="100"
              radius="50"
              stroke="red" />
    </Layer>
  </Stage>,
  document.getElementById("canvas")
);
