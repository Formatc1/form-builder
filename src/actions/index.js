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

export function changeOptionValue (index, optionIndex, value) {
  return {
    type: 'CHANGE_OPTION_VALUE',
    index,
    value,
    optionIndex
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

export function openInputToEdit (index) {
  return {
    type: 'OPEN_INPUT_TO_EDIT',
    index
  };
}

export function doneEditingInput () {
  return {
    type: 'DONE_EDITING_INPUT'
  };
}

export function changeType (value) {
  return {
    type: 'CHANGE_TYPE',
    value
  };
}

export function addInput (input) {
  return {
    type: 'ADD_INPUT',
    input
  };
}
