import { FC } from "react";
import TableMain from "../ComponentTable/TableMain";
import DashboardHeader from "../DashboardHeader";

const DashboardTableContent: FC = () => {
  return (
    <div className="dash-content">
      <DashboardHeader title="User Details" mainHeading="Tables" />
      <TableMain />
    </div>
  );
};

export default DashboardTableContent;
