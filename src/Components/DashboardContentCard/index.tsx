import { FC } from "react";
import { CandidateProfileInterface } from "src/common.interface";

const DashboardContentCard: FC<{ data: CandidateProfileInterface }> = ({
  data,
}) => {
  return (
    <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-4 text-center">
      <div className="card">
        <h5 className="card-header">{data.name}</h5>
        <div className="card-body">
          <h5 className="card-title">Experience: {data.experience}</h5>
          <p className="card-text">{data.technology}</p>
          <p className="card-text text-danger">
            Current Company: Deqode Solution
          </p>
          <a className="card-link" href="#">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentCard;
