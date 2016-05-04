// import update from 'react-addons-update';

function reducer(state = {}, action) {
  switch (action.type) {
    case 'TOOGLE_ADDING_DIALOG':
      return Object.assign({}, state, {
        activeAddingDialog: !state.activeAddingDialog
      });

    case 'OPEN_INPUT_TO_EDIT':
      return Object.assign({}, state, {
        inputIndex: action.index
      });

    default:
      return state;
  }
}

export default reducer;
