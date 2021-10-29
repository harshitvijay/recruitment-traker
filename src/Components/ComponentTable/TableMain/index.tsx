import { FC, SetStateAction, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import DataTable from "../DataTable/index";
import DropDown from "../TableDropDown/index";
import Pagination from "../Pagination/index";
import { getCandidateProfile } from "src/service";
import Search from "../Search/index";
import { CandidateProfileInterface, DropDownTypes } from "src/common.interface";
import {
  dropDownConstants,
  tableHeadings,
  userProfileList,
} from "src/constants";

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
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getCandidateProfile(userProfileList);
      if (data.success) {
        setTableData(data?.data?.profiles);
      }
    };
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

  return (
    <div className="tabel table-responsive">
      <div className="row mb-3">
        <div className="col-md-3">
          <div className="input-group">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
        <div className="col-md-2">
          <DropDown
            handlePerPage={handlePerPage}
            perPage={perPage}
            select={select}
          />
        </div>
      </div>
      <DataTable
        option={option}
        tableData={currentItems}
        loading={loading}
        search={search}
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
