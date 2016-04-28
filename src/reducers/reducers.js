// import { combineReducers } from 'redux';

function reducer(state = {}, action) {
  const changePropValue = () => {
    let newField = Object.assign({}, state.schema[action.index]);
    newField[action.key] = action.value;
    return newField;
  };

  const addOption = () => {
    let newOptions = Object.assign({}, state.schema[action.index]);
    newOptions.options.push({text: '', value: ''});
    return newOptions;
  };

  const removeOption = () => {
    let newOptions = Object.assign({}, state.schema[action.index]);
    newOptions.options = newOptions.options.slice(0, action.optionIndex)
      .concat(newOptions.options.slice(action.optionIndex + 1));
    return newOptions;
  };

  switch (action.type) {
    case 'FETCHED_INPUTS':
      return Object.assign({}, state, {
        schema: action.inputs
      });

    case 'CHANGE_TYPE':
      return Object.assign({}, state, {
        schema: state.schema
          .slice(0, action.index)
          .concat([action.schema])
          .concat(state.schema.slice(action.index + 1))
      });

    case 'REMOVE_INPUT':
      return Object.assign({}, state, {
        schema: state.schema.slice(0, action.index)
          .concat(state.schema.slice(action.index + 1))
      });      

    case 'CHANGE_PROP_VALUE':
      return Object.assign({}, state, {
        schema: state.schema
          .slice(0, action.index)
          .concat([changePropValue()])
          .concat(state.schema.slice(action.index + 1))
      });

    case 'ADD_OPTION':
      return Object.assign({}, state, {
        schema: state.schema
          .slice(0, action.index)
          .concat([addOption()])
          .concat(state.schema.slice(action.index + 1))
      });

    case 'REMOVE_OPTION':
    return Object.assign({}, state, {
      schema: state.schema
        .slice(0, action.index)
        .concat(removeOption())
        .concat(state.schema.slice(action.index + 1))
    });

    default:
      return state;
  }
}

export default reducer;
