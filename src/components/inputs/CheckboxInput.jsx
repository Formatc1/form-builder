import React from 'react';

const CheckboxInput = (props) => {
  return (
    <div>
      <span>{props.label}</span>
      {props.options.map((option, i) =>
        <div key={i}>
          <input type={props.type}
                 name={props.name}
                 id={`${props.name}-${i}`}
                 value={option.value}
                 checked={option.checked}
                 onChange={e => props.onChange(props.name, e.target.value)}/>
          <label htmlFor={`${props.name}-${i}`}>{option.text}</label>
        </div>
      )}
    </div>
  );
};

export default CheckboxInput;
