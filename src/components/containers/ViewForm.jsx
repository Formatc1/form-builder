import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchInputs, changeValue } from '../../actions/index.js';

class ViewFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  handleChange(value, index) {
    this.props.dispatch(changeValue(index, value));
  }

  render() {

    return (
      <div>
        inputs
      </div>
    );
  }
}

ViewFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    inputs: state.form.schema || []
  };
};

export default connect(mapStateToProps)(ViewFormContainer);
