webpackJsonpReactKinetic([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	window.requestAnimationFrame = window.requestAnimationFrame ||
	  window.mozRequestAnimationFrame ||
	  window.webkitRequestAnimationFrame ||
	  window.msRequestAnimationFrame;

	(function (global) {
	  var isNaN = Number.isNaN;

	  Object.defineProperty(Math, 'sign', {
	    value: function sign(value) {
	      var n = +value;
	      if (isNaN(n))
	        return n /* NaN */;

	      if (n === 0)
	        return n; // Keep the sign of the zero.

	      return (n < 0) ? -1 : 1;
	             },
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	})(this);

	function limit (val, min, max) {
	  if (val < min) {
	    return min;
	  } else if (val > max) {
	    return max;
	  } else {
	    return val;
	  }
	}

	var React = __webpack_require__(2);
	var ReactKinetic = __webpack_require__(1);

	var Stage = ReactKinetic.Stage;
	var Layer = ReactKinetic.Layer;
	var Sprite = ReactKinetic.Sprite;
	var KImage = ReactKinetic.Image;

	var InputHandler = function () {
	  var keyCodeMapping = {
	    37: 'leftOn',
	    38: 'upOn',
	    39: 'rightOn',
	    40: 'downOn'
	  };

	  this.leftOn = false;
	  this.rigttOn = false;
	  this.downOn = false;
	  this.upOn = false;

	  this.handleKeyDown = function (e) {
	    var key = e.keyCode;
	    var direction = keyCodeMapping[key];
	    if (direction) {
	      this[direction] = true;
	    }
	  }.bind(this);

	  this.handleKeyUp = function (e) {
	    var key = e.keyCode;
	    var direction = keyCodeMapping[key];
	    if (direction) {
	      this[direction] = false;
	    }
	  }.bind(this);

	  document.body.addEventListener("keydown", this.handleKeyDown, false);
	  document.body.addEventListener("keyup", this.handleKeyUp, false);
	};

	var SpriteImage = new Image(240, 2161);
	SpriteImage.src = "./planesprite.png";

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

	var Ship = React.createClass({displayName: 'Ship',
	  getDefaultProps: function () {
	    return {
	      image: SpriteImage,
	      animations: spriteAnimations,
	      frameIndex: 0,
	      animation: 'base',
	      velX: 0
	    };
	  },

	  render: function () {
	    var frameStep = this.props.maxSpeed / 5;
	    var animationDirection;
	    var turningFrame;
	    turningFrame = Math.floor(Math.abs(this.props.velX) / frameStep);
	    if (turningFrame > 4) {
	      turningFrame = 4;
	    }
	    if (this.props.velX < 0) {
	      animationDirection = 'toLeft';
	    } else if (this.props.velX > 0) {
	      animationDirection = 'toRight';
	    } else {
	      animationDirection = 'base';
	      turningFrame = 0;
	    }

	    return (
	      Sprite({x: this.props.x, 
	              y: this.props.y, 
	              image: this.props.image, 
	              animation: animationDirection, 
	              animations: this.props.animations, 
	              frameIndex: turningFrame})
	    );
	  }
	});

	var Game = React.createClass({displayName: 'Game',
	  getDefaultProps: function () {
	    return {
	      shipMaxSpeed: 300,
	      shipAcceleration: 300,
	      shipHeight: 191,
	      shipWidth: 95
	    };
	  },

	  getInitialState: function () {
	    return {
	      playerY: this.props.height - 200,
	      playerX: (this.props.width / 2) - 47,
	      playerVelX: 0,
	      playerVelY: 0,
	      playerAccX: 0,
	      playerAccY: 0,
	      currentTick: 0
	    };
	  },

	  tick: function (timestampMs) {
	    var timestamp = timestampMs / 1000.0;
	    if (this.state.currentTick === 0) {
	      this.setState({
	        currentTick: timestamp
	      });
	    } else {
	      var maxSpeed = this.props.shipMaxSpeed;
	      var x = this.state.playerX;
	      var y = this.state.playerY;
	      var velX = this.state.playerVelX;
	      var velY = this.state.playerVelY;
	      var diff = timestamp - this.state.currentTick;
	      var inputHandler = this.props.inputHandler;

	      var xMin = 0;
	      var xMax = this.props.width - this.props.shipWidth;
	      var yMin = 0;
	      var yMax = this.props.height - this.props.shipHeight;

	      var newX;
	      var newY;
	      var newVelX;
	      var newVelY;
	      var newAccX;
	      var newAccY;

	      if (inputHandler.leftOn) {
	        newAccX = -this.props.shipAcceleration;
	      } else if (inputHandler.rightOn) {
	        newAccX = this.props.shipAcceleration;
	      } else if (velX <= -1) {
	        newAccX = this.props.shipAcceleration;
	      } else if (velX >= 1) {
	        newAccX = -this.props.shipAcceleration;
	      } else {
	        newAccX = 0;
	      }

	      if (inputHandler.upOn) {
	        newAccY = -this.props.shipAcceleration;
	      } else if (inputHandler.downOn) {
	        newAccY = this.props.shipAcceleration;
	      } else if (velY <= -1) {
	        newAccY = this.props.shipAcceleration;
	      } else if (velY >= 1) {
	        newAccY = -this.props.shipAcceleration;
	      } else {
	        newAccY = 0;
	      }

	      newVelX = velX + newAccX * diff;
	      newX = x + velX * diff + newAccX * Math.pow(diff, 2);
	      newVelY = velY + newAccY * diff;
	      newY = y + velY * diff + newAccY * Math.pow(diff, 2);

	      newVelX = limit(newVelX, -maxSpeed, maxSpeed);
	      newX = limit(newX, xMin, xMax);
	      newVelY = limit(newVelY, -maxSpeed, maxSpeed);
	      newY = limit(newY, yMin, yMax);

	      if (newAccX === 0 && Math.abs(newVelX) < 1) {
	        newVelX = 0;
	      }
	      if (newAccY === 0 && Math.abs(newVelY) < 1) {
	        newVelY = 0;
	      }

	      this.setState({
	        currentTick: timestamp,
	        playerX: newX,
	        playerY: newY,
	        playerVelX: newVelX,
	        playerVelY: newVelY,
	        playerAccX: newAccX,
	        playerAccY: 0
	      });
	    }
	    window.requestAnimationFrame(this.tick);
	  },

	  componentDidMount: function () {
	    window.requestAnimationFrame(this.tick);
	  },

	  render: function () {
	    return (
	      Layer(null, 
	        Ship({x: this.state.playerX, 
	              y: this.state.playerY, 
	              velX: this.state.playerVelX, 
	              maxSpeed: this.props.shipMaxSpeed})
	      )
	    );
	  }
	});

	SpriteImage.onload = function () {
	  React.renderComponent(
	    Stage({height: 700, width: 1000}, 
	      Game({height: 700, width: 1000, 
	            inputHandler: new InputHandler()})
	    ),
	    document.getElementById('canvas')
	  );
	};


/***/ }
]);