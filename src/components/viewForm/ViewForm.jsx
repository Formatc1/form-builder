import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Checkbox from 'react-toolbox/lib/checkbox';

import { fetchInputs, changeValue } from '../../actions/index';

import styles from './styles';

class ViewFormContainer extends React.Component {
  handleChange(index, field, value) {
    this.props.dispatch(changeValue(index, field, value));
  }

  createInput(input, i) {
    switch (input.type) {
      case 'checkbox':
        return <Checkbox
                  key={i}
                  checked={input.checked}
                  label={input.label}
                  onChange={this.handleChange.bind(this, i, 'checked')} />;
      default:
        return undefined;
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchInputs());
  }

  render() {

    return (
      <Card className={styles.card}>
        <CardTitle title='Form'/>
        <CardText>
          {this.props.inputs.map((input, i) => this.createInput(input, i))}
        </CardText>
      </Card>
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
