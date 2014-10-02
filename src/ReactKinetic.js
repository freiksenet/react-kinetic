"use strict";

var KineticProperty = require('./KineticProperty');
var KineticPropertyConfig = require('./KineticPropertyConfig');

var KineticHierarchy = KineticPropertyConfig.KineticHierarchy;

KineticProperty.injectKineticProperties(
  KineticPropertyConfig.KineticPropertyConfig,
  KineticHierarchy,
  KineticPropertyConfig.KineticEvents
);

var KineticStage = require('./KineticStage');
var KineticFactory = require('./KineticFactory');

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
