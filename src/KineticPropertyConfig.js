"use strict";

var KineticPropertyConfig = [];

var KineticHierarchy = {
  Node: [],
  Stage: ['Node'],
  Container: ['Node'],
  BaseLayer: ['Container', 'Node'],
  Layer: ['Container', 'Node'],
  FastLayer: ['Container', 'Node'],
  Group: ['Container', 'Node'],
  Label: ['Group', 'Container', 'Node'],
  Shape: ['Node'],
  Rect: ['Shape', 'Node'],
  Circle: ['Shape', 'Node'],
  Ellipse: ['Shape', 'Node'],
  Ring: ['Shape', 'Node'],
  Wedge: ['Shape', 'Node'],
  Arc: ['Shape', 'Node'],
  Image: ['Shape', 'Node'],
  Text: ['Shape', 'Node'],
  Line: ['Shape', 'Node'],
  Sprite: ['Shape', 'Node'],
  Path: ['Shape', 'Node'],
  TextPath: ['Shape', 'Node', 'Path', 'Text'],
  RegularPolygon: ['Shape', 'Node'],
  Star: ['Shape', 'Node'],
  Tag: ['Shape', 'Node']
};

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

function addToPropertyConfig (nodeType, propName, defaultValue) {
  KineticPropertyConfig.push({
    propName: propName,
    type: undefined,
    nodeType: nodeType,
    defaultValue: defaultValue
  });
}

