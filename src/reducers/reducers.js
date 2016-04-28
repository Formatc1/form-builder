// import { combineReducers } from 'redux';

function reducer(state = {}, action) {
  const changePropValue = () => {
    let newField = Object.assign({}, state.schema[action.index]);
    newField[action.key] = action.value;
    return newField;
  };

  switch (action.type) {
    case 'FETCHED_INPUTS':
      return Object.assign({}, state, {
        schema: action.inputs
      });

    case 'CHANGE_PROP_VALUE':
      return Object.assign({}, state, {
        schema: state.schema
          .slice(0, action.index)
          .concat(changePropValue())
          .concat(state.schema.slice(action.index + 1))
      });

    case 'CHANGE_TYPE':
      return Object.assign({}, state, {
        schema: state.schema
          .slice(0, action.index)
          .concat([action.schema])
          .concat(state.schema.slice(action.index + 1))
      });

    default:
      return state;
  }
}

export default reducer;
