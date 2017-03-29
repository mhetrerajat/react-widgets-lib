import React, {Component, PropTypes} from 'react';


let propTypes = {
  parentClass: PropTypes.string,
  btnText : PropTypes.string.isRequired
}


let defaultProps = {
  btnText: "Button",
  parentClass: null
}

const ButtonWidget = (props, context) =>{

  let elementProps = {};

  for (let prop in props) {
    if(prop != 'btnText' && prop != 'parentClass' && prop != 'children'){
        elementProps[prop] = props[prop];
    }
  }

  return(
    <div className={props.parentClass}>
      <button {...elementProps}>
        {props.btnLabel}
        {props.children}
      </button>
    </div>
  );
}


ButtonWidget.propTypes = propTypes;


export default ButtonWidget;
