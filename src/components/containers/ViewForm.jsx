import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TextInput from '../inputs/TextInput.jsx';
import CheckboxInput from '../inputs/CheckboxInput.jsx';
import SelectInput from '../inputs/SelectInput.jsx';
import TextareaInput from '../inputs/TextareaInput.jsx';
import { fetchInputs, changeValue } from '../../actions/index.js';

// const mapStateToProps = () => {
//   return {
//     type: 'text',
//     name: 'input name',
//     label: 'text for label',
//     placeholder: 'text for placeholder',
//     value: 'new value'
//   };
// };

// const TextInputEnhanced = connect(mapStateToProps)(TextInput);

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
                                onChange={this.handleChange.bind(this)}
                                key={i} />;
        case 'textarea':
          return <TextareaInput type={schema.type}
                                name={schema.name}
                                label={schema.label}
                                placeholder={schema.placeholder}
                                value={schema.value}
                                onChange={this.handleChange.bind(this)}
                                key={i} />;
        case 'select':
          return <SelectInput type={schema.type}
                              name={schema.name}
                              label={schema.label}
                              value={schema.value}
                              multiple={schema.multiple}
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
