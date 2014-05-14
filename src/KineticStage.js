var Kinetic = require('kinetic');
var DOMPropertyOperations = require('react/lib/DOMPropertyOperations');
var ReactBrowserComponentMixin = require('react/lib/ReactBrowserComponentMixin');
var ReactComponent = require('react/lib/ReactComponent');
var ReactUpdates = require('react/lib/ReactUpdates');
var ReactDOMComponent = require('react/lib/ReactDOMComponent');
var ReactComponentMixin = ReactComponent.Mixin;
var KineticContainerMixin = require('./KineticContainer');
var util = require('./util');

/**
 * Core Kinetic stage.
 *
 * Only Kinetic component that has React DOM representation, thus it is not
 * mixing KineticComponentMixin.
 */
var Stage = util.createComponent('Stage',
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

    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(
      this.mountKineticChildren,
      this,
      this.props.children,
      transaction
    );
    ReactUpdates.ReactReconcileTransaction.release(transaction);
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

module.exports = Stage;
