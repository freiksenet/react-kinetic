"use strict";

var React = require('react');

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
