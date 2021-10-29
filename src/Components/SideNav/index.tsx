import React, { FC } from "react";
import SideNavList from "../SideNavList";
import "./style.css";

const SideNav: FC<{ child1?: React.ReactNode }> = ({ child1 }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <SideNavList />
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10">{child1}</main>
      </div>
    </div>
  );
};

export default SideNav;
