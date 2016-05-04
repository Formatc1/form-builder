import React, { PropTypes } from 'react';

import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';

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
  //     case 'date-picker':
  //       return <Input
  //                 label={input.label}
  //                 value={new Date(input.value)}
  //                 disabled />;
  //     case 'dropdown':
  //       return <Dropdown
  //                 label={input.label}
  //                 value={input.value}
  //                 source={input.options}
  //                 disabled />;
  //     case 'input':
  //       return <Input
  //                 type='text'
  //                 hint={input.hint}
  //                 icon={input.icon}
  //                 label={input.label}
  //                 maxLength={input.maxLength}
  //                 required={input.required}
  //                 value={input.value}
  //                 disabled />;
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
  //     case 'switch':
  //       return <Switch
  //                 name={input.name}
  //                 label={input.label}
  //                 checked={input.value}
  //                 disabled />;
  //     case 'time-picker':
  //       return <Input
  //                 value={new Date(input.value)}
  //                 label={input.label}
  //                 disabled />;
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
