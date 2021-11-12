import { CandidateProfileInterface } from "./common.interface";

export const getCurrentUser = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "{}");
  return currentUser;
};

export const paginationCal = (props: {
  perPage: number;
  currentPage: number;
  tableData: CandidateProfileInterface[];
}) => {
  const indexOfLastItem = props.currentPage * props.perPage;
  const indexOfFirstItem = indexOfLastItem - props.perPage;
  const currentItems = props.tableData.slice(indexOfFirstItem, indexOfLastItem);
  return currentItems;
};
export const userID = (): string | null => {
  return new URLSearchParams(window.location.search).get("id");
};

export const formatProfileData = async (data: CandidateProfileInterface) => {
  const result = await {
    name: data.name,
    email: data.email,
    gender: "",
    experience: data.experience,
    current_salary: data.current_salary,
    expected_ctc: data.expected_ctc,
    notice_period: data.notice_period,
    current_status: data.current_status,
    technology: data.technology,
    contact_no: data.contact_no,
    head_hunted_by: data.head_hunted_by,
    source_of_hire: data.source_of_hire,
    dob: "",
  };
  return result;
};
