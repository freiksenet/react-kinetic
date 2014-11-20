"use strict";

var React = require('react');
var Kinetic = require('kinetic');
var KineticBaseMixin = require('./KineticBaseMixin');
var KineticComponentMixin = require('./KineticComponentMixin');
var KineticContainerMixin = require('./KineticContainerMixin');
var KineticLayerMixin = require('./KineticLayerMixin');
var util = require('./util');

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
