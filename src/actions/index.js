// import fetch from 'isomorphic-fetch';

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
  return {
    type: 'CHANGE_VALUE',
    name,
    value
  };
}