// This is done in this way so that it's easier to import from grep over Kinetic
// code.
addToPropertyConfig('Node', 'x', 0);
addToPropertyConfig('Node', 'y', 0);
addToPropertyConfig('Node', 'position');
addToPropertyConfig('Node', 'name');
addToPropertyConfig('Node', 'id');
addToPropertyConfig('Node', 'dragDistance');
addToPropertyConfig('Node', 'width');
addToPropertyConfig('Node', 'height');
addToPropertyConfig('Node', 'size');
addToPropertyConfig('Node', 'draggable');
addToPropertyConfig('Node', 'opacity', 1);
addToPropertyConfig('Node', 'rotation', 0);
addToPropertyConfig('Node', 'scaleX', 1);
addToPropertyConfig('Node', 'scaleY', 1);
addToPropertyConfig('Node', 'skewX', 0);
addToPropertyConfig('Node', 'skewY', 0);
addToPropertyConfig('Node', 'offsetX', 0);
addToPropertyConfig('Node', 'offsetY', 0);
addToPropertyConfig('Node', 'listening', 'inherit');
addToPropertyConfig('Node', 'filters', undefined);
addToPropertyConfig('Node', 'visible', 'inherit');
addToPropertyConfig('Node', 'transformsEnabled', 'all');
addToPropertyConfig('Node', 'brightness', 0, null);
addToPropertyConfig('Node', 'blurRadius', 0, null);
addToPropertyConfig('Node', 'threshold', 0, null);
addToPropertyConfig('Node', 'red', 0);
addToPropertyConfig('Node', 'green', 0);
addToPropertyConfig('Node', 'blue', 0);
addToPropertyConfig('Node', 'hue', 0, null);
addToPropertyConfig('Node', 'saturation', 0, null);
addToPropertyConfig('Node', 'value', 0, null);
addToPropertyConfig('Node', 'hue', 0, null);
addToPropertyConfig('Node', 'saturation', 0, null);
addToPropertyConfig('Node', 'luminance', 0, null);
addToPropertyConfig('Node', 'embossStrength', 0.5, null);
addToPropertyConfig('Node', 'embossWhiteLevel', 0.5, null);
addToPropertyConfig('Node', 'embossDirection', 'top-left', null);
addToPropertyConfig('Node', 'embossBlend', false, null);
addToPropertyConfig('Node', 'enhance', 0, null);
addToPropertyConfig('Node', 'levels', 0.5, null);
addToPropertyConfig('Node', 'noise', 0.2, null);
addToPropertyConfig('Node', 'pixelSize', 8, null);
addToPropertyConfig('Node', 'threshold', 0.5, null);
addToPropertyConfig('Node', 'kaleidoscopePower', 2, null);
addToPropertyConfig('Node', 'kaleidoscopeAngle', 0, null);
addToPropertyConfig('Node', 'dragBoundFunc');
addToPropertyConfig('Container', 'clipX');
addToPropertyConfig('Container', 'clipY');
addToPropertyConfig('Container', 'clipWidth');
addToPropertyConfig('Container', 'clipHeight');
addToPropertyConfig('Shape', 'stroke');
addToPropertyConfig('Shape', 'strokeRed', 0);
addToPropertyConfig('Shape', 'strokeGreen', 0);
addToPropertyConfig('Shape', 'strokeBlue', 0);
addToPropertyConfig('Shape', 'strokeAlpha', 1);
addToPropertyConfig('Shape', 'strokeWidth', 2);
addToPropertyConfig('Shape', 'lineJoin');
addToPropertyConfig('Shape', 'lineCap');
addToPropertyConfig('Shape', 'sceneFunc');
addToPropertyConfig('Shape', 'hitFunc');
addToPropertyConfig('Shape', 'dash');
addToPropertyConfig('Shape', 'shadowColor');
addToPropertyConfig('Shape', 'shadowRed', 0);
addToPropertyConfig('Shape', 'shadowGreen', 0);
addToPropertyConfig('Shape', 'shadowBlue', 0);
addToPropertyConfig('Shape', 'shadowAlpha', 1);
addToPropertyConfig('Shape', 'shadowBlur');
addToPropertyConfig('Shape', 'shadowOpacity');
addToPropertyConfig('Shape', 'shadowOffsetX', 0);
addToPropertyConfig('Shape', 'shadowOffsetY', 0);
addToPropertyConfig('Shape', 'fillPatternImage');
addToPropertyConfig('Shape', 'fill');
addToPropertyConfig('Shape', 'fillRed', 0);
addToPropertyConfig('Shape', 'fillGreen', 0);
addToPropertyConfig('Shape', 'fillBlue', 0);
addToPropertyConfig('Shape', 'fillAlpha', 1);
addToPropertyConfig('Shape', 'fillPatternX', 0);
addToPropertyConfig('Shape', 'fillPatternY', 0);
addToPropertyConfig('Shape', 'fillLinearGradientColorStops');
addToPropertyConfig('Shape', 'fillRadialGradientStartRadius', 0);
addToPropertyConfig('Shape', 'fillRadialGradientEndRadius', 0);
addToPropertyConfig('Shape', 'fillRadialGradientColorStops');
addToPropertyConfig('Shape', 'fillPatternRepeat', 'repeat');
addToPropertyConfig('Shape', 'fillEnabled', true);
addToPropertyConfig('Shape', 'strokeEnabled', true);
addToPropertyConfig('Shape', 'shadowEnabled', true);
addToPropertyConfig('Shape', 'dashEnabled', true);
addToPropertyConfig('Shape', 'strokeScaleEnabled', true);
addToPropertyConfig('Shape', 'fillPriority', 'color');
addToPropertyConfig('Shape', 'fillPatternOffsetX', 0);
addToPropertyConfig('Shape', 'fillPatternOffsetY', 0);
addToPropertyConfig('Shape', 'fillPatternScaleX', 1);
addToPropertyConfig('Shape', 'fillPatternScaleY', 1);
addToPropertyConfig('Shape', 'fillLinearGradientStartPointX', 0);
addToPropertyConfig('Shape', 'fillLinearGradientStartPointY', 0);
addToPropertyConfig('Shape', 'fillLinearGradientEndPointX', 0);
addToPropertyConfig('Shape', 'fillLinearGradientEndPointY', 0);
addToPropertyConfig('Shape', 'fillRadialGradientStartPointX', 0);
addToPropertyConfig('Shape', 'fillRadialGradientStartPointY', 0);
addToPropertyConfig('Shape', 'fillRadialGradientEndPointX', 0);
addToPropertyConfig('Shape', 'fillRadialGradientEndPointY', 0);
addToPropertyConfig('Shape', 'fillPatternRotation', 0);
addToPropertyConfig('BaseLayer', 'clearBeforeDraw', true);
addToPropertyConfig('Layer', 'hitGraphEnabled', true);
addToPropertyConfig('Rect', 'cornerRadius', 0);
addToPropertyConfig('Circle', 'radius', 0);
addToPropertyConfig('Ellipse', 'radiusX', 0);
addToPropertyConfig('Ellipse', 'radiusY', 0);
addToPropertyConfig('Ring', 'innerRadius', 0);
addToPropertyConfig('Ring', 'outerRadius', 0);
addToPropertyConfig('Wedge', 'radius', 0);
addToPropertyConfig('Wedge', 'angle', 0);
addToPropertyConfig('Wedge', 'clockwise', false);
addToPropertyConfig('Arc', 'innerRadius', 0);
addToPropertyConfig('Arc', 'outerRadius', 0);
addToPropertyConfig('Arc', 'angle', 0);
addToPropertyConfig('Arc', 'clockwise', false);
addToPropertyConfig('Image', 'image');
addToPropertyConfig('Image', 'cropX', 0);
addToPropertyConfig('Image', 'cropY', 0);
addToPropertyConfig('Image', 'cropWidth', 0);
addToPropertyConfig('Image', 'cropHeight', 0);
addToPropertyConfig('Text', 'fontFamily', 'Arial');
addToPropertyConfig('Text', 'fontSize', 12);
addToPropertyConfig('Text', 'fontStyle', 'normal');
addToPropertyConfig('Text', 'fontVariant', 'normal');
addToPropertyConfig('Text', 'padding', 0);
addToPropertyConfig('Text', 'align', 'left');
addToPropertyConfig('Text', 'lineHeight', 1);
addToPropertyConfig('Text', 'wrap', 'word');
addToPropertyConfig('Text', 'text');
addToPropertyConfig('Line', 'closed', false);
addToPropertyConfig('Line', 'tension', 0);
addToPropertyConfig('Line', 'points');
addToPropertyConfig('Sprite', 'animation');
addToPropertyConfig('Sprite', 'animations');
addToPropertyConfig('Sprite', 'image');
addToPropertyConfig('Sprite', 'frameIndex', 0);
addToPropertyConfig('Sprite', 'frameRate', 17);
addToPropertyConfig('Path', 'data');
addToPropertyConfig('TextPath', 'fontFamily', 'Arial');
addToPropertyConfig('TextPath', 'fontSize', 12);
addToPropertyConfig('TextPath', 'fontStyle', 'normal');
addToPropertyConfig('TextPath', 'fontVariant', 'normal');
addToPropertyConfig('RegularPolygon', 'radius', 0);
addToPropertyConfig('RegularPolygon', 'sides', 0);
addToPropertyConfig('Star', 'numPoints', 5);
addToPropertyConfig('Star', 'innerRadius', 0);
addToPropertyConfig('Star', 'outerRadius', 0);
addToPropertyConfig('Tag', 'pointerDirection', 'none');
addToPropertyConfig('Tag', 'pointerWidth', 0);
addToPropertyConfig('Tag', 'pointerHeight', 0);
addToPropertyConfig('Tag', 'cornerRadius', 0);

module.exports = {
  KineticPropertyConfig: KineticPropertyConfig,
  KineticHierarchy: KineticHierarchy,
  KineticEvents: KineticEvents
};
