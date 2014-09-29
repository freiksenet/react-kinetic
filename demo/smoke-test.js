/** @jsx React.DOM */

var React = require('react');
var ReactKinetic = require('./react-kinetic');

var Arc = ReactKinetic.Arc;
var Circle = ReactKinetic.Circle;
var Ellipse = ReactKinetic.Ellipse;
var Group = ReactKinetic.Group;
var Layer = ReactKinetic.Layer;
var Label = ReactKinetic.Label;
var Rect = ReactKinetic.Rect;
var Stage = ReactKinetic.Stage;
var Star = ReactKinetic.Star;
var Tag = ReactKinetic.Tag;
var Text = ReactKinetic.Text;
var TextPath = ReactKinetic.TextPath;

React.renderComponent(
    <Stage height={1000} width={800}>
        <Layer>
            <Arc innerRadius="40" outerRadius="80" fill="red" stroke="black" strokeWidth="2"
            angle="60" rotationDeg="-130" />
            <Circle x="300" y="100"
            radius="50"
            stroke="red" />
            <Ellipse x="350" y="60" radiusX="30" radiusY="50" fill="red" />
            <Group x="200" y="50" draggable="true">
                <Circle radius="30" stroke="blue" fill="yellow"/>
                <Circle radius="30" x="15" stroke="blue" fill="yellow" />
            </Group>
            <Label x="100" y="100" draggable="true">
                <Tag fill="#bbb" stroke="#333"
                shadowColor="black" shadowBlur="10"
                shadowOffsetX="10" shadowOffsetY="10" shadowOpacity="0.2"
                lineJoin="round"
                pointerDirection="up" pointerWidth="20" pointerHeight="20"
                cornerRadius="5" />
                 <Text text="Label Text" fontSize="50" lineHeight="1.2" padding="10" fill="blue" />
            </Label>
            <Rect x="170" y="225" width="50" height="50" fill="yellow" stroke="black" />
            <Star x="150" y="150"
            numPoints="5"
            innerRadius="20"
            outerRadius="50"
            fill="red"
            stroke="black"  />
            <Text x="10" y="15" text="Text" fontSize="30" fontFamily="Calibri" fill="green" />
            <TextPath x="100" y="50" fill="#333"
                fontSize="24" fontFamily="Arial"
                text="All the world's a stage, and all the men and women merely players."
                data="M10,10 C0,0 10,150 100,100 S300,150 400,50" />
        </Layer>
    </Stage>,
    document.getElementById("canvas")
);

/*

    This smoke-test is not complete.

    TO DO:

     <Animation>
     <Image>
     <Line>
     <Node>
     <Path>
     <RegularPolygon>
     <Ring>
     <Sprite>
     <Transform>
     <Tween>
     <Wedge>

 */