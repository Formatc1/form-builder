import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, SelectInput, defaultValues } from '../inputs/index.js';
import EditOptionsContainer from './EditOptions.jsx';
import { changeType,
         changePropValue,
         removeInput,
         addOption,
         removeOption } from '../../actions/index.js';

const EditInputContainer = (props) => {
  const renderPlaceholderInputIfNeccessary = () => {
    switch (props.input.type) {
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'textarea':
        return <TextInput type='text'
                          name={`${props.input.name}-placeholder`}
                          label='Placeholder:'
                          value={props.input.placeholder}
                          onChange={handlePropValue('placeholder')} />;
      default:
        return;
    }
  };

  const renderDefaultValueInputIfNeccessary = () => {
    switch (props.input.type) {
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'textarea':
        return <TextInput type='text'
                          name={`${props.input.name}-value`}
                          label='Default value:'
                          value={props.input.value}
                          onChange={handlePropValue('value')} />;
      default:
        return;
    }
  };

  const renderOptions = () => {
    switch (props.input.type) {
      case 'radio':
      case 'select':
        return <EditOptionsContainer type='radio'
                                     name={props.input.name}
                                     value={props.input.value}
                                     handleAddOption={handleAddOption}
                                     handleRemoveOption={handleRemoveOption}
                                     options={props.input.options} />;
      case 'checkbox':
        return <EditOptionsContainer type='checkbox'
                                     name={props.input.name}
                                     value={props.input.value}
                                     handleAddOption={handleAddOption}
                                     handleRemoveOption={handleRemoveOption}
                                     options={props.input.options} />;
      default:
        return;
    }
  };

  const handleChangeType = (_, value) => {
    props.dispatch(changeType(props.index, value));
  };

  const handlePropValue = (key) => {
    return (_, value) => {
      props.dispatch(changePropValue(props.index, key, value));
    };
  };

  const handleRemoveInput = () => {
    props.dispatch(removeInput(props.index));
  };

  const handleAddOption = () => {
      props.dispatch(addOption(props.index));
  };

  const handleRemoveOption = (optionIndex) => {
    props.dispatch(removeOption(props.index, optionIndex));
  };

  return (
    <div>
      <SelectInput name={`${props.input.name}-type`}
                   label='Select type:'
                   value={props.input.type}
                   options={Object.keys(defaultValues).map(key => {
                     return {text: key, value: key};
                   })}
                   onChange={handleChangeType} />
      <TextInput type='text'
                 name={`${props.input.name}-name`}
                 label='Name:'
                 value={props.input.name}
                 onChange={handlePropValue('name')} />
      <TextInput type='text'
                name={`${props.input.name}-label`}
                label='Label:'
                value={props.input.label}
                onChange={handlePropValue('label')} />
      {renderPlaceholderInputIfNeccessary()}
      {renderDefaultValueInputIfNeccessary()}
      {renderOptions()}
      <button onClick={handleRemoveInput}>Remove Input</button>
    </div>
  );
};

EditInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EditInputContainer);
