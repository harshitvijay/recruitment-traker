export const RegistrationFormInputData = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter Name",
    name: "name",
  },
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeHolder: "Enter Confirm Password",
    name: "confirmPassword",
  },
];

export const LoginFormInputData = [
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
];

export const addProfileFormSelect = [
  {
    label: "Gender",
    name: "gender",
    option: ["Male", "Female", "Other"],
  },
  {
    label: "Location",
    name: "location",
    option: ["Indore", "Pune", "Hyderabad", "Ahemdabad"],
  },
  {
    label: "Hunted By",
    name: "head_hunted_by",
    option: [
      "Aman Yadva",
      "Vishal Soni",
      "Ayush Saini",
      "Samiksha Agrawal",
      "Ayushi Sengar",
      "Mohini Bansal",
      "Arpita Saxena",
    ],
  },
  {
    label: "Notice Period",
    name: "notice_period",
    option: ["30 days", "45 days", "60 days"],
  },
];
export const initialFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const userProfileInitialFields = {
  name: "",
  email: "",
  gender: "",
  experience: "",
  current_salary: "",
  expected_ctc: "",
  notice_period: "",
  current_status: "",
  technology: "",
  contact_no: "",
  head_hunted_by: "",
  source_of_hire: "",
};

export const CandidatePersonalInfo = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter Name",
    name: "name",
  },
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },

  {
    label: "Contact Number",
    type: "tel",
    placeHolder: "Enter Number",
    name: "contact_no",
  },
  {
    label: "Birth Date",
    type: "date",
    placeHolder: "Enter DOB",
    name: "dob",
  },
  {
    label: "Current CTC(In Lakh Per Annum)",
    type: "text",
    placeHolder: "Enter Current CTC",
    name: "current_salary",
  },
  {
    label: "Expected CTC(In Lakh Per Annum)",
    type: "text",
    placeHolder: "Enter Expected CTC",
    name: "expected_ctc",
  },
  {
    label: "Source of hire",
    type: "text",
    placeHolder: "Source of hire",
    name: "source_of_hire",
  },
  {
    label: "Experience",
    type: "text",
    placeHolder: "experience",
    name: "experience",
  },
  {
    label: "current status",
    type: "text",
    placeHolder: "current_status",
    name: "current_status",
  },
];

export const tableHeadings = [
  {
    label: "S.No",
    value: "S.no",
  },
  {
    label: "name",
    value: "Name",
  },
  {
    label: "email",
    value: "Email",
  },
  {
    label: "contact number",
    value: "Contact Number",
  },
  {
    label: "technology",
    value: "Technology",
  },
  {
    label: "current_status",
    value: "Current Status",
  },
  {
    label: "experience",
    value: "Experience",
  },
  {
    label: "current_salary",
    value: "Current Salary",
  },
  {
    label: "expected_ctc",
    value: "Excpected CTC",
  },
  {
    label: "Edit",
    value: "Edit",
  },
  {
    label: "Delete",
    value: "Delete",
  },
  {
    label: "View",
    value: "View",
  },
];

export const dropDownConstants = [
  {
    label: "five",
    value: "5",
  },
  {
    label: "ten",
    value: "10",
  },
  {
    label: "fifteen",
    value: "15",
  },
];
export const header = {
  name: "No Item Found",
  page: "Per Page",
  loading: "Loading...",
};

export const loginUrl = "https://rms-01.herokuapp.com/api/login";
export const signupUrl = "https://rms-01.herokuapp.com/api/register";
export const candidateProfileURL =
  "https://rms-01.herokuapp.com/api/get-profiles";
export const userProfileListUrl =
  "https://rms-01.herokuapp.com/api/get-profiles";
export const userProfileUpdatedProfileListUrl =
  "https://rms-01.herokuapp.com/api/update-profile/";
export const userCreateProfileListUrl =
  "https://rms-01.herokuapp.com/api/create-profile";
export const userDeleteProfileUrl = "";
export const selectUserTechonolgy = "https://rms-01.herokuapp.com/api/skillset";
export const skillSetUrl = "https://rms-01.herokuapp.com/api/skillset";
