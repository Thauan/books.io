import { Router, Route, Switch } from 'react-router-dom';
import history from '../store/history';
import Login from '../pages/Login';
import LibraryBooks from '../pages/LibraryBooks';

const Routes: any = () => {
  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={LibraryBooks} />
          </Switch>
        )}
      />
    </Router>
  );
};

export default Routes;
