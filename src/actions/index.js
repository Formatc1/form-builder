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

export function changeValue (index, field, value) {
  return {
    type: 'CHANGE_VALUE',
    index,
    field,
    value
  };
}

export function removeInput (index) {
  return {
    type: 'REMOVE_INPUT',
    index
  };
}

export function toggleAddingDialog () {
  return {
    type: 'TOOGLE_ADDING_DIALOG'
  };
}
