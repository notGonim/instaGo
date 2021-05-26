
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'


const login = lazy(() => import('./pages/Login'))
const signup = lazy(() => import('./pages/Signup'))


function App() {
  return (

    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} exact component={login} />
          <Route path={ROUTES.SIGNUP} exact component={signup} />
        </Switch>
      </Suspense>
    </Router>


  );
}

export default App;
