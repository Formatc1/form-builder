import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore.js';

import EditFormContainer from './components/containers/EditForm.jsx';
import ViewFormContainer from './components/containers/ViewForm.jsx';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <div>
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
        <Link to={'view'}>View</Link>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='edit' component={EditFormContainer}/>
            <Route path='view' component={ViewFormContainer}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
