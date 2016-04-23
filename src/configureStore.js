import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers.js';
import { routerReducer } from 'react-router-redux';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  return createStore(combineReducers({
    form: reducer,
    routing: routerReducer
  }), initialState, enhancer);
}
