import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import DashboardPage from "./Containers/DashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path={`/dashboard`}>
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
