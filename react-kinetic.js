(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("kinetic"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "kinetic"], factory);
	else if(typeof exports === 'object')
		exports["ReactKinetic"] = factory(require("react"), require("kinetic"));
	else
		root["ReactKinetic"] = factory(root["React"], root["Kinetic"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpReactKinetic"];
/******/ 	window["webpackJsonpReactKinetic"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			__webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		3:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"smoke-test","1":"rectangles","2":"plane-game"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ReactKinetic = __webpack_require__(3);

	module.exports = ReactKinetic;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var KineticProperty = __webpack_require__(4);
	var KineticPropertyConfig = __webpack_require__(5);

	var KineticHierarchy = KineticPropertyConfig.KineticHierarchy;

	KineticProperty.injectKineticProperties(
	  KineticPropertyConfig.KineticPropertyConfig,
	  KineticHierarchy,
	  KineticPropertyConfig.KineticEvents
	);

	var KineticStage = __webpack_require__(6);
	var KineticFactory = __webpack_require__(7);

	module.exports = {
	  Stage: KineticStage
	};

	var excludeClasses = {
	  Stage: true,
	  Node: true,
	  BaseLayer: true,
	  Container: true
	};

	var containerClasses = {
	  Layer: true,
	  FastLayer: true,
	  Group: true,
	  Label: true
	};

	var layerClasses = {
	  Layer: true,
	  FastLayer: true
	};

	for (var kineticClass in KineticHierarchy) {
	  if (!excludeClasses[kineticClass]) {
	    module.exports[kineticClass] = KineticFactory.createSimpleClass(
	      kineticClass,
	      containerClasses[kineticClass],
	      layerClasses[kineticClass]
	    );
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Inject Kinetic property infos to KineticProperty.
	 *
	 * @param {object} kineticConfig should be an object with keys as property names
	 * and values as  objects of 'type', 'defaultValue', 'nodeType'.
	 *
	 * @param {object} kineticHierarchy should be a object with nodeType as key and
	 * list of nodeType parents as values.
	 *
	 * @param {object} kineticEvents should be a object with React (onFoo) event
	 * props and kinetic (foo) events.
	 */
	function injectKineticProperties (kineticConfig,
	                                  kineticHierarchy,
	                                  kineticEvents) {
	  for (var type in kineticHierarchy) {
	    var parents = kineticHierarchy[type];
	    KineticProperty.getParents[type] = [type].concat(parents);
	    for (var pi in parents) {
	      var parent = parents[pi];
	      var existingChildren = KineticProperty.getChildren[parent] || [];
	      existingChildren.push(type);
	      KineticProperty.getChildren[parent] = existingChildren;
	    }
	  }

	  for (var propI in kineticConfig) {
	    var data = kineticConfig[propI];
	    var propName = data.propName;
	    var propType = data.type;
	    var defaultValue = data.defaultValue;
	    var nodeType = data.nodeType;

	    var children = [nodeType].concat(
	      KineticProperty.getChildren[nodeType] || []
	    );
	    for (var ci in children) {
	      var child = children[ci];
	      var existingProps = KineticProperty.getValidProps[child] || {};
	      existingProps[propName] = {
	        type: propType,
	        defaultValue: defaultValue
	      };
	      KineticProperty.getValidProps[child] = existingProps;
	    }
	  }

	  for (var eventName in kineticEvents) {
	    KineticProperty.getEventName[eventName] = kineticEvents[eventName] +
	      "." + "react";
	  }
	}

	/**
	 * Similar to React those are objects that can be used as functions.
	 *
	 * KineticProperty.getParents['Rect']
	 * > ['Shape', 'Node']
	 */
	var KineticProperty = {
	  /**
	   * Returns all parents for given Kinetic type.
	   * @type {Object}
	   */
	  getParents: {},

	  /**
	   * Returns all parents for given Kinetic type.
	   * @type {Object}
	   */
	  getChildren: {},

	  /**
	   * Returns a map of valid prop type for node type to [type, defaultValue]
	   * @type {Object}
	   */
	  getValidProps: {},

	  /**
	   * Returns Kinetic event name for event property
	   *
	   */
	  getEventName: {}
	};

	module.exports = {
	  injectKineticProperties: injectKineticProperties,
	  KineticProperty: KineticProperty
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var cloneWithProps = __webpack_require__(14);
	var Kinetic = __webpack_require__(8);
	var KineticBaseMixin = __webpack_require__(9);
	var KineticContainerMixin = __webpack_require__(11);

	/**
	 * Core Kinetic stage.
	 */
	var Stage = React.createClass({
	  displayName: 'Stage',

	  mixins: [KineticBaseMixin, KineticContainerMixin],

	  propTypes: {
	    width: React.PropTypes.number,
	    height: React.PropTypes.number
	  },

	  componentDidMount: function () {
	    // So kinetic requires container to be available on creation time, but
	    // as we need to add nodes before the DOM is available, we use 'fake' node
	    // and then copy children to real one.
	    var oldNode = this.getKineticNode();
	    // Kinetic modifies children array in place
	    var children = oldNode.getChildren().slice();

	    this._node = this.createKineticNode({}, this.refs.canvas.getDOMNode());
	    this.updateNodeProperties({});

	    children.forEach(function (child) {
	      child.moveTo(this.getKineticNode());
	    }.bind(this));

	    oldNode.destroy();
	  },

	  createKineticNode: function (props, container) {
	    if (!container) {
	      container = document.createElement("div");
	    }
	    return new Kinetic.Stage({
	      container: container
	    });
	  },

	  render: function () {
	    return React.withContext({
	      kineticContainer: this.getKineticNode()
	    }, function () {
	      var children = React.Children.map(
	        this.props.children,
	        function (child) {
	          return cloneWithProps(child, {});
	        }.bind(this)
	      );
	      return React.DOM.div({},
	        React.DOM.div({ref: 'canvas'}),
	        children
	      );
	    }.bind(this));
	  }
	});

	module.exports = Stage;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var Kinetic = __webpack_require__(8);
	var KineticBaseMixin = __webpack_require__(9);
	var KineticComponentMixin = __webpack_require__(10);
	var KineticContainerMixin = __webpack_require__(11);
	var KineticLayerMixin = __webpack_require__(12);
	var util = __webpack_require__(13);

	var KineticFactory = {
	  createSimpleClass: function (kineticClass, container, layer) {
	    var mixins = [KineticBaseMixin, KineticComponentMixin];

	    if (container) {
	      mixins.push(KineticContainerMixin);
	    }

	    if (layer) {
	      mixins.push(KineticLayerMixin);
	    }

	    return React.createClass({
	      displayName: kineticClass,

	      mixins: mixins,

	      createKineticNode: function (properties) {
	        return new Kinetic[kineticClass](properties);
	      },

	      render: util.nodeRenderer
	    });
	  }
	};

	module.exports = KineticFactory;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var KineticProperty = __webpack_require__(4).KineticProperty;

	var KineticBaseMixin = {
	  componentWillMount: function () {
	    this._propValidCache = {};
	    var initialProps = this._getRequiredUpdates({}, this.props);
	    this._node = this.createKineticNode(initialProps.properties);
	  },

	  componentDidMount: function () {
	    this.updateNodeProperties({});
	  },

	  componentDidUpdate: function (prevProps) {
	    this.updateNodeProperties(prevProps);
	  },

	  componentWillUnmount: function () {
	    this.getKineticNode().destroy();
	  },

	  getKineticNode: function () {
	    return this._node;
	  },

	  _isPropValid: function (prop) {
	    return KineticProperty.getValidProps[this.constructor.displayName][prop];
	  },

	  _getValidProp: function (propKey) {
	    if (!this._propValidCache.hasOwnProperty(propKey)) {
	      this._propValidCache[propKey] = this._isPropValid(propKey);
	    }
	    return this._propValidCache[propKey];
	  },

	  _getRequiredUpdates: function (oldProps, newProps) {
	    var updates = {
	      eventsOn: {},
	      eventsOff: {},
	      properties: {}
	    };

	    var propKey;
	    var validEvent;
	    var validProp;

	    for (propKey in oldProps) {
	      validEvent = KineticProperty.getEventName[propKey];
	      validProp = this._getValidProp(propKey);
	      if (!newProps.hasOwnProperty(propKey)) {
	        if (validEvent) {
	          updates.eventsOff[validEvent] = true;
	        } else if (validProp) {
	          updates.properties[propKey] = validProp[1];
	        }
	      }
	    }

	    for (propKey in newProps) {
	      validEvent = KineticProperty.getEventName[propKey];
	      validProp = this._getValidProp(propKey);
	      if (validEvent) {
	        if (oldProps.hasOwnProperty(propKey)) {
	          if (oldProps[propKey] !== newProps[propKey]) {
	            updates.eventsOff[validEvent] = true;
	            updates.eventsOn[validEvent] = newProps[propKey];
	          }
	        } else {
	          updates.eventsOn[validEvent] = newProps[propKey];
	        }
	      } else if (validProp) {
	        if (!oldProps.hasOwnProperty(propKey) ||
	            oldProps[propKey] !== newProps[propKey]) {
	          updates.properties[propKey] = newProps[propKey];
	        }
	      }
	    }

	    return updates;
	  },

	  updateNodeProperties: function (prevProps) {
	    var node = this.getKineticNode();
	    var updates = this._getRequiredUpdates(prevProps, this.props);

	    var eventName;
	    for (eventName in updates.eventsOff) {
	      node.off(eventName);
	    }

	    for (eventName in updates.eventsOn) {
	      node.on(eventName, updates.eventsOn[eventName]);
	    }

	    node.setAttrs(updates.properties);
	  }
	};

	module.exports = KineticBaseMixin;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	/**
	 * A base mixin for Kinetic nodes.
	 */
	var KineticComponentMixin = {
	  contextTypes: {
	    kineticContainer:  React.PropTypes.any.isRequired
	  },

	  componentDidMount: function () {
	    this.context.kineticContainer.add(this._node);
	  }
	};

	module.exports = KineticComponentMixin;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var cloneWithProps = __webpack_require__(14);

	var KineticContainerMixin = {
	  nodeRender: function () {
	    return React.withContext({
	      kineticContainer: this.getKineticNode()
	    }, function () {
	      var children = React.Children.map(
	        this.props.children,
	        function (child) {
	          return cloneWithProps(child, {});
	        }.bind(this)
	      );
	      return React.DOM.span({}, children);
	    }.bind(this));
	  }
	};

	module.exports = KineticContainerMixin;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var KineticLayerMixin = {
	  componentDidUpdate: function () {
	    this.getKineticNode().draw();
	  }
	};

	module.exports = KineticLayerMixin;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  nodeRenderer: function () {
	    if (this.nodeRender) {
	      return this.nodeRender();
	    } else {
	      return null;
	    }
	  }
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @typechecks
	 * @providesModule cloneWithProps
	 */

	"use strict";

	var ReactPropTransferer = __webpack_require__(15);

	var keyOf = __webpack_require__(16);
	var warning = __webpack_require__(17);

	var CHILDREN_PROP = keyOf({children: null});

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {object} child child component you'd like to clone
	 * @param {object} props props you'd like to modify. They will be merged
	 * as if you used `transferPropsTo()`.
	 * @return {object} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      !child.props.ref,
	      'You are calling cloneWithProps() on a child with a ref. This is ' +
	      'dangerous because you\'re creating a new child which will not be ' +
	      'added as a ref to its parent.'
	    ) : null);
	  }

	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	      child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactDescriptor.cloneAndReplaceProps.
	  return child.constructor(newProps);
	}

	module.exports = cloneWithProps;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule ReactPropTransferer
	 */

	"use strict";

	var emptyFunction = __webpack_require__(19);
	var invariant = __webpack_require__(20);
	var joinClasses = __webpack_require__(21);
	var merge = __webpack_require__(22);

	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}

	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return merge(b, a);
	});

	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Never transfer the `key` prop.
	   */
	  key: emptyFunction,
	  /**
	   * Never transfer the `ref` prop.
	   */
	  ref: emptyFunction,
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};

	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }

	    var transferStrategy = TransferStrategies[thisKey];

	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}

	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {

	  TransferStrategies: TransferStrategies,

	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function(oldProps, newProps) {
	    return transferInto(merge(oldProps), newProps);
	  },

	  /**
	   * @lends {ReactPropTransferer.prototype}
	   */
	  Mixin: {

	    /**
	     * Transfer props from this component to a target component.
	     *
	     * Props that do not have an explicit transfer strategy will be transferred
	     * only if the target component does not already have the prop set.
	     *
	     * This is usually used to pass down props to a returned root component.
	     *
	     * @param {ReactDescriptor} descriptor Component receiving the properties.
	     * @return {ReactDescriptor} The supplied `component`.
	     * @final
	     * @protected
	     */
	    transferPropsTo: function(descriptor) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        descriptor._owner === this,
	        '%s: You can\'t call transferPropsTo() on a component that you ' +
	        'don\'t own, %s. This usually means you are calling ' +
	        'transferPropsTo() on a component passed in as props or children.',
	        this.constructor.displayName,
	        descriptor.type.displayName
	      ) : invariant(descriptor._owner === this));

	      // Because descriptors are immutable we have to merge into the existing
	      // props object rather than clone it.
	      transferInto(descriptor.props, this.props);

	      return descriptor;
	    }

	  }
	};

	module.exports = ReactPropTransferer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without loosing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};


	module.exports = keyOf;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = __webpack_require__(19);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {var args=Array.prototype.slice.call(arguments,2);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
	    }
	  };
	}

	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};

	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canMutationObserver = typeof window !== 'undefined'
	    && window.MutationObserver;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    var queue = [];

	    if (canMutationObserver) {
	        var hiddenDiv = document.createElement("div");
	        var observer = new MutationObserver(function () {
	            var queueList = queue.slice();
	            queue.length = 0;
	            queueList.forEach(function (fn) {
	                fn();
	            });
	        });

	        observer.observe(hiddenDiv, { attributes: true });

	        return function nextTick(fn) {
	            if (!queue.length) {
	                hiddenDiv.setAttribute('yes', 'no');
	            }
	            queue.push(fn);
	        };
	    }

	    if (canPost) {
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule emptyFunction
	 */

	var copyProperties = __webpack_require__(23);

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	copyProperties(emptyFunction, {
	  thatReturns: makeEmptyFunction,
	  thatReturnsFalse: makeEmptyFunction(false),
	  thatReturnsTrue: makeEmptyFunction(true),
	  thatReturnsNull: makeEmptyFunction(null),
	  thatReturnsThis: function() { return this; },
	  thatReturnsArgument: function(arg) { return arg; }
	});

	module.exports = emptyFunction;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      nextClass && (className += ' ' + nextClass);
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule merge
	 */

	"use strict";

	var mergeInto = __webpack_require__(24);

	/**
	 * Shallow merges two structures into a return value, without mutating either.
	 *
	 * @param {?object} one Optional object with properties to merge from.
	 * @param {?object} two Optional object with properties to merge from.
	 * @return {object} The shallow extension of one by two.
	 */
	var merge = function(one, two) {
	  var result = {};
	  mergeInto(result, one);
	  mergeInto(result, two);
	  return result;
	};

	module.exports = merge;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule copyProperties
	 */

	/**
	 * Copy properties from one or more objects (up to 5) into the first object.
	 * This is a shallow copy. It mutates the first object and also returns it.
	 *
	 * NOTE: `arguments` has a very significant performance penalty, which is why
	 * we don't support unlimited arguments.
	 */
	function copyProperties(obj, a, b, c, d, e, f) {
	  obj = obj || {};

	  if ("production" !== process.env.NODE_ENV) {
	    if (f) {
	      throw new Error('Too many arguments passed to copyProperties');
	    }
	  }

	  var args = [a, b, c, d, e];
	  var ii = 0, v;
	  while (args[ii]) {
	    v = args[ii++];
	    for (var k in v) {
	      obj[k] = v[k];
	    }

	    // IE ignores toString in object iteration.. See:
	    // webreflection.blogspot.com/2007/07/quick-fix-internet-explorer-and.html
	    if (v.hasOwnProperty && v.hasOwnProperty('toString') &&
	        (typeof v.toString != 'undefined') && (obj.toString !== v.toString)) {
	      obj.toString = v.toString;
	    }
	  }

	  return obj;
	}

	module.exports = copyProperties;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule mergeInto
	 * @typechecks static-only
	 */

	"use strict";

	var mergeHelpers = __webpack_require__(25);

	var checkMergeObjectArg = mergeHelpers.checkMergeObjectArg;
	var checkMergeIntoObjectArg = mergeHelpers.checkMergeIntoObjectArg;

	/**
	 * Shallow merges two structures by mutating the first parameter.
	 *
	 * @param {object|function} one Object to be merged into.
	 * @param {?object} two Optional object with properties to merge from.
	 */
	function mergeInto(one, two) {
	  checkMergeIntoObjectArg(one);
	  if (two != null) {
	    checkMergeObjectArg(two);
	    for (var key in two) {
	      if (!two.hasOwnProperty(key)) {
	        continue;
	      }
	      one[key] = two[key];
	    }
	  }
	}

	module.exports = mergeInto;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule mergeHelpers
	 *
	 * requiresPolyfills: Array.isArray
	 */

	"use strict";

	var invariant = __webpack_require__(20);
	var keyMirror = __webpack_require__(26);

	/**
	 * Maximum number of levels to traverse. Will catch circular structures.
	 * @const
	 */
	var MAX_MERGE_DEPTH = 36;

	/**
	 * We won't worry about edge cases like new String('x') or new Boolean(true).
	 * Functions are considered terminals, and arrays are not.
	 * @param {*} o The item/object/value to test.
	 * @return {boolean} true iff the argument is a terminal.
	 */
	var isTerminal = function(o) {
	  return typeof o !== 'object' || o === null;
	};

	var mergeHelpers = {

	  MAX_MERGE_DEPTH: MAX_MERGE_DEPTH,

	  isTerminal: isTerminal,

	  /**
	   * Converts null/undefined values into empty object.
	   *
	   * @param {?Object=} arg Argument to be normalized (nullable optional)
	   * @return {!Object}
	   */
	  normalizeMergeArg: function(arg) {
	    return arg === undefined || arg === null ? {} : arg;
	  },

	  /**
	   * If merging Arrays, a merge strategy *must* be supplied. If not, it is
	   * likely the caller's fault. If this function is ever called with anything
	   * but `one` and `two` being `Array`s, it is the fault of the merge utilities.
	   *
	   * @param {*} one Array to merge into.
	   * @param {*} two Array to merge from.
	   */
	  checkMergeArrayArgs: function(one, two) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(one) && Array.isArray(two),
	      'Tried to merge arrays, instead got %s and %s.',
	      one,
	      two
	    ) : invariant(Array.isArray(one) && Array.isArray(two)));
	  },

	  /**
	   * @param {*} one Object to merge into.
	   * @param {*} two Object to merge from.
	   */
	  checkMergeObjectArgs: function(one, two) {
	    mergeHelpers.checkMergeObjectArg(one);
	    mergeHelpers.checkMergeObjectArg(two);
	  },

	  /**
	   * @param {*} arg
	   */
	  checkMergeObjectArg: function(arg) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !isTerminal(arg) && !Array.isArray(arg),
	      'Tried to merge an object, instead got %s.',
	      arg
	    ) : invariant(!isTerminal(arg) && !Array.isArray(arg)));
	  },

	  /**
	   * @param {*} arg
	   */
	  checkMergeIntoObjectArg: function(arg) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      (!isTerminal(arg) || typeof arg === 'function') && !Array.isArray(arg),
	      'Tried to merge into an object, instead got %s.',
	      arg
	    ) : invariant((!isTerminal(arg) || typeof arg === 'function') && !Array.isArray(arg)));
	  },

	  /**
	   * Checks that a merge was not given a circular object or an object that had
	   * too great of depth.
	   *
	   * @param {number} Level of recursion to validate against maximum.
	   */
	  checkMergeLevel: function(level) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      level < MAX_MERGE_DEPTH,
	      'Maximum deep merge depth exceeded. You may be attempting to merge ' +
	      'circular structures in an unsupported way.'
	    ) : invariant(level < MAX_MERGE_DEPTH));
	  },

	  /**
	   * Checks that the supplied merge strategy is valid.
	   *
	   * @param {string} Array merge strategy.
	   */
	  checkArrayStrategy: function(strategy) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      strategy === undefined || strategy in mergeHelpers.ArrayStrategies,
	      'You must provide an array strategy to deep merge functions to ' +
	      'instruct the deep merge how to resolve merging two arrays.'
	    ) : invariant(strategy === undefined || strategy in mergeHelpers.ArrayStrategies));
	  },

	  /**
	   * Set of possible behaviors of merge algorithms when encountering two Arrays
	   * that must be merged together.
	   * - `clobber`: The left `Array` is ignored.
	   * - `indexByIndex`: The result is achieved by recursively deep merging at
	   *   each index. (not yet supported.)
	   */
	  ArrayStrategies: keyMirror({
	    Clobber: true,
	    IndexByIndex: true
	  })

	};

	module.exports = mergeHelpers;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	"use strict";

	var invariant = __webpack_require__(20);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }
/******/ ])
});
