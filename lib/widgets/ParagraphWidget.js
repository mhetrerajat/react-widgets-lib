'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParagraphWidget = function ParagraphWidget(props, context) {
  var elementProps = {};
  var _excludes = ['children'];

  for (var prop in props) {
    if (_excludes.indexOf(prop) == -1) {
      elementProps[prop] = props[prop];
    }
  }

  return _react2.default.createElement(
    'p',
    elementProps,
    props.children
  );
};

exports.default = ParagraphWidget;