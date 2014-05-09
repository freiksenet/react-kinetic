var Kinetic = require('kinetic');
var KineticContainerMixin = require('./KineticContainer');
var KineticFactory = require('./KineticFactory');

var Layer = KineticFactory.createClass('Layer', {
  mixins: [KineticContainerMixin],

  componentDidUpdate: function () {
    this.getKineticNode().draw();
  },

  render: function () {
    return new Kinetic.Layer();
  }
});

module.exports = Layer;
