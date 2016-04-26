import React, { PropTypes } from 'react';

const TextareaInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea id={props.name}
             name={props.name}
             placeholder={props.placeholder}
             value={props.value}
             onChange={e => props.onChange(props.index, e.target.value)} />
    </div>
  );
};

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number
};

export default TextareaInput;
