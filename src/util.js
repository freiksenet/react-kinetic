var React = require('react');

module.exports = {
  nodeRenderer: function () {
    if (this.nodeRender) {
      return this.nodeRender();
    } else {
      return null;
    }
  }
};
