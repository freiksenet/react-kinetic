var Kinetic = require('kinetic');

var DOMPropertyOperations = require('react/lib/DOMPropertyOperations');
var ReactBrowserComponentMixin = require('react/lib/ReactBrowserComponentMixin');
var ReactComponent = require('react/lib/ReactComponent');
var ReactDescriptor = require('react/lib/ReactDescriptor');
var ReactMount = require('react/lib/ReactMount');
var ReactMultiChild = require('react/lib/ReactMultiChild');
var ReactDOMComponent = require('react/lib/ReactDOMComponent');

var ReactComponentMixin = ReactComponent.Mixin;

var mixInto = require('react/lib/mixInto');
var merge = require('react/lib/merge');

module.exports = {};

function createComponent (name) {
  var ReactKineticComponent = function (descriptor) {
    this.construct(descriptor);
  };
  ReactKineticComponent.displayName = name;
  for (var i = 1, l = arguments.length; i < l; i++) {
    mixInto(ReactKineticComponent, arguments[i]);
  }

  var ConvenienceConstructor = ReactDescriptor.createFactory(ReactKineticComponent);

  return ConvenienceConstructor;
}

/**
 * A base mixin for Kinetic nodes.
 *
 * Kinetic Components don't mount on DOM, instead they create corresponding
 * Kinetic node in mount node. Code for creating the node should be defined
 * in render and should return a valid Kinetic node. update defines how to
 * update Kinetic node when new props arrive.
 */
var KineticComponentMixin = merge(ReactComponentMixin, {
  mountComponent: function (rootID, transaction, mountDepth) {
    ReactComponentMixin.mountComponent.apply(this, arguments);
    this._node = this.render();

    if (this.mountKineticChildren) {
      this.mountKineticChildren(this.props.children, transaction);
    }

    return this._node;
  },

  unmountComponent: function () {
    ReactComponentMixin.unmountComponent.call(this);
    this.unmountChildren();
    this._node.destroy();
  },

  getKineticNode: function () {
    return this._node;
  }
});

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
  }
});

/**
 * Core Kinetic stage.
 *
 * Only Kinetic component that has React DOM representation, thus it is not
 * mixing KineticComponentMixin.
 */
module.exports.Stage = createComponent('Stage',
  ReactDOMComponent.Mixin,
  ReactComponentMixin,
  KineticContainerMixin,
  ReactBrowserComponentMixin, {

  mountComponent: function(rootID, transaction, mountDepth) {
    ReactComponentMixin.mountComponent.call(
      this,
      rootID,
      transaction,
      mountDepth
    );
    transaction.getReactMountReady().enqueue(this.componentDidMount, this);

    var idMarkup = DOMPropertyOperations.createMarkupForID(rootID);
    return '<div ' + idMarkup + '></div>';
  },

  componentDidMount: function () {
    this._node = this.render();

    var transaction = ReactComponent.ReactReconcileTransaction.getPooled();
    transaction.perform(
      this.mountKineticChildren,
      this,
      this.props.children,
      transaction
    );
    ReactComponent.ReactReconcileTransaction.release(transaction);
  },

  getKineticNode: function () {
    return this._node;
  },

  render: function () {
    return new Kinetic.Stage({
      container: this.getDOMNode(),
      width: this.props.width,
      height: this.props.height
    });
  }
});

function createClass (name, spec) {
  var baseMixins = [ReactComponentMixin, KineticComponentMixin];
  var additionalMixins = spec.mixins || [];
  var args = [name].concat(baseMixins, additionalMixins, [spec]);
  return createComponent.apply(this, args);
}

module.exports.Layer = createClass('Layer', {
  mixins: [KineticContainerMixin],

  render: function () {
    return new Kinetic.Layer();
  }
});

module.exports.Rect = createClass('Rect', {
  render: function () {
    return new Kinetic.Rect({
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height,
      fill: this.props.fill
    });
  }
});
