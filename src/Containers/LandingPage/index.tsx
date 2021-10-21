import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "src/Components/Login";
import Signup from "src/Components/Signup";

const LandingPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path={`/signup`}>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default LandingPage;
