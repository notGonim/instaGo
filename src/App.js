
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const login = lazy(() => import('./pages/Login'))

function App() {
  return (

    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path='/login' exact component={login} />
        </Switch>
      </Suspense>
    </Router>


  );
}

export default App;
