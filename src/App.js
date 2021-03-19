import LandingPage from "./pages/LandingPage";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
