import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, SelectInput, defaultValues } from '../inputs/index.js';
import EditOptionsContainer from './EditOptions.jsx';
import { changeType, changePropValue } from '../../actions/index.js';

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
                          onChange={() => false} />;
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
                          onChange={() => false} />;
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
                                options={props.input.options} />;
      case 'checkbox':
        return <EditOptionsContainer type='checkbox'
                                name={props.input.name}
                                value={props.input.value}
                                options={props.input.options} />;
      default:
        return;
    }
  };

  const handleChangeType = (_, value) => {
    props.dispatch(changeType(props.input.name, value));
  };

  const handlePropValue = (key) => {
    return (_, value) => {
      props.dispatch(changePropValue(props.input.name, key, value));
    };
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
                onChange={() => false} />
      {renderPlaceholderInputIfNeccessary()}
      {renderDefaultValueInputIfNeccessary()}
      {renderOptions()}
      <button>Remove Input</button>
    </div>
  );
};

EditInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EditInputContainer);
