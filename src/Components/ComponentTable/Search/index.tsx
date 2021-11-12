import { FC } from "react";
import Props from "./search.interface";

const Search: FC<Props> = ({ handleSearch }) => {
  return (
    <div className="w-100">
      <input
        className="form-control mr-sm-2 "
        placeholder="Search........"
        type="search"
        aria-label="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
