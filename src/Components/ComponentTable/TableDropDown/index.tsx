import { FC } from "react";
import { header } from "src/constants";
import Props from "./tabledropdown.interface";

const DropDown: FC<Props> = ({ handlePerPage, perPage, select }) => {
  return (
    <div>
      <div className="input-group">
        <label className="mt-2 me-2">{header.page}</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={perPage}
          onChange={(e) => handlePerPage(parseInt(e.target.value))}
        >
          {select?.map((perPage, index: number) => {
            return <option key={index}>{perPage.value}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default DropDown;
