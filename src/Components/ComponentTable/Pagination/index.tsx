import { FC } from "react";
import Props from "./pagination.interface";

const Pagination: FC<Props> = ({ perPage, totalItems, pageSelect }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav aria-label="Pagination">
        <ul className="pagination">
          {pageNumber.map((number: number, index: number) => {
            return (
              <li className="page-item" key={index}>
                <a
                  onClick={() => pageSelect(number)}
                  className="page-link"
                  href="#"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
