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
      existingProps[propName] = [propType, defaultValue];
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
