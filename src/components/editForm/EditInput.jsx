import React, { PropTypes } from 'react';

const EditInput = (props) => {
  return <div>{props.input.type}</div>;
};

EditInput.propTypes = {
  input: PropTypes.object.isRequired
};

export default EditInput;
