// import update from 'react-addons-update';

function reducer(state = {}, action) {
  switch (action.type) {
    case 'TOOGLE_ADDING_DIALOG':
      return Object.assign({}, state, {
        activeAddingDialog: !state.activeAddingDialog
      });

    default:
      return state;
  }
}

export default reducer;
