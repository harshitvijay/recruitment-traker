import { FC } from "react";

const DashboardHeader: FC = () => {
  return (
    <div>
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
      <p className="text-secondary">
        The competition to hire the best will increase in the years ahead.
        Companies that give extra flexibility to their employees will have the
        edge in this area. (Bill Gates)
      </p>
    </div>
  );
};

export default DashboardHeader;
