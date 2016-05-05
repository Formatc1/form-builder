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
              [action.optionIndex]: {$set: action.value}
            }
          }
        }
      });

    case 'ADD_OPTION':
      return update(state, {
        schema: {
          [action.index]: {
            options: {
              $push: ['']
            }
          }
        }
      });

    case 'REMOVE_OPTION':
      return update(state, {
        schema: {
          [action.index]: {
            options: {
              $splice: [[action.optionIndex, 1]]
            },
            value: {
              $set: state.schema[action.index].value < action.optionIndex
                ? state.schema[action.index].value
                : state.schema[action.index].value === action.optionIndex
                  ? 0
                  : state.schema[action.index].value - 1
            }
          }
        }
      });

    default:
      return state;
  }
}

export default reducer;
