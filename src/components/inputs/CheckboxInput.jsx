import React, { PropTypes } from 'react';

const CheckboxInput = (props) => {
  const handleChange = (target) => {
    if (props.type === 'radio') {
      return props.onChange(props.index, [target.value]);
    } else {
      if (target.checked) {
        return props.onChange(props.index, props.value.concat(target.value));
      } else {
        return props.onChange(props.index, props.value.filter(v => v !== target.value));
      }
    }
  };

  return (
    <div>
      <span>{props.label}</span>
      {props.options.map((option, i) =>
        <div key={i}>
          <input type={props.type}
                 name={props.name}
                 id={`${props.name}-${i}`}
                 value={option.value}
                 checked={props.value.indexOf(option.value) > -1}
                 onChange={e => handleChange(e.target)}/>
          <label htmlFor={`${props.name}-${i}`}>{option.text}</label>
        </div>
      )}
    </div>
  );
};

CheckboxInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default CheckboxInput;
