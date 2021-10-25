import { FC } from "react";

const DashboardContent: FC = () => {
  return (
    <div className="dash-content">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav>
      <h1 className="h2">Dashboard</h1>
      <p>
        This is the homepage of a simple admin interface which is part of a
        tutorial written on Themesberg
      </p>
      <h3 className="text-secondary">Recent Candidate</h3>
      <div className="row my-4">
        <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-4">
          <div className="card">
            <h5 className="card-header">Harshit Vijayvargiya</h5>
            <div className="card-body">
              <h5 className="card-title">Experience: 5years</h5>
              <p className="card-text">React Developer</p>
              <p className="card-text text-danger">
                Current Company: Deqode Solution
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-4">
          <div className="card">
            <h5 className="card-header">Harshit Vijayvargiya</h5>
            <div className="card-body">
              <h5 className="card-title">$2.4k</h5>
              <p className="card-text">Feb 1 - Apr 1, United States</p>
              <p className="card-text text-success">
                4.6% increase since last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
          <div className="card">
            <h5 className="card-header">Purchases</h5>
            <div className="card-body">
              <h5 className="card-title">43</h5>
              <p className="card-text">Feb 1 - Apr 1, United States</p>
              <p className="card-text text-danger">
                2.6% decrease since last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
          <div className="card">
            <h5 className="card-header">Traffic</h5>
            <div className="card-body">
              <h5 className="card-title">64k</h5>
              <p className="card-text">Feb 1 - Apr 1, United States</p>
              <p className="card-text text-success">
                2.5% increase since last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
