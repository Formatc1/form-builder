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
