var React = require('react');
var ReactComponentMixin = require('react/lib/ReactComponent').Mixin;

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
