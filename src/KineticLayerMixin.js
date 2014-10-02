"use strict";

var KineticLayerMixin = {
  componentDidUpdate: function () {
    this.getKineticNode().draw();
  }
};

module.exports = KineticLayerMixin;
