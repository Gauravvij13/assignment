import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router";
import { Loader } from "./atoms";

const Home = lazy(() =>
  import(/* webpackChunkName: 'Home' */ "./pages/Homepage")
);
const Login = lazy(() =>
  import(/* webpackChunkName: 'Login' */ "./pages/Auth/Login")
);
const Logout = lazy(() =>
  import(/* webpackChunkName: 'Logout' */ "./pages/Auth/Logout")
);

export const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};
