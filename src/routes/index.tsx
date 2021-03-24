import { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import history from '../store/history';
import Login from '../pages/Login';
import LibraryBooks from '../pages/LibraryBooks';
import { isAuthenticated } from '../utils/storage';

const Routes: any = () => {
  const dispatch: any = useDispatch();

  const isAuth = (): any =>
    isAuthenticated() ? dispatch({ type: 'ASYNC_REDIRECT_LOGGED' }) : null;

  useEffect(() => {
    isAuth();
  }, []);

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
