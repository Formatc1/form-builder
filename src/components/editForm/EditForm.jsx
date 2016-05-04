import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Checkbox from 'react-toolbox/lib/checkbox';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Switch from 'react-toolbox/lib/switch';

import PreviewInput from './PreviewInput';
import EditInput from './EditInput';

import { fetchInputs, toggleAddingDialog, openInputToEdit } from '../../actions/';

import styles from './styles';

export default class EditFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  handleToggleAddingDialog() {
    this.props.dispatch(toggleAddingDialog());
  }

  handleClickOnInput(index) {
    this.props.dispatch(openInputToEdit(index));
  }

  getActions() {
    return [
      {label: 'Cancel', onClick: this.handleToggleAddingDialog.bind(this)},
      {label: 'Add', onClick: this.handleToggleAddingDialog.bind(this)}
    ];
  }

  createInputPreview(input, i) {
    switch (input.type) {
      case 'checkbox':
        return <Checkbox
                  checked={input.value}
                  label={input.label}
                  disabled />;
      case 'date-picker':
        return <Input
                  label={input.label}
                  value={new Date(input.value)}
                  disabled />;
      case 'dropdown':
        return <Dropdown
                  label={input.label}
                  value={input.value}
                  source={input.options}
                  disabled />;
      case 'input':
        return <Input
                  type='text'
                  hint={input.hint}
                  icon={input.icon}
                  label={input.label}
                  maxLength={input.maxLength}
                  required={input.required}
                  value={input.value}
                  disabled />;
      case 'radio':
        return <RadioGroup
                  className={styles.radioGroup}
                  name={input.name}
                  value={input.value}
                  disabled>
                  {input.options.map((item, i) =>
                    <RadioButton
                       key={i}
                       label={item.label}
                       value={item.value} />
                  )}
        </RadioGroup>;
      case 'slider':
        return  <div>
          <p className={styles.slider}>{input.label}</p>
          <ProgressBar
            className={styles.slider}
             min={input.min}
             max={input.max}
             buffer={input.value}
             mode='determinate' />
        </div>;
      case 'switch':
        return <Switch
                  name={input.name}
                  label={input.label}
                  checked={input.value}
                  disabled />;
      case 'time-picker':
        return <Input
                  value={new Date(input.value)}
                  label={input.label}
                  disabled />;
      default:
        return undefined;
    }
  }

  render() {
    return (
      <div>
        <div className={styles.flexContainer}>
          <Card className={styles.card}>
            <CardTitle title='Edit'/>
            <CardText>
              {this.props.edit.input
                ? <EditInput input={this.props.edit.input} />
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
                  editing={this.props.edit.inputIndex}
                  handleClick={this.handleClickOnInput.bind(this, i)}>
                  {this.createInputPreview(input, i)}
                </PreviewInput>
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
          actions={this.getActions()}
          active={this.props.edit.activeAddingDialog || false}
          onEscKeyDown={this.handleToggleAddingDialog.bind(this)}
          onOverlayClick={this.handleToggleAddingDialog.bind(this)}
          title='Add new input'>
          Placeholder for dropdown with input types
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
