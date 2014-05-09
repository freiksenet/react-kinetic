var KineticProperty = require('./KineticProperty');
var KineticPropertyConfig = require('./KineticPropertyConfig');

var KineticHierarchy = KineticPropertyConfig.KineticHierarchy;

KineticProperty.injectKineticProperties(
  KineticPropertyConfig.KineticPropertyConfig,
  KineticHierarchy,
  KineticPropertyConfig.KineticEvents
);

var KineticStage = require('./KineticStage');
var KineticLayer = require('./KineticLayer');
var KineticFactory = require('./KineticFactory');

module.exports = {
  Stage: KineticStage,
  Layer: KineticLayer
};

var excludeClasses = {
  Stage: true,
  Node: true,
  BaseLayer: true,
  Layer: true,
  FastLayer: true,
  Container: true
};

var containerClasses = {
  Group: true,
  Label: true
};

for (var kineticClass in KineticHierarchy) {
  if (!excludeClasses[kineticClass]) {
    module.exports[kineticClass] = KineticFactory.createSimpleClass(
      kineticClass,
      containerClasses[kineticClass]
    );
  }
}
