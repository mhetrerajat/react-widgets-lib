"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  labelName: _react.PropTypes.string.isRequired,
  disabledOptionItem: _react.PropTypes.shape({
    value: _react.PropTypes.any,
    text: _react.PropTypes.string
  }),
  optionItems: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  optionValueFieldName: _react.PropTypes.string,
  optionTextFieldName: _react.PropTypes.string,
  parentClass: _react.PropTypes.string,
  labelClass: _react.PropTypes.string
};

var defaultProps = {
  disabledOptionItem: {
    value: "",
    text: "Choose"
  },
  optionValueFieldName: "value",
  optionTextFieldName: "text",
  className: "form-control",
  parentClass: "form-group form-material floating",
  labelClass: "floating-label"
};

var SelectWidget = function SelectWidget(props, context) {

  var elementProps = {};
  var _excludes = ['labelName', 'parentClass', 'labelClass', 'children', 'optionItems', 'disabledOptionItem', 'optionValueFieldName', 'optionTextFieldName'];

  for (var prop in props) {
    if (_excludes.indexOf(prop) == -1) {
      elementProps[prop] = props[prop];
    }
  }

  return _react2.default.createElement(
    "div",
    { className: props.parentClass },
    _react2.default.createElement(
      "select",
      elementProps,
      props.optionItems.map(function (item, index) {
        return _react2.default.createElement(
          "option",
          { value: item[props.optionValueFieldName], key: item[props.optionValueFieldName] },
          item[props.optionTextFieldName]
        );
      })
    ),
    props.children,
    _react2.default.createElement(
      "label",
      { className: props.labelClass },
      props.labelName
    )
  );
};

SelectWidget.propTypes = propTypes;
SelectWidget.defaultProps = defaultProps;

exports.default = SelectWidget;