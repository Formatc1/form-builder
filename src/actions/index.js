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

export function changeValue (name, value) {
  return changePropValue(name, 'value', value);
}

let autoNum = 0;
export function changeType (name, type) {
  return {
    type: 'CHANGE_TYPE',
    schema: Object.assign({}, defaultValues[type], {
      name: `input_${autoNum++}`,
      type
    }),
    name
  };
}

export function changePropValue (name, key, value) {
  return {
    type: 'CHANGE_PROP_VALUE',
    name,
    key,
    value
  };
}
