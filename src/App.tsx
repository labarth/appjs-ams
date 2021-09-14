import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { SignIn } from 'modules/Auth/pages/SignIn';
import { Loading } from 'common/components/Loading/Loading';
import { isAppLoadingSelector } from 'common/selectors/selectors';

const App = (): JSX.Element => {
  const isAppLoading = useSelector(isAppLoadingSelector);

  if (isAppLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route exact path="/" render={() => (<div>Home Page</div>)} />
      <Route exact path="/signin" render={() => <SignIn />} />
      <Route render={() => (<div>Not found.</div>)} />
    </Switch>
  );
}

export default App;
