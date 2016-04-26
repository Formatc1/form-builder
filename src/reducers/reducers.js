// import { combineReducers } from 'redux';

function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCHED_INPUTS':
      return Object.assign({}, state, {
        schema: action.inputs
      });

    case 'CHANGE_TYPE':
      return Object.assign({}, state, {
        schema: state.schema.map((field) => {
          return field.name === action.name ? action.schema : field;
        })
      });

    case 'CHANGE_PROP_VALUE':
      return Object.assign({}, state, {
        schema: state.schema.map((field) => {
          if (field.name === action.name) {
            let newField = Object.assign({}, field);
            newField[action.key] = action.value;
            return newField;
          } else {
            return field;
          }
        })
      });

    default:
      return state;
  }
}

export default reducer;
