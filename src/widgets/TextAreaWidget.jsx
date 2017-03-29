import React, {Component, PropTypes} from 'react';



let propTypes = {
  labelName : PropTypes.string.isRequired,
  parentClass : PropTypes.string,
  labelClass : PropTypes.string
}

let defaultProps = {
  parentClass : null,
  labelClass: null
}


const TextAreaWidget = (props, context) => {

  let elementProps = {};

  for (let prop in props) {
    if(prop != 'labelName' && prop != 'parentClass' && prop != 'labelClass' && prop != 'children'){
        elementProps[prop] = props[prop];
    }
  }

  return(
    <div className={props.parentClass}>
      <textarea {...elementProps}></textarea>
      {props.children}
      <label className={props.labelClass}>{props.labelName}</label>
    </div>
  );
}


TextAreaWidget.propTypes = propTypes;
TextAreaWidget.defaultProps = defaultProps;

export default TextAreaWidget;
