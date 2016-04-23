import React from 'react';

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

export default TextInput;
