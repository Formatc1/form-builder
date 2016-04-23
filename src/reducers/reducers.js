// import { combineReducers } from 'redux';

function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCHED_INPUTS':
      return Object.assign({}, state, {
        schema: action.inputs
      });

    case 'CHANGE_VALUE':
      return Object.assign({}, state, {
        schema: state.schema.map((field) => {
          return field.name === action.name ?
            Object.assign({}, field, {
              value: action.value
            }) : field;
        })
      });

    default:
      return state;
  }
}

export default reducer;
