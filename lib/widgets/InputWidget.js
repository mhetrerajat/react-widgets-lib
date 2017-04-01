'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  parentClass: _react.PropTypes.string,
  labelClass: _react.PropTypes.string,
  labelName: _react.PropTypes.string.isRequired
};

var defaultProps = {
  parentClass: null,
  labelClass: null
};

var InputWidget = function InputWidget(props, context) {

  var elementProps = {};

  for (var prop in props) {
    if (prop != 'labelName' && prop != 'parentClass' && prop != 'labelClass' && prop != 'children') {
      elementProps[prop] = props[prop];
    }
  }

  return _react2.default.createElement(
    'div',
    { className: props.parentClass },
    _react2.default.createElement('input', elementProps),
    props.children,
    _react2.default.createElement(
      'label',
      { className: props.labelClass },
      props.labelName
    )
  );
};

InputWidget.propTypes = propTypes;
InputWidget.defaultProps = defaultProps;

exports.default = InputWidget;