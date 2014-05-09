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
    for (var parentKey in parents) {
      KineticProperty.isChild[type + ':' + parents[parentKey]] = true;
    }
  }

  for (var propName in kineticConfig) {
    var data = kineticConfig[propName];
    var propType = data.type;
    var defaultValue = data.defaultValue;
    var nodeType = data.nodeType;
    KineticProperty.getPropertyName[propName] = nodeType;
    KineticProperty.getPropertyType[propName] = propType;
    KineticProperty.getPropertyDefault[propName] = defaultValue;
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
   * For a "$child:$parent" strings returns whether child is a descendentant of
   * parent.
   */
  isChild: {},

  /**
   * Checks if that property is a valid Kinetic property and returns the
   * Kinetic type in belongs to.
   * @type {Object}
   */
  getPropertyName: {},

  /**
   * Returns type for given property. Valid types are String, Number, Boolean.
   * @type: {Object}
   */
  getPropertyType: {},

  /**
   * Returns default value for given property.
   * @type: {Object}
   */
  getPropertyDefault: {},
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
