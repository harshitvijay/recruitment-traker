import { FC } from "react";
import DashboardContent from "../DashboardContent";
import SideNavList from "../SideNavList";
import "./style.css";

const SideNav: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <SideNavList />
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default SideNav;
