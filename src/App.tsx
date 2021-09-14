import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { SignIn } from './SignIn';

const App = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => (<div>Home</div>)} />
        <Route exact path="/signin" render={SignIn} />
        <Route render={() => (<div>Not found.</div>)} />
      </Switch>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/not-found">
        not found
      </NavLink>
    </>
  );
}

export default App;
