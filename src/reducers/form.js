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

    case 'CHANGE_OPTION_VALUE':
    return update(state, {
      schema: {
        [action.index]: {
          options: {
            [action.optionIndex]: {
              [action.field]: {$set: action.value}
            }
          }
        }
      }
    });

    case 'ADD_OPTION':
    return update(state, {
      schema: {
        [action.index]: {
          options: {
            $push: [
              {
                value: state.schema[action.index].options.length,
                label: ''
              }
            ]
          }
        }
      }
    });

    default:
      return state;
  }
}

export default reducer;
