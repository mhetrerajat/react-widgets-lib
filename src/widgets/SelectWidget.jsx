import React, { PropTypes } from 'react';


var propTypes = {
  labelName: PropTypes.string.isRequired,
  disabledOptionItem: PropTypes.shape({
    value: PropTypes.any,
    text: PropTypes.string
  }),
  optionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionValueFieldName : PropTypes.string,
  optionTextFieldName : PropTypes.string,
  parentClass: PropTypes.string,
  labelClass: PropTypes.string,
}


var defaultProps = {
  disabledOptionItem: {
    value: "",
    text: "Choose"
  },
  optionValueFieldName: "value",
  optionTextFieldName: "text",
  className: "form-control",
  parentClass: "form-group form-material floating",
  labelClass:"floating-label",
}


const SelectWidget = (props, context) => {

  let elementProps = {};
  let _excludes = ['labelName', 'parentClass', 'labelClass', 'children', 'optionItems', 'disabledOptionItem', 'optionValueFieldName', 'optionTextFieldName'];

  for (let prop in props) {
    if(_excludes.indexOf(prop) == -1){
        elementProps[prop] = props[prop];
    }
  }


    return(
      <div className={props.parentClass}>
        <select {...elementProps}>
          { props.optionItems.map((item, index) => {
            return (<option value={item[props.optionValueFieldName]} key={item[props.optionValueFieldName]}>{item[props.optionTextFieldName]}</option>);
          })}
        </select>
        {props.children}
        <label className={ props.labelClass }>{ props.labelName }</label>
      </div>
    );
}

SelectWidget.propTypes = propTypes;
SelectWidget.defaultProps = defaultProps;

export default SelectWidget;
