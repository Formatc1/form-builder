import React, { PropTypes } from 'react';

import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';

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
      case 'dropdown':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <Card>
            <CardTitle title='Options'/>
            <CardText>
              {props.input.options.map((option, i) =>
                <Input
                  key={i}
                  label='Option label'
                  value={option.label}
                  onChange={props.handleOptionChange.bind(undefined, 'label', i)}/>
              )}
            </CardText>
            <CardActions>
              <Button
                label='Add option'
                onClick={props.handleAddOption}
                primary />
            </CardActions>
          </Card>
          <Dropdown
            label='Select default value'
            value={props.input.value}
            source={props.input.options}
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
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
      case 'slider':
        return <div>
          <Input
            value={props.input.label}
            label='Input label'
            onChange={props.handleChange.bind(undefined, 'label')} />
          <Input
            type='number'
            value={props.input.min}
            label='Minimum value'
            onChange={props.handleChange.bind(undefined, 'min')} />
          <Input
            type='number'
            value={props.input.max}
            label='Maximum value'
            onChange={props.handleChange.bind(undefined, 'max')} />
          <Input
            type='number'
            value={props.input.step}
            label='Step'
            onChange={props.handleChange.bind(undefined, 'step')} />
          <Input
            type='number'
            value={props.input.value}
            label='Default value'
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
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
