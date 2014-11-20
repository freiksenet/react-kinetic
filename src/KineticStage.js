"use strict";

var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var Kinetic = require('kinetic');
var KineticBaseMixin = require('./KineticBaseMixin');
var KineticContainerMixin = require('./KineticContainerMixin');

/**
 * Core Kinetic stage.
 */
var Stage = React.createClass({
  displayName: 'Stage',

  mixins: [KineticBaseMixin, KineticContainerMixin],

  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  componentDidMount: function () {
    // So kinetic requires container to be available on creation time, but
    // as we need to add nodes before the DOM is available, we use 'fake' node
    // and then copy children to real one.
    var oldNode = this.getKineticNode();
    // Kinetic modifies children array in place
    var children = oldNode.getChildren().slice();

    this._node = this.createKineticNode({}, this.refs.canvas.getDOMNode());
    this.updateNodeProperties({});

    children.forEach(function (child) {
      child.moveTo(this.getKineticNode());
    }.bind(this));

    oldNode.destroy();
  },

  createKineticNode: function (props, container) {
    if (!container) {
      container = document.createElement("div");
    }
    return new Kinetic.Stage({
      container: container
    });
  },

  render: function () {
    return React.withContext({
      kineticContainer: this.getKineticNode()
    }, function () {
      var children = React.Children.map(
        this.props.children,
        function (child) {
          return cloneWithProps(child, {});
        }.bind(this)
      );
      return React.DOM.div({},
        React.DOM.div({ref: 'canvas'}),
        children
      );
    }.bind(this));
  }
});

module.exports = Stage;
