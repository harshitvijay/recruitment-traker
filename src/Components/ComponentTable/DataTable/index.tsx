import { FC } from "react";
import Props from "./dataTable.interface";
import { CandidateProfileInterface } from "src/common.interface";
import { header } from "src/constants";
import "./style.css";
import Editing from "../Editing";

const DataTable: FC<Props> = ({
  option,
  tableData,
  loading,
  search,
  deleteHandler,
  editHandler,
  showModal,
  setShowModal,
}) => {
  let isSet = true;
  return (
    <div className="tablemain">
      <div className="card">
        <table className="table1">
          <thead>
            <tr>
              {option.map((name, index: number) => {
                return (
                  <th scope="col" key={index}>
                    {name.value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!tableData.length && (
              <tr>
                <td>{header.name} </td>
              </tr>
            )}
            {loading ? (
              <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">{header.loading}</span>
              </div>
            ) : (
              <>
                {tableData
                  ?.filter((val: CandidateProfileInterface) => {
                    if (search === "") {
                      isSet = true;
                    } else if (
                      val.name
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase()) ||
                      val.technology
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      isSet = true;
                    } else {
                      isSet = false;
                    }
                    return isSet;
                  })
                  ?.map((candidate, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td key={candidate.id}>{candidate.name}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.contact_no}</td>
                        <td>{candidate.technology}</td>
                        <td>{candidate.current_status}</td>
                        <td>{candidate.experience}</td>
                        <td>{candidate.current_salary}</td>
                        <td>{candidate.expected_ctc}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => editHandler(candidate.id, index)}
                          >
                            Edit
                            <Editing
                              id={candidate}
                              showModal={showModal}
                              setShowModal={setShowModal}
                            />
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteHandler(candidate.id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataTable;
