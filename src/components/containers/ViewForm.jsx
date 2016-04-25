import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { TextInput, CheckboxInput, SelectInput, TextareaInput }
  from '../inputs/index.js';
import { fetchInputs, changeValue } from '../../actions/index.js';

class ViewFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  handleChange(name, value) {
    this.props.dispatch(changeValue(name, value));
  }

  render() {
    const inputs = this.props.inputs.map((schema, i) => {
      switch (schema.type) {
        case 'text':
        case 'password':
        case 'email':
        case 'number':
          return <TextInput type={schema.type}
                            name={schema.name}
                            label={schema.label}
                            placeholder={schema.placeholder}
                            value={schema.value}
                            onChange={this.handleChange.bind(this)}
                            key={i} />;
        case 'radio':
        case 'checkbox':
          return <CheckboxInput type={schema.type}
                                name={schema.name}
                                label={schema.label}
                                options={schema.options}
                                value={schema.value}
                                onChange={this.handleChange.bind(this)}
                                key={i} />;
        case 'textarea':
          return <TextareaInput name={schema.name}
                                label={schema.label}
                                placeholder={schema.placeholder}
                                value={schema.value}
                                onChange={this.handleChange.bind(this)}
                                key={i} />;
        case 'select':
          return <SelectInput name={schema.name}
                              label={schema.label}
                              value={schema.value}
                              options={schema.options}
                              onChange={this.handleChange.bind(this)}
                              key={i} />;
        default:
          break;
      }
    });

    return (
      <div>
        {inputs}
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
