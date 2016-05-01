import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchInputs, addInput } from '../../actions/index.js';

export default class EditFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  render() {
    return (
      <div>
        <button onClick={() =>
          this.props.dispatch(addInput())}>Add Input</button>
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
    inputs: state.form.schema || []
  };
};

export default connect(mapStateToProps)(EditFormContainer);
