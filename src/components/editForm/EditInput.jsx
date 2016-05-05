import React, { PropTypes } from 'react';

import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button, IconButton } from 'react-toolbox/lib/button';

import styles from './styles';

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
          <Card className={styles.cardBottomMargin}>
            <CardTitle title='Options'/>
            <CardText>
              {props.input.options.map((option, i) =>
                <div className={styles.flexContainer} key={i}>
                  <Input
                    className={styles.flexGrow}
                    label='Option label'
                    value={option}
                    onChange={props.handleOptionChange.bind(undefined, i)}/>
                  <IconButton
                    className={styles.removeIcon}
                    icon='delete'
                    onClick={props.handleRemoveOption.bind(undefined, i)}
                    disabled={props.input.options.length < 2} />
                </div>
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
            source={props.input.options.map((option, i) => {
              return {value: i, label: option};
            })}
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
      case 'radio':
        return <div>
          <Card className={styles.cardBottomMargin}>
            <CardTitle title='Options'/>
            <CardText>
              {props.input.options.map((option, i) =>
                <div className={styles.flexContainer} key={i}>
                  <Input
                    className={styles.flexGrow}
                    label='Option label'
                    value={option}
                    onChange={props.handleOptionChange.bind(undefined, i)}/>
                  <IconButton
                    className={styles.removeIcon}
                    icon='delete'
                    onClick={props.handleRemoveOption.bind(undefined, i)}
                    disabled={props.input.options.length < 2} />
                </div>
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
            source={props.input.options.map((option, i) => {
              return {value: i, label: option};
            })}
            onChange={props.handleChange.bind(undefined, 'value')} />
        </div>;
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
    <div className={styles.flexContainer}>
      <h3 className={styles.flexGrow}>Input type: {props.input.type}</h3>
      <div>
        <IconButton
          icon='done'
          onClick={props.handleClickDone} />
        <IconButton
          icon='delete'
          onClick={props.handleRemoveInput} />
      </div>
    </div>
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
