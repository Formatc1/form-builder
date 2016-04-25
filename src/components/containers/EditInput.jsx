import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, SelectInput } from '../inputs/index.js';
import EditOptionsContainer from './EditOptions.jsx';
import { changeType } from '../../actions/index.js';

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

  return (
    <div>
      <SelectInput name={`${props.input.name}-type`}
                   label='Select type:'
                   value={props.input.type}
                   options={[
                     {
                       text: 'text',
                       value: 'text'
                     },
                     {
                       text: 'password',
                       value: 'password'
                     },
                     {
                       text: 'email',
                       value: 'email'
                     },
                     {
                       text: 'number',
                       value: 'number'
                     },
                     {
                       text: 'radio',
                       value: 'radio'
                     },
                     {
                       text: 'checkbox',
                       value: 'checkbox'
                     },
                     {
                       text: 'select',
                       value: 'select'
                     },
                     {
                       text: 'textarea',
                       value: 'textarea'
                     }
                   ]}
                   onChange={handleChangeType} />
      <TextInput type='text'
                 name={`${props.input.name}-name`}
                 label='Name:'
                 value={props.input.name}
                 onChange={() => false} />
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
