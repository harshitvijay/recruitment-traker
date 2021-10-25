import React, { FC } from "react";
import SideNav from "src/Components/SideNav";
import TopNav from "src/Components/TopNav";

const DashboardPage: FC = () => {
  return (
    <React.Fragment>
      <TopNav />
      <SideNav />
    </React.Fragment>
  );
};

export default DashboardPage;
