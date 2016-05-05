import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

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
         doneEditingInput } from '../../actions/';

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

  getActions() {
    return [
      {label: 'Cancel', onClick: this.handleToggleAddingDialog.bind(this)},
      {label: 'Add', onClick: this.handleToggleAddingDialog.bind(this)}
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
