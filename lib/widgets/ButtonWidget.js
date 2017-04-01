'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  parentClass: _react.PropTypes.string,
  btnText: _react.PropTypes.string.isRequired
};

var defaultProps = {
  btnText: "Button",
  parentClass: null
};

var ButtonWidget = function ButtonWidget(props, context) {

  var elementProps = {};

  for (var prop in props) {
    if (prop != 'btnText' && prop != 'parentClass' && prop != 'children') {
      elementProps[prop] = props[prop];
    }
  }

  return _react2.default.createElement(
    'div',
    { className: props.parentClass },
    _react2.default.createElement(
      'button',
      elementProps,
      props.btnLabel,
      props.children
    )
  );
};

ButtonWidget.propTypes = propTypes;

exports.default = ButtonWidget;