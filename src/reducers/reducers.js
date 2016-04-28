// import { combineReducers } from 'redux';

function reducer(state = {}, action) {
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

    default:
      return state;
  }
}

export default reducer;
