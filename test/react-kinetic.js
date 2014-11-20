"use strict";

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var RK = require('../react-kinetic');

describe('Stage', function () {
  it('can render empty Stage', function () {
    var stage = TestUtils.renderIntoDocument(RK.Stage(null));
    expect(stage.getDOMNode().textContent).toEqual('');
  });
});

function renderIntoStage(component) {
  var stageInstance = TestUtils.renderIntoDocument(
    RK.Stage(null,
      RK.Layer(null, component)));
  return stageInstance;
}

describe('Circle', function () {
  it('can render Circle', function () {
    var stageInstance = TestUtils.renderIntoDocument(
      RK.Stage(null,
        RK.Layer(null, RK.Circle({
            id: 1, x: 10, y: 20,
            radius: 5, stroke: 'red'
        }))));
    var circleInstance = TestUtils.findRenderedComponentWithType(
      stageInstance,
      RK.Circle
    );
    var kineticCircle = circleInstance.getKineticNode();
    expect(kineticCircle.x()).toBe(10);
    expect(kineticCircle.y()).toBe(20);
    expect(kineticCircle.radius()).toBe(5);
    expect(kineticCircle.stroke()).toBe('red');
    expect(kineticCircle.id()).toBe(1);
  });
});

describe('Text', function () {

  it('can render Text with no size', function () {
    var stageInstance = renderIntoStage(RK.Text({text: 'Hello, world'}));
    var renderedText = TestUtils.findRenderedComponentWithType(
      stageInstance,
      RK.Text
    );
    var kineticInstance = renderedText.getKineticNode();
    expect(kineticInstance.text()).toEqual('Hello, world');
    expect(kineticInstance.getText()).toEqual('Hello, world');
  });

  it('can render Text with size', function () {
    var stageInstance = renderIntoStage(RK.Text({
      x: 10,
      y: 15,
      text: 'Hello, world',
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'green'
    }));
    var renderedText = TestUtils.findRenderedComponentWithType(
      stageInstance,
      RK.Text
    );
    var kineticInstance = renderedText.getKineticNode();
    expect(kineticInstance.text()).toEqual('Hello, world');
  });
});

describe('Text2', function () {

});

describe('TextPath', function () {
  it('can render TextPath', function () {
    var txt = (
      'All the world\'s a stage, and all the men and women merely players.'
    );
    var stageInstance = renderIntoStage(RK.TextPath({
      x: 100,
      y: 50,
      fill: '#333',
      fontSize: '24',
      fontFamily: 'Arial',
      text: txt,
      data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'
    }));
    var renderedTextPath = TestUtils.findRenderedComponentWithType(
      stageInstance,
      RK.TextPath
    );
    expect(renderedTextPath).not.toBeNull();
    var kineticInstance = renderedTextPath.getKineticNode();
    expect(kineticInstance.getText()).toEqual(txt);
  });
});
