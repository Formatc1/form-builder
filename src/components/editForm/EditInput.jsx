import React, { PropTypes } from 'react';

import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';

const EditInput = (props) => {
  const createInputEdit = () => {
    switch (props.input.type) {
      case 'checkbox':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <Checkbox
            checked={props.input.value}
            label='Default value'
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
      case 'date-picker':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <DatePicker
            label='Default value'
            value={new Date(props.input.value)}
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
  //     case 'dropdown':
  //       return <Dropdown
  //                 label={input.label}
  //                 value={input.value}
  //                 source={input.options}
  //                 disabled />;
      case 'input':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <Input
            value={props.input.hint}
            label='Input hint'
            onChange={props.handleChange.bind(undefined, 'hint')} />
          {/* TODO select icon in dialog */}
          <Input
            value={props.input.icon}
            label='Input icon'
            onChange={props.handleChange.bind(undefined, 'icon')} />
          <Input
            type='number'
            value={props.input.maxLength}
            label='Max input length'
            onChange={props.handleChange.bind(undefined, 'maxLength')} />
          <Checkbox
            checked={props.input.required}
            label='Required'
            onChange={props.handleChange.bind(undefined, 'required')} />
          <Input
            type='text'
            label='Default value'
            maxLength={props.input.maxLength}
            value={props.input.value}
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
  //     case 'radio':
  //       return <RadioGroup
  //                 className={styles.radioGroup}
  //                 name={input.name}
  //                 value={input.value}
  //                 disabled>
  //                 {input.options.map((item, i) =>
  //                   <RadioButton
  //                      key={i}
  //                      label={item.label}
  //                      value={item.value} />
  //                 )}
  //       </RadioGroup>;
  //     case 'slider':
  //       return  <div>
  //         <p className={styles.slider}>{input.label}</p>
  //         <ProgressBar
  //           className={styles.slider}
  //            min={input.min}
  //            max={input.max}
  //            buffer={input.value}
  //            mode='determinate' />
  //       </div>;
      case 'switch':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <Checkbox
            checked={props.input.value}
            label='Default value'
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
      case 'time-picker':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <TimePicker
            value={new Date(props.input.value)}
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
      default:
        return undefined;
    }
  };

  return <div>
    <p>Type: {props.input.type}</p>
      <Input
        value={props.input.name}
        label='Input name'
        onChange={props.handleChange.bind(undefined, 'name')} />
      {createInputEdit()}
  </div>;
};

EditInput.propTypes = {
  input: PropTypes.object.isRequired
};

export default EditInput;
