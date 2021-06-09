
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import UserContext from "./context/user";
import IsUserLoggedIn from "./helpers/is-user-logged-in";
import ProtectedRoute from "./helpers/protected-routes";
import useAuthListner from "./hooks/use-auth-listner";


const login = lazy(() => import('./pages/Login'))
const signup = lazy(() => import('./pages/Signup'))
const dashboard = lazy(() => import('./pages/Dashboard'))
const profile = lazy(() => import('./pages/Profile'))
const notFound = lazy(() => import('./pages/not-found'))



/*
    <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
              <login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGNUP}>
              <signup />
            </IsUserLoggedIn>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact   >
              <dashboard />
            </ProtectedRoute>
            <Route component={notFound} />
          </Switch>
        </Suspense>
      </Router>


*/


function App() {

  const { user } = useAuthListner()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} exact component={dashboard} />
            <Route path={ROUTES.PROFILE} exact component={profile} />
            <Route path={ROUTES.LOGIN} exact component={login} />
            <Route path={ROUTES.SIGNUP} exact component={signup} />
            <Route path={ROUTES.NOT_FOUND} exact component={notFound} />
          </Switch>
        </Suspense>
      </Router>    </UserContext.Provider>

  );
}

export default App;
