/** @jsx React.DOM */

var React = require('react');
var ReactKinetic = require('../react-kinetic');

var Arc = ReactKinetic.Arc;
var Circle = ReactKinetic.Circle;
var Ellipse = ReactKinetic.Ellipse;
var Group = ReactKinetic.Group;
var KImage = ReactKinetic.Image;
var Layer = ReactKinetic.Layer;
var Line = ReactKinetic.Line;
var Label = ReactKinetic.Label;
var Path = ReactKinetic.Path;
var Rect = ReactKinetic.Rect;
var Ring = ReactKinetic.Ring;
var RegularPolygon = ReactKinetic.RegularPolygon;
var Sprite = ReactKinetic.Sprite;
var Stage = ReactKinetic.Stage;
var Star = ReactKinetic.Star;
var Tag = ReactKinetic.Tag;
var Text = ReactKinetic.Text;
var TextPath = ReactKinetic.TextPath;
var Wedge = ReactKinetic.Wedge;

var planeSpriteImage = new Image();
planeSpriteImage.src = "planesprite.png";

var spriteAnimations = {
  base: [0, 1005, 95, 151],
  toLeft: [0, 804, 95, 151,
           0, 603, 95, 151,
           0, 402, 95, 151,
           0, 201, 95, 151,
           0, 0, 95, 151],
  toRight: [0, 1206, 95, 151,
            0, 1407, 95, 151,
            0, 1609, 95, 151,
            0, 1809, 95, 151,
            145, 0, 95, 151]
};

var pathData = (
  "M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.26" +
  "2l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.1" +
  "85,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17." +
  "813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591" +
  ",4.87,22.204,2.658,12.582,9.551z"
);

React.renderComponent(
  <Stage height={1000} width={800}>
    <Layer>
      <Arc innerRadius="40"
           outerRadius="80"
           fill="red"
           stroke="black"
           strokeWidth="2"
           angle="60"
           rotationDeg="-130" />
      <Circle x="300" y="100"
              radius="50"
              stroke="red" />
      <Ellipse x="350" y="60" radiusX="30" radiusY="50" fill="red" />
      <Group x="200" y="50" draggable="true">
        <Circle radius="30" stroke="blue" fill="yellow"/>
        <Circle radius="30" x="15" stroke="blue" fill="yellow" />
      </Group>
      <KImage x="380" y="190"
              image={planeSpriteImage}
              width="95" height="151"
              cropX="0" cropY="1005"
              cropWidth="95" cropHeight="151" />
      <Line x="100" y="50"
            points={[73, 70, 340, 23, 450, 60, 500, 20]}
            stroke="black" tension="1" />
      <Path x="440" y="10" fill="green" scale="2"
            data={pathData} />
      <Rect x="170" y="225"
            width="50" height="50"
            fill="yellow" stroke="black" />
      <RegularPolygon x="350" y="125" sides="5"
                      radius="30" fill="blue"
                      stroke="black" strokeWidth="4" opacity="0.5" />
      <Ring  x="500" y="175"
             innerRadius="30" outerRadius="40"
             fill="red" stroke="black" strokeWidth="5" />
      <Sprite x="600" y ="175"
              image={planeSpriteImage}
              animation="toRight"
              animations={spriteAnimations}
              frameIndex="0" />
      <Star x="150" y="150"
            numPoints="5"
            innerRadius="20"
            outerRadius="50"
            fill="red"
            stroke="black"  />
      <Wedge x="30" y="225" radius="40"
             fill="red" stroke="black" strokeWidth="5"
             angle="60" rotation="-120" />
    </Layer>
  </Stage>,
  document.getElementById("canvas")
);

/*
 <Label x="100" y="100" draggable="true">
 <Tag fill="#bbb" stroke="#333"
 shadowColor="black" shadowBlur="10"
 shadowOffsetX="10" shadowOffsetY="10" shadowOpacity="0.2"
 lineJoin="round"
 pointerDirection="up" pointerWidth="20" pointerHeight="20"
 cornerRadius="5" />
 <Text text="Label Text" fontSize="50" lineHeight="1.2" padding="10" fill="blue" />
 </Label>
 <Text x="10" y="15" text="Text" fontSize="30" fontFamily="Calibri" fill="green" />
 <TextPath x="100" y="50" fill="#333"
 fontSize="24" fontFamily="Arial"
 text="All the world's a stage, and all the men and women merely players."
 data="M10,10 C0,0 10,150 100,100 S300,150 400,50" />-->

 This smoke-test is not complete.

 TO DO:

 <Animati on>
 <Transform>
 <Tween>

 */
