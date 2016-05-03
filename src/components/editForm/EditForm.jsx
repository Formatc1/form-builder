import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

import { fetchInputs, toggleAddingDialog } from '../../actions/';

import styles from './styles';

export default class EditFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  handleToggleAddingDialog() {
    this.props.dispatch(toggleAddingDialog());
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
              Edit selected input
            </CardText>
          </Card>
          <Card className={styles.card}>
            <CardTitle title='Preview'/>
            <CardText>
              {this.props.inputs.map((input, i) => 'input')}
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
  inputs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputs: state.form.schema || [],
    edit: state.edit
  };
};

export default connect(mapStateToProps)(EditFormContainer);
