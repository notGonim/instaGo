
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import UserContext from "./context/user";
import useAuthListner from "./hooks/use-auth-listner";


const login = lazy(() => import('./pages/Login'))
const signup = lazy(() => import('./pages/Signup'))
const dashboard = lazy(() => import('./pages/Dashboard'))
const notFound = lazy(() => import('./pages/not-found'))



function App() {

  const { user } = useAuthListner()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} exact component={dashboard} />
            <Route path={ROUTES.LOGIN} exact component={login} />
            <Route path={ROUTES.SIGNUP} exact component={signup} />
            <Route path={ROUTES.NOT_FOUND} exact component={notFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
