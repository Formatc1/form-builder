import React from 'react';

const EditOptionsContainer = (props) => {
  const options = props.options.map((option, i) => {
    return (
      <div key={i}>
        <input type={props.type}
               name={`${props.name}`}
               value={option.value} />
        <input type='text'
               name={`${props.name}-${option.value}-name`}
               value={option.text} />
        <input type='text'
               name={`${props.name}-${option.value}-value`}
               value={option.value} />
        <button>Remove Option</button>
      </div>
    );
  });

  return (
    <div>
      {options}
      <button onClick={props.handleAddOption}>Add Option</button>
    </div>
  );
};

EditOptionsContainer.defaultProps = {
  options: []
};

export default EditOptionsContainer;
