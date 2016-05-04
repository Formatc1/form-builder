import React from 'react';

import Checkbox from 'react-toolbox/lib/checkbox';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Switch from 'react-toolbox/lib/switch';
import time from 'react-toolbox/lib/utils/time';

import styles from './styles';

const PreviewInput = (props) => {
  const createInputPreview = (input, i) => {
    switch (input.type) {
      case 'checkbox':
        return <Checkbox
                  checked={input.value}
                  label={input.label}
                  disabled />;
      case 'date-picker':
        return <Input
                  label={input.label}
                  value={time.formatDate((new Date(input.value)))}
                  disabled />;
      case 'dropdown':
        return <Dropdown
                  label={input.label}
                  value={input.value}
                  source={input.options}
                  disabled />;
      case 'input':
        return <Input
                  type='text'
                  hint={input.hint}
                  icon={input.icon}
                  label={input.label}
                  maxLength={input.maxLength}
                  required={input.required}
                  value={input.value}
                  disabled />;
      case 'radio':
        return <RadioGroup
                  className={styles.radioGroup}
                  name={input.name}
                  value={input.value}
                  disabled>
                  {input.options.map((item, i) =>
                    <RadioButton
                       key={i}
                       label={item.label}
                       value={item.value} />
                  )}
        </RadioGroup>;
      case 'slider':
        return  <div>
          <p className={styles.slider}>{input.label}</p>
          <ProgressBar
            className={styles.slider}
            min={input.min}
            max={input.max}
            value={input.min}
            buffer={input.value}
            mode='determinate' />
        </div>;
      case 'switch':
        return <Switch
                  name={input.name}
                  label={input.label}
                  checked={input.value}
                  disabled />;
      case 'time-picker':
        return <Input
                  value={time.formatTime((new Date(input.value)))}
                  label={input.label}
                  disabled />;
      default:
        return undefined;
    }
  };

  return (
    <div className={props.editing === props.index
      ? styles.inputContainer__active
      : styles.inputContainer}
      onClick={props.handleClick}>
      {createInputPreview(props.input, props.i)}
    </div>
  );
};

export default PreviewInput;
