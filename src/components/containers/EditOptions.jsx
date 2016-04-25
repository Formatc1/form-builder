import React from 'react';

const EditOptionsContainer = (props) => {
  const options = props.options.map((option, i) => {
    return (
      <div key={i}>
        <input type={props.type}
               name={`${props.name}-${option.value}`}
               value={option.value} />
        <input type='text'
               name={`${props.name}-${option.value}-name`}
               value={option.text} />
        <input type='text'
               name={`${props.name}-${option.value}-value`}
               value={option.value} />
      </div>
    );
  });

  return (
    <div>{options}</div>
  );
};

EditOptionsContainer.defaultProps = {
  options: []
};

export default EditOptionsContainer;
