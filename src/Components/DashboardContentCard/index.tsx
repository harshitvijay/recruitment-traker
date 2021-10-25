import { FC } from "react";

const DashboardContentCard: FC = () => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
      <div className="card">
        <h5 className="card-header">Customers</h5>
        <div className="card-body">
          <h5 className="card-title">345k</h5>
          <p className="card-text">Feb 1 - Apr 1, United States</p>
          <p className="card-text text-success">
            18.2% increase since last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentCard;
