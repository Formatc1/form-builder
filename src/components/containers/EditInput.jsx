import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, defaultValues } from '../inputs/index.js';
import { changeType,
         changePropValue,
         removeInput } from '../../actions/index.js';

const EditInputContainer = (props) => {
  const typesOptions = Object.keys(defaultValues).map((key, i) =>
    <option value={key} key={i}>{key}</option>
  );

  const additionalFields = Object.keys(
    defaultValues[props.input.type]).map((key, i) => {
      const types = {
        string: 'text',
        number: 'number'
      };

      return <TextInput name={`${props.input.name}-${key}`}
                        type={types[typeof(defaultValues[props.input.type][key])]}
                        label={key}
                        value={props.input[key]}
                        key={i}
                        index={props.index}
                        onChange={value => props.dispatch(
                          changePropValue(props.index, key, value)
                        )} />;
    });

  return (
    <div>
      <select name={`${props.input.name}-type`}
              id={`${props.input.name}-type`}
              value={props.input.type}
              onChange={e => props.dispatch(
                changeType(props.index, e.target.value))}>
        {typesOptions}
      </select>
      <TextInput name={`${props.input.name}-name`}
                 type='text'
                 onChange={value => props.dispatch(
                   changePropValue(props.index, 'name', value)
                 )}
                 label='input name'
                 index={props.index}
                 value={props.input.name} />
      {additionalFields}
      <button onClick={() =>
          props.dispatch(removeInput(props.index))}>Remove input</button>
    </div>
  );
};

EditInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default connect()(EditInputContainer);
