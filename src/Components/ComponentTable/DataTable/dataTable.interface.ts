import { CandidateProfileInterface, DropDownTypes } from "src/common.interface";

interface Props {
  option: DropDownTypes[];
  tableData: CandidateProfileInterface[];
  loading: boolean;
  search: string;
}
export default Props;
