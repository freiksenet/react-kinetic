var Kinetic = require('kinetic');
var KineticProperty = require('./KineticProperty').KineticProperty;

var KineticBaseMixin = {
  componentWillMount: function () {
    this._node = this.createKineticNode();
    this.nodeName = this._node.className || this._node.nodeType;
  },

  componentDidMount: function () {
    this.updateNodeProperties({});
  },

  componentDidUpdate: function (prevProps) {
    this.updateNodeProperties(prevProps);
  },

  componentWillUnmount: function () {
    console.log('unm');
    this.getKineticNode().destroy();
  },

  getKineticNode: function () {
    return this._node;
  },

  _isPropValid: function (prop) {
    var nodeName = this.nodeName;
    return KineticProperty.getValidProps[nodeName][prop];
  },

  updateNodeProperties: function (prevProps) {
    if (!this._propValidCache) {
      this._propValidCache = {};
    }
    var propCache = this._propValidCache;

    var propKey;
    var validProp;
    var eventName;
    var nextProps = this.props;
    var node = this.getKineticNode();
    var nodeName = this.nodeName;
    var validNodes = KineticProperty.getParents[nodeName];

    for (propKey in prevProps) {
      eventName = KineticProperty.getEventName[propKey];
      if (!propCache.hasOwnProperty(propKey)) {
        propCache[propKey] = this._isPropValid(propKey);
      }
      validProp = propCache[propKey];

      if (!nextProps.hasOwnProperty(propKey) &&
          prevProps.hasOwnProperty(propKey)) {
        if (eventName) {
          node.off(eventName);
        }
        else if (validProp) {
          node[propKey](validProp[1]);
        }
      }
    }

    for (propKey in nextProps) {
      eventName = KineticProperty.getEventName[propKey];
      if (!propCache.hasOwnProperty(propKey)) {
        propCache[propKey] = this._isPropValid(propKey);
      }
      validProp = propCache[propKey];

      var nextProp = nextProps[propKey];
      var prevProp = prevProps[propKey];

      if (eventName) {
        node.off(eventName);
        node.on(eventName, nextProp);
      }
      else if (validProp) {
        if (nextProps.hasOwnProperty(propKey) && nextProp !== prevProp) {
          node[propKey](nextProp);
        }
      }
    }
  }
};

module.exports = KineticBaseMixin;
