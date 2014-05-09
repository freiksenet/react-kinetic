var mixInto = require('react/lib/mixInto');
var ReactDescriptor = require('react/lib/ReactDescriptor');

module.exports = {
  createComponent: function (name) {
    var ReactKineticComponent = function (descriptor) {
      this.construct(descriptor);
    };
    ReactKineticComponent.displayName = name;
    for (var i = 1, l = arguments.length; i < l; i++) {
      mixInto(ReactKineticComponent, arguments[i]);
    }

    var ConvenienceConstructor = ReactDescriptor.createFactory(
      ReactKineticComponent
    );

    return ConvenienceConstructor;
    }
};
