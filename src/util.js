"use strict";

module.exports = {
  nodeRenderer: function () {
    if (this.nodeRender) {
      return this.nodeRender();
    } else {
      return null;
    }
  }
};
