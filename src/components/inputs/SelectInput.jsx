import React, { PropTypes } from 'react';

const SelectInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <select id={props.name}
              name={props.name}
              value={props.value}
              onChange={e => props.onChange(props.name, e.target.value)}>
        {props.options.map((option, i) =>
          <option key={i} value={option.value}>{option.text}</option>
        )}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default SelectInput;
