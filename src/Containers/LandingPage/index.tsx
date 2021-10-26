import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUserProfile from "src/Components/AddUserProfile";
import DashboardContent from "src/Components/DashboardContent";
import DashboardTableContent from "src/Components/DashboardTableContent";
import Login from "src/Components/Login";
import SideNav from "src/Components/SideNav";
import Signup from "src/Components/Signup";
import TopNav from "src/Components/TopNav";

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
        <Route path={`/dashboard`}>
          <TopNav />
          <SideNav child1={<DashboardContent />} />
        </Route>
        <Route path={`/tables`}>
          <TopNav />
          <SideNav child1={<DashboardTableContent />} />
        </Route>
        <Route path={`/addprofile`}>
          <TopNav />
          <SideNav child1={<AddUserProfile />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default LandingPage;
