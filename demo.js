/** @jsx React.DOM */

var React = require('react');
var ReactKinetic = require('./react-kinetic');

var Stage = ReactKinetic.Stage;
var Layer = ReactKinetic.Layer;
var Rect = ReactKinetic.Rect;

React.renderComponent(
  <Stage height={300} width={300}>
    <Layer>
      <Rect x={20} y={20}
            width={50} height={50}
            fill="red" />
      <Rect x={100} y={100}
            width={50} height={50}
            fill="red" />
    </Layer>
    <Layer>
      <Rect x={25} y={25}
            width={50} height={50}
            fill="blue" />
    </Layer>
  </Stage>,
  document.getElementById("canvas")
);
