import update from 'react-addons-update';

function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCHED_INPUTS':
      return Object.assign({}, state, {
        schema: action.inputs
      });

    case 'CHANGE_VALUE':
      return update(state, {
        schema: {
          [action.index]: {
            [action.field]: {$set: action.value}
          }
        }
      });

    default:
      return state;
  }
}

export default reducer;
