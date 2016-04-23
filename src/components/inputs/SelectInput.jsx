import React from 'react';

const SelectInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <select id={props.name}
              name={props.name}
              value={props.value}
              multiple={props.multiple}
              onChange={e => props.onChange(props.name, e.target.value)}>
        {props.options.map((option, i) =>
          <option key={i} value={option.value}>{option.text}</option>
        )}
      </select>
    </div>
  );
};

export default SelectInput;
