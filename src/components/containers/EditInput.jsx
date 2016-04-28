import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, defaultValues } from '../inputs/index.js';
import { } from '../../actions/index.js';

const EditInputContainer = (props) => {
  return (
    <div>
      input
    </div>
  );
};

EditInputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EditInputContainer);
