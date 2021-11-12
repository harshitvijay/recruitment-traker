import React, { SetStateAction } from "react";
import { CandidateProfileInterface, DropDownTypes } from "src/common.interface";

interface Props {
  option: DropDownTypes[];
  tableData: CandidateProfileInterface[];
  loading: boolean;
  search: string;
  deleteHandler(value: number): void;
  editHandler(value: number, index: number): void;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}
export default Props;
