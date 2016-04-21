import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { EditFormContainer } from './EditForm.jsx';

import styles from './styles.scss';

const store = createStore(
  combineReducers({
    routing: routerReducer
  }), {}, window.devToolsExtension ? window.devToolsExtension() : undefined
);

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <div className={ styles.redbg }>
        {this.props.children}
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to={'edit'}>Create New</Link>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='edit' component={EditFormContainer}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
