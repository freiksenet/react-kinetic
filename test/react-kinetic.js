var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var RK = require('../react-kinetic');

describe('Stage', function () {
  it('can render empty Stage', function () {
    var stage = TestUtils.renderIntoDocument(RK.Stage(null));
    expect(stage.getDOMNode().textContent).toEqual('');
  });
});

function renderSingle(type, component) {
  var stage = TestUtils.renderIntoDocument(
    RK.Stage(null,
      RK.Layer(null, component)));
  return TestUtils.findRenderedComponentWithType(stage, type);
}

describe('Circle', function () {
  it('can render Circle', function () {
    var rendered = renderSingle(RK.Circle, RK.Circle({x: 10, y: 20, radius: 5, stroke: 'red'}));
    expect(rendered.props.x).toBe(10);
    expect(rendered.props.y).toBe(20);
    expect(rendered.props.radius).toBe(5);
  });
});

describe('Text', function () {
  it('can render Text with no size', function () {
    var rendered = renderSingle(RK.Text, RK.Text(null, "Hello, world"));
    expect(rendered.getDOMNode().textContent).toEqual('Hello, world');
  });
  it('can render Text with size', function () {
    var rendered = renderSingle(RK.Text, RK.Text({
      x: 10,
      y: 15,
      text: 'Simple Text',
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'green'
    }, "Hello, world"));
    expect(rendered.getDOMNode().textContent).toEqual('Hello, world');
  });
});

describe('TextPath', function () {
  it('can render TextPath', function () {
    var txt = 'All the world\'s a stage, and all the men and women merely players.';
    var rendered = renderSingle(RK.TextPath, RK.TextPath({
      x: 100,
      y: 50,
      fill: '#333',
      fontSize: '24',
      fontFamily: 'Arial',
      text: txt,
      data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'
    }));
    expect(rendered.props.text).toBe(txt);
  });
});
