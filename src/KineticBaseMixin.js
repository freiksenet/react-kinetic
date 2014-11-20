"use strict";

var KineticProperty = require('./KineticProperty').KineticProperty;

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
