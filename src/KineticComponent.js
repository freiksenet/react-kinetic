var ReactComponent = require('react/lib/ReactComponent');
var ReactComponentMixin = ReactComponent.Mixin;
var merge = require('react/lib/merge');
var KineticProperty = require('./KineticProperty').KineticProperty;

/**
 * A base mixin for Kinetic nodes.
 *
 * Kinetic Components don't mount on DOM, instead they create corresponding
 * Kinetic node in mount node. Code for creating the node should be defined
 * in render and should return a valid Kinetic node. update defines how to
 * update Kinetic node when new props arrive.
 *
 * Kinetic component have no react state and while they roughly follow
 * React Composite Component lifecycle, this part is not fully implemented.
 * They are 'full' React components nevertheless and are members of React
 * hierarchy, so you can include them in render methods of your components.
 */
var KineticComponentMixin = merge(ReactComponentMixin, {
  mountComponent: function (rootID, transaction, mountDepth) {
    ReactComponentMixin.mountComponent.apply(this, arguments);

    if (this.componentWillMount) {
      this.componentWillMount();
    }

    this._node = this.render();
    this.nodeName = this._node.className || this._node.nodeType;
    this.updateNodeProperties({});

    if (this.mountKineticChildren) {
      this.mountKineticChildren(this.props.children, transaction);
    }

    if (this.componentDidMount) {
      transaction.getReactMountReady().enqueue(this.componentDidMount, this);
    }

    return this._node;
  },

  receiveComponent: function (nextComponent, transaction) {
    var prevProps = this.props;
    var nextProps = nextComponent.props;

    if (this.updateChildren) {
      this.updateChildren(nextProps.children, transaction);
    }

    this.props = nextProps;
    this.updateNodeProperties(prevProps);

    if (this.componentDidUpdate) {
      transaction.getReactMountReady().enqueue(
        this.componentDidUpdate.bind(this, prevProps),
        this
      );
    }
  },

  unmountComponent: function () {
    if (this.componentWillUnmount) {
      this.componentWillUnmount();
    }

    this.unmountChildren();
    this._node.destroy();
    ReactComponentMixin.unmountComponent.call(this);
  },

  getKineticNode: function () {
    return this._node;
  },

  _isPropValid: function (prop) {
    var nodeName = this.nodeName;
    var validForNode = KineticProperty.getPropertyName[prop];
    return (validForNode &&
            ((nodeName === validForNode) ||
             (KineticProperty.isChild[nodeName + ":" + validForNode])));
  },

  updateNodeProperties: function (prevProps) {
    if (!this._propValidCache) {
      this._propValidCache = {};
    }
    var propCache = this._propValidCache;

    var propKey;
    var validProp;
    var eventName;
    var nextProps = this.props;
    var node = this.getKineticNode();
    var nodeName = this.nodeName;
    var validNodes = KineticProperty.getParents[nodeName];

    for (propKey in prevProps) {
      eventName = KineticProperty.getEventName[propKey];
      if (!propCache.hasOwnProperty(propKey)) {
        propCache[propKey] = this._isPropValid(propKey);
      }
      validProp = propCache[propKey];

      if (!nextProps.hasOwnProperty(propKey) &&
          prevProps.hasOwnProperty(propKey)) {
        if (eventName) {
          node.off(eventName);
        }
        else if (validProp) {
          node[propKey](KineticProperty.getDefaultValueForProperty[propKey]);
        }
      }
    }

    for (propKey in nextProps) {
      eventName = KineticProperty.getEventName[propKey];
      if (!propCache.hasOwnProperty(propKey)) {
        propCache[propKey] = this._isPropValid(propKey);
      }
      validProp = propCache[propKey];

      var nextProp = nextProps[propKey];
      var prevProp = prevProps[propKey];

      if (eventName) {
        node.off(eventName);
        node.on(eventName, nextProp);
      }
      else if (validProp) {
        if (nextProps.hasOwnProperty(propKey) && nextProp !== prevProp) {
          node[propKey](nextProp);
        }
      }
    }
  }
});

module.exports = KineticComponentMixin;
