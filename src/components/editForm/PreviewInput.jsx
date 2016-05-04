import React from 'react';

import styles from './styles';

const PreviewInput = (props) => {
  return (
    <div className={props.editing === props.index
      ? styles.inputContainer__active
      : styles.inputContainer}
      onClick={props.handleClick}>
      {props.children}
    </div>
  );
};

export default PreviewInput;
