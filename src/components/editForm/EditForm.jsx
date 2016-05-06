import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Dropdown from 'react-toolbox/lib/dropdown';

import PreviewInput from './PreviewInput';
import EditInput from './EditInput';

import { fetchInputs,
         toggleAddingDialog,
         changeValue,
         changeOptionValue,
         addOption,
         removeOption,
         removeInput,
         openInputToEdit,
         doneEditingInput,
         changeType,
         addInput } from '../../actions/';

import styles from './styles';

const defaultValues = {
  checkbox: {
    type: 'checkbox',
    name: '',
    label: '',
    value: false
  },
  'date-picker': {
    type: 'date-picker',
    name: '',
    label: '',
    value: new Date()
  },
  dropdown: {
    type: 'dropdown',
    name: '',
    label: '',
    value: 0,
    options: [
      ''
    ]
  },
  input: {
    type: 'input',
    name: '',
    hint: '',
    icon: '',
    label: '',
    maxLength: 80,
    required: false,
    value: ''
  },
  radio: {
    type: 'radio',
    name: '',
    value: 0,
    options: [
      ''
    ]
  },
  slider: {
    type: 'slider',
    name: '',
    label: '',
    min: 0,
    max: 100,
    step: 1,
    value: 0
  },
  switch: {
    type: 'switch',
    name: '',
    label: '',
    value: false
  },
  'time-picker': {
    type: 'time-picker',
    name: '',
    label: '',
    value: new Date()
  }
};

export default class EditFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  handleToggleAddingDialog() {
    this.props.dispatch(toggleAddingDialog());
  }

  handleChangeType(value) {
    this.props.dispatch(changeType(value));
  }

  handleAddInput() {
    this.props.dispatch(addInput(defaultValues[this.props.edit.inputType]));
  }

  handleClickOnInput(index) {
    this.props.dispatch(openInputToEdit(index));
  }

  handleChange(index, field, value) {
    this.props.dispatch(changeValue(index, field, value));
  }

  handleOptionChange(index, optionIndex, value) {
    this.props.dispatch(changeOptionValue(index, optionIndex, value));
  }

  handleAddOption(index) {
    this.props.dispatch(addOption(index));
  }

  handleRemoveOption(index, optionIndex) {
    this.props.dispatch(removeOption(index, optionIndex));
  }

  handleRemoveInput(index) {
    this.props.dispatch(removeInput(index));
  }

  handleClickDone() {
    this.props.dispatch(doneEditingInput());
  }

  inputTypes() {
    return [
      {label: 'Checkbox', value: 'checkbox'},
      {label: 'Date Picker', value: 'date-picker'},
      {label: 'Dropdown', value: 'dropdown'},
      {label: 'Text Input', value: 'input'},
      {label: 'Radio', value: 'radio'},
      {label: 'Slider', value: 'slider'},
      {label: 'Switch', value: 'switch'},
      {label: 'Time Picker', value: 'time-picker'}
    ];
  }

  getActions() {
    return [
      {label: 'Cancel', onClick: this.handleToggleAddingDialog.bind(this)},
      {label: 'Add', onClick: this.handleAddInput.bind(this)}
    ];
  }

  render() {
    return (
      <div>
        <div className={styles.flexContainer}>
          <Card className={styles.card}>
            <CardTitle title='Edit'/>
            <CardText>
              {this.props.edit.inputIndex !== undefined
                ? <EditInput
                    input={this.props.inputs[this.props.edit.inputIndex]}
                    handleChange={this.handleChange.bind(
                      this, this.props.edit.inputIndex
                    )}
                    handleOptionChange={this.handleOptionChange.bind(
                      this, this.props.edit.inputIndex
                    )}
                    handleAddOption={this.handleAddOption.bind(
                      this, this.props.edit.inputIndex
                    )}
                    handleRemoveOption={this.handleRemoveOption.bind(
                      this, this.props.edit.inputIndex
                    )}
                    handleRemoveInput={this.handleRemoveInput.bind(
                      this, this.props.edit.inputIndex
                    )}
                    handleClickDone={this.handleClickDone.bind(
                      this
                    )} />
                : 'Select input to edit'}
            </CardText>
          </Card>
          <Card className={styles.card}>
            <CardTitle title='Preview'/>
            <CardText>
              {this.props.inputs.map((input, i) =>
                <PreviewInput
                  key={i}
                  index={i}
                  input={input}
                  editing={this.props.edit.inputIndex}
                  handleClick={this.handleClickOnInput.bind(this, i)} />
              )}
            </CardText>
          </Card>
        </div>

        <Button
          className={this.props.edit.activeAddingDialog ? styles.fab__active : styles.fab}
          icon='add'
          onClick={this.handleToggleAddingDialog.bind(this)}
          floating
          accent />
        <Dialog
          className={styles.dialog}
          actions={this.getActions()}
          active={this.props.edit.activeAddingDialog || false}
          onEscKeyDown={this.handleToggleAddingDialog.bind(this)}
          onOverlayClick={this.handleToggleAddingDialog.bind(this)}
          title='Add new input'>
        <Dropdown
          label='Select input type'
          value={this.props.edit.inputType}
          source={this.inputTypes()}
          onChange={this.handleChangeType.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

EditFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  edit: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputs: state.form.schema || [],
    edit: state.edit
  };
};

export default connect(mapStateToProps)(EditFormContainer);
