import React, { PropTypes } from 'react';


var propTypes = {
  parentClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelName : PropTypes.string.isRequired
}

var defaultProps = {
  parentClass: null,
  labelClass : null,
}

const InputWidget = (props, context) => {

  let elementProps = {};
  
  for (let prop in props) {
    if(prop != 'labelName' && prop != 'parentClass' && prop != 'labelClass' && prop != 'children'){
        elementProps[prop] = props[prop];
    }
  }

  return(
    <div className={props.parentClass}>
      <input {...elementProps}/>
      { props.children }
      <label className={props.labelClass}>
        {props.labelName}
      </label>
    </div>
  );
}


InputWidget.propTypes = propTypes;
InputWidget.defaultProps = defaultProps;


export default InputWidget;
