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
               value={option.text}
               onChange={(e) =>
                 props.handleChangeOptionPropValue(i, 'text', e.target.value)} />
        <input type='text'
               name={`${props.name}-${option.value}-value`}
               value={option.value}
               onChange={(e) =>
                 props.handleChangeOptionPropValue(i, 'value', e.target.value)} />
             <button onClick={() => props.handleRemoveOption(i)}>Remove Option</button>
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
