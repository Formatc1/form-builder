import React, { PropTypes } from 'react';

const TextInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type}
             id={props.name}
             name={props.name}
             placeholder={props.placeholder}
             value={props.value}
             onChange={e => props.onChange(props.name, e.target.value)} />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
