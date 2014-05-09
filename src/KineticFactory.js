var Kinetic = require('kinetic');
var ReactComponent = require('react/lib/ReactComponent');
var ReactComponentMixin = ReactComponent.Mixin;
var KineticComponentMixin = require('./KineticComponent');
var KineticContainerMixin = require('./KineticContainer');
var util = require('./util');

var KineticFactory = {
  createClass: function (name, spec) {
    var baseMixins = [ReactComponentMixin, KineticComponentMixin];
    var additionalMixins = spec.mixins || [];
    var args = [name].concat(baseMixins, additionalMixins, [spec]);
    return util.createComponent.apply(this, args);
  },

  createSimpleClass: function (kineticClass, container) {
    return KineticFactory.createClass(kineticClass, {
      mixins: container ? [KineticContainerMixin] : [],

      render: function () {
        return new Kinetic[kineticClass];
      }
    });
  }
};

module.exports = KineticFactory;
