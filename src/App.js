
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import UserContext from "./context/user";
import IsUserLoggedIn from "./helpers/is-user-logged-in";
import ProtectedRoute from "./helpers/protected-routes";
import useAuthListner from "./hooks/use-auth-listner";


const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const profile = lazy(() => import('./pages/Profile'))
const notFound = lazy(() => import('./pages/not-found'))


function App() {

  const { user } = useAuthListner()

  return (
    <UserContext.Provider value={{ user }}>
     <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGNUP}>
              <Signup />
            </IsUserLoggedIn>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact   >
              <Dashboard />
            </ProtectedRoute>
            <Route path={ROUTES.PROFILE} exact component={profile} />
            <Route component={notFound} />
          </Switch>
        </Suspense>
      </Router>
        </UserContext.Provider>

  );
}

export default App;
