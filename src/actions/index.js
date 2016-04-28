import { defaultValues } from '../components/inputs';

function fetchedInputs(inputs) {
  return {
    type: 'FETCHED_INPUTS',
    inputs: inputs.forms.schema
  };
}

export function fetchInputs () {
  return (dispatch) => {
     fetch('/store.json')
     .then(response => response.json())
     .then(json => dispatch(fetchedInputs(json)));
   };
}

export function changeValue (index, value) {
  return changePropValue(index, 'value', value);
}

export function changeType (index, type) {
  return {
    type: 'CHANGE_TYPE',
    schema: Object.assign({}, defaultValues[type], {
      name: `input_${type}`,
      type
    }),
    index
  };
}

export function changePropValue (index, key, value) {
  return {
    type: 'CHANGE_PROP_VALUE',
    index,
    key,
    value
  };
}

export function changeOptionPropValue (index, optionIndex, key, value) {
  return {
    type: 'CHANGE_OPTION_PROP_VALUE',
    index,
    optionIndex,
    key,
    value
  };
}

export function removeInput (index) {
  return {
    type: 'REMOVE_INPUT',
    index
  };
}

export function addOption (index) {
  return {
    type: 'ADD_OPTION',
    index
  };
}

export function removeOption (index, optionIndex) {
  return {
    type: 'REMOVE_OPTION',
    index,
    optionIndex
  };
}
