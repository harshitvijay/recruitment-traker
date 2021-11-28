import { FC, SetStateAction, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import debounce from "lodash/debounce";
import swal from "sweetalert";
import DataTable from "../DataTable/index";
import DropDown from "../TableDropDown/index";
import Pagination from "../Pagination/index";
import { getCandidateProfile, getCandidateUpdatedProfile } from "src/service";
import Search from "../Search/index";
import { CandidateProfileInterface, DropDownTypes } from "src/common.interface";
import {
  dropDownConstants,
  tableHeadings,
  userProfileListUrl,
  userDeleteProfileUrl,
} from "src/constants";
import { paginationCal } from "src/utils";

const TableMain: FC = () => {
  const [tableData, setTableData] = useState<Array<CandidateProfileInterface>>(
    []
  );
  const [option, setOption] = useState<DropDownTypes[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [search, setSearch] = useState<string>("");
  const [select, setSelect] = useState<DropDownTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getCandidateProfile(userProfileListUrl);
      if (data.success) {
        setTableData(data?.data?.profiles);
      }
    };
    console.log("tabledatata", tableData);
    setOption(tableHeadings);
    setSelect(dropDownConstants);
    getData();
    setLoading(false);
  }, [perPage, currentPage, search]);
  const handleSearch = useRef(
    debounce((query: string) => {
      setSearch(query);
      setCurrentPage(1);
    }, 500)
  ).current;

  const handlePerPage = (perPage: SetStateAction<number>) => {
    setCurrentPage(1);
    setPerPage(perPage);
  };

  const pageSelect = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const deleteHandler = (id: number) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    const getDeletedData = async () => {
      const data = await getCandidateUpdatedProfile(userDeleteProfileUrl, id);
      if (data.success) {
        console.log("");
      }
    };
    getDeletedData();
  };
  const history = useHistory();
  const editHandler = (id: number, index: number) => {
    setShowModal(true);
    history.push(`/addprofile?id=${id}`);
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-8 col-sm-12">
          <div className="input-group">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <DropDown
            handlePerPage={handlePerPage}
            perPage={perPage}
            select={select}
          />
        </div>
      </div>
      <DataTable
        option={option}
        tableData={paginationCal({ perPage, currentPage, tableData })}
        loading={loading}
        search={search}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {tableData.length && !loading && (
        <div className="mt-2">
          <Pagination
            perPage={perPage}
            totalItems={tableData.length}
            pageSelect={pageSelect}
          />
        </div>
      )}
    </div>
  );
};

export default TableMain;
