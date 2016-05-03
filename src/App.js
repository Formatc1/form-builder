import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Card,
         CardTitle,
         CardText,
         CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import configureStore from './configureStore';

import EditFormContainer from './components/editForm/EditForm';
import ViewFormContainer from './components/viewForm/ViewForm';

import styles from './styles';

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

const Home = () => (
  <div className={styles.centered}>
    <Card className={styles.card}>
      <CardTitle title='Create new form'/>
      <CardText className={styles.cardText}>
        Build new form from scratch or edit existing one.
      </CardText>
      <CardActions>
        <Button className={styles.button} href='edit' label='Create' />
        <Button className={styles.button} href='edit' label='Edit' />
      </CardActions>
    </Card>
    <Card className={styles.card}>
      <CardTitle title='View form'/>
      <CardText className={styles.cardText}>
        View and fill existing form.
      </CardText>
      <CardActions>
        <Button className={styles.button} href='view' label='View' />
      </CardActions>
    </Card>
  </div>
);

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
