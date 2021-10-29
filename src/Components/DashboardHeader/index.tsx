import { FC } from "react";

const DashboardHeader: FC<{
  title: string;
  mainHeading: string;
}> = ({ title, mainHeading }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
      <h1 className="h2">{mainHeading}</h1>
      <p className="text-secondary">
        The competition to hire the best will increase in the years ahead.
        Companies that give extra flexibility to their employees will have the
        edge in this area. (Bill Gates)
      </p>
      <h3 className="text-secondary">{title}</h3>
    </div>
  );
};

export default DashboardHeader;
