import { FC } from "react";
import DashboardHeader from "../DashboardHeader";

const DashboardTableContent: FC = () => {
  return (
    <div className="dash-content">
      <DashboardHeader title="User Details" mainHeading="Tables" />
    </div>
  );
};

export default DashboardTableContent;
