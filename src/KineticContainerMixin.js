var React = require('react');
var Kinetic = require('kinetic');
var cloneWithProps = require('react/lib/cloneWithProps');

var KineticContainerMixin = {
  nodeRender: function () {
    return React.withContext({
      kineticContainer: this.getKineticNode()
    }, function () {
      var children = React.Children.map(
        this.props.children,
        function (child) {
          return cloneWithProps(child, {});
        }.bind(this)
      );
      return React.DOM.span({}, children);
    }.bind(this));
  }
};

module.exports = KineticContainerMixin;
