import React from 'react';

const ParagraphWidget = (props, context) => {
  let elementProps = {};
  let _excludes = ['children'];

  for (let prop in props) {
    if(_excludes.indexOf(prop) == -1){
        elementProps[prop] = props[prop];
    }
  }

  return(
    <p {...elementProps}>
      {props.children}
    </p>
  );
}

export default ParagraphWidget;
