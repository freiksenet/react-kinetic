var ReactMultiChild = require('react/lib/ReactMultiChild');

var merge = require('react/lib/merge');

/**
 * Represents a Kinetic node that can have children.
 */
var KineticContainerMixin = merge(ReactMultiChild.Mixin, {
  mountKineticChildren: function (children, transaction) {
    var mountedImages = this.mountChildren(
      children,
      transaction
    );

    var node = this.getKineticNode();
    for (var i in mountedImages) {
      node.add(mountedImages[i]);
    }
  },

  updateChildren: function(nextChildren, transaction) {
    this._updateChildren(nextChildren, transaction);
  }
});

module.exports = KineticContainerMixin;
